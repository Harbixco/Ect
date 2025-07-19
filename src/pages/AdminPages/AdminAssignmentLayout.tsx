/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminAssignmentLayout = () => {
  const activeLink =
    "mb-2 flex w-full items-center bg-[#6BC049] px-4 py-1 text-white";
  const inactiveLink =
    "mb-2 flex w-full items-center bg-transparent px-4 py-1 text-black";
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };
  return (
    <div className="flex w-full flex-col items-start gap-3 md:flex-row">
      <div className="w-full md:hidden">
        <select
          className="w-full rounded-lg border border-[#dadada]"
          onChange={handleNavigation}
        >
          <option value="">Assignments</option>
          <option value="">Ui/Ux</option>
          <option value="/admin/courses/assignments/web">
            Web development
          </option>
          <option value="/admin/courses/assignments/web">
            App development
          </option>
          <option value="/admin/courses/assignments/web">Javascript</option>
          <option value="/admin/courses/assignments/web">
            Digital Marketing
          </option>
        </select>
      </div>
      <div className="hidden h-screen w-full rounded-lg bg-adminBg py-2 shadow md:block md:w-1/4 lg:w-1/5">
        <h2 className="pl-4 text-lg font-semibold md:text-xl">Assignments</h2>
        <div className="mt-4 w-full">
          <NavLink
            to=""
            end
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            Ui/Ux
          </NavLink>
          <NavLink
            to="/admin/courses/assignments/web"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            web development
          </NavLink>
          <NavLink
            to="/admin/courses/assignments/app"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            App development
          </NavLink>
          <NavLink
            to="/admin/courses/assignments/javascript"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            Javascript
          </NavLink>
          <NavLink
            to="/admin/courses/assignments/digital"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            Digital marketing
          </NavLink>
        </div>
      </div>
      <div className="w-full rounded-xl bg-white md:w-[75%] lg:w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminAssignmentLayout;
