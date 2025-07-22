import { useState } from "react";

const AdminNotifSetting = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [checked, setChecked] = useState({
    newNotifications: false,
    emailNotifications: false,
    usersReview: true,
    systemUpdates: true,
    usersActivity: true,
    securityAlerts: true,
    errorReport: true,
    usersLogin: false,
  });

  const toggleSwitch = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setChecked((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className="rounded-lg bg-white py-8">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">Notification</h2>
        <div className="flex items-center">
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={toggleSwitch}
              className="peer sr-only"
            />
            <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:size-5  after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#6BC04A] peer-checked:after:translate-x-full peer-checked:after:border-white "></div>
          </label>
        </div>
      </div>
      <div className="mt-5 flex flex-col ">
        {Object.keys(checked).map((key) => (
          <div className="mb-6 flex items-center justify-between" key={key}>
            <label
              htmlFor={key}
              className="text-sm font-semibold capitalize md:text-base"
            >
              {key.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type="checkbox"
              id={key}
              name={key}
              checked={checked[key]}
              onChange={handleCheckboxChange}
              className="form-checkbox size-5 border-[#6BC04A] text-[#6BC04A] focus:border-[#6BC04A] md:mr-[10px] md:size-6 "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNotifSetting;
