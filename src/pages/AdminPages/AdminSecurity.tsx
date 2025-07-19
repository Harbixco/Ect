import { useState } from "react";

const AdminSecurity = () => {
  const [isTwoFactorEnabled, setIsTwoFactorEnabled] = useState(true);

  const toggleTwoFactor = () => {
    setIsTwoFactorEnabled(!isTwoFactorEnabled);
  };
  return (
    <div className="mx-auto w-full ">
      <h2 className="mb-4 text-xl font-bold">Security</h2>

      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-medium">Two-factor Authentication</p>
          <p className="text-sm text-gray-600">
            Enable or Disable Two-factor Authentication
          </p>
        </div>
        <label className="relative inline-flex cursor-pointer items-center">
          <input
            type="checkbox"
            checked={isTwoFactorEnabled}
            onChange={toggleTwoFactor}
            className="peer sr-only"
          />
          <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:size-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#6BC049] peer-checked:after:translate-x-full peer-checked:after:border-white "></div>
        </label>
      </div>

      <hr className="my-6" />
      <div
        className={`mb-4 flex items-center justify-between ${!isTwoFactorEnabled && "pointer-events-none opacity-50"}`}
      >
        <div>
          <p className="font-medium">Add another Email</p>
          <p className="text-sm text-gray-600">
            Email to send verification code
          </p>
        </div>
        <button className="rounded-lg border border-[#dadada] px-4 py-2">
          Set Up
        </button>
      </div>

      <hr className="my-6" />
      <div
        className={`mb-4 flex items-center justify-between ${!isTwoFactorEnabled && "pointer-events-none opacity-50"}`}
      >
        <div>
          <p className="font-medium">SMS Recovery</p>
          <p className="text-sm text-gray-600">Your phone number</p>
        </div>
        <button className="rounded-lg border border-[#dadada] px-4 py-2">
          Set Up
        </button>
      </div>

      <hr className="my-6" />

      <div className="mb-6 flex w-full flex-col items-start justify-between gap-y-8 md:flex-row md:gap-x-7 md:gap-y-0">
        <div className="w-full md:w-1/2 lg:w-3/5 ">
          <h3 className="font-medium">Password</h3>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">
              Current Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border p-2"
              placeholder="Your Password"
            />
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">
              New Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border p-2"
              placeholder="Your New Password"
            />
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full rounded-md border p-2"
              placeholder="Confirm New Password"
            />
          </div>
        </div>

        <div className="w-full rounded-md bg-adminBg p-4 md:w-1/2 lg:w-2/5">
          <h4 className="mb-2 text-center font-semibold">Rules for Password</h4>
          <p className="my-5 text-sm ">
            To create a new password, you have to follow all requirements
          </p>
          <ul className="list-inside list-disc text-sm ">
            <li className="mb-3 ">Minimum of 8 characters</li>
            <li className="mb-3 ">One special character</li>
            <li className="mb-3 ">At least one number</li>
            <li className="mb-3 ">Can't use previous passwords</li>
          </ul>
        </div>
      </div>

      <div className=" w-[80% ] mx-auto mb-6 mt-8 flex flex-col items-center justify-between gap-6 md:w-[60%] md:flex-row lg:w-[50%]">
        <button className="w-full rounded-3xl bg-adminPrimary py-1 text-sm  text-white md:text-base">
          Change password
        </button>
        <button className="w-full rounded-3xl border border-[#dadada]  bg-white py-1 text-sm text-black md:text-base ">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AdminSecurity;
