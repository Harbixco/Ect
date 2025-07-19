import { NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminSettingsLayout = () => {
  const activeLink =
    "mb-4 flex w-full items-center bg-[#6BC049] px-4 py-1 text-white";
  const inactiveLink =
    "mb-4 flex w-full items-center bg-transparent px-4 py-1 text-black";
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };
  return (
    <div className="flex w-full flex-col items-start gap-2 md:flex-row">
      <div className="w-full md:hidden">
        <select
          className="w-full rounded-lg border border-[#dadada]"
          onChange={handleNavigation}
        >
          <option value="">Settings</option>
          <option value="/admin/settings">My Profile</option>
          <option value="/admin/settings/general">General</option>
          <option value="/admin/settings/notification">Notification</option>
          <option value="/admin/settings/security">Security</option>
        </select>
      </div>
      <div className="hidden h-screen w-full rounded-l-3xl bg-white py-2 shadow md:block md:w-1/4 lg:w-1/5">
        <div className="mt-4 w-full">
          <NavLink
            to="/admin/settings"
            end
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            My Profile
          </NavLink>
          <NavLink
            to="/admin/settings/general"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            General
          </NavLink>
          <NavLink
            to="/admin/settings/notification"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            Notification
          </NavLink>
          <NavLink
            to="/admin/settings/security"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            Security
          </NavLink>
        </div>
      </div>
      <div className="w-full rounded-xl bg-white py-3 md:w-[75%] lg:w-[80%]">
        <div className="mx-auto w-[96%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsLayout;
