import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../assets";
import {
  LayoutDashboard,
  ChartLine,
  ChartNoAxesCombined,
  ClipboardList,
  Clock,
  Users,
  University,
  Settings,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const AdminSidebar = () => {
  const [isCoursesActive, setIsCoursesActive] = useState(false);

  const active =
    "bg-adminPrimary flex w-full items-center gap-x-3 py-1 pl-2 text-white mb-2";
  const inactive =
    "bg-white flex w-full items-center gap-x-3 py-1 pl-2 text-black mb-2";
  const dropactive =
    "bg-adminPrimary flex w-full items-center gap-x-3 py-1 pl-7 text-white mb-2";
  const dropinactive =
    "bg-white flex w-full items-center gap-x-3 py-1 pl-7 text-black mb-2";

  const toggleCoursesActive = () => {
    setIsCoursesActive(!isCoursesActive);
  };

  return (
    <div className="h-screen w-full shadow">
      <div className="mx-auto w-[92%] py-4">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="mt-4 w-full ">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/analytics"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <ChartLine size={18} />
          Analytics
        </NavLink>
        <NavLink
          to="/admin/revenue"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <ChartNoAxesCombined size={18} />
          Revenue
        </NavLink>
        <NavLink
          to="/admin/report"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <ClipboardList size={18} />
          Reports
        </NavLink>
        <NavLink
          to="/admin/schedule"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <Clock size={18} />
          Schedule
        </NavLink>

        <div>
          <NavLink
            to="/admin/courses-management"
            onClick={toggleCoursesActive}
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            <University size={18} />
            Course Management
            <span className="">
              {isCoursesActive ? (
                <ChevronUp size={18} color="green" />
              ) : (
                <ChevronDown size={18} color="green" />
              )}
            </span>
          </NavLink>
          {isCoursesActive && (
            <ul className="mt-2 list-disc space-y-2">
              <li>
                <NavLink
                  to="/admin/courses/assignments"
                  className={({ isActive }) =>
                    isActive ? dropactive : dropinactive
                  }
                >
                  Assignments
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/courses/quick-practice"
                  className={({ isActive }) =>
                    isActive ? dropactive : dropinactive
                  }
                >
                  Quick Practice
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/courses/categories"
                  className={({ isActive }) =>
                    isActive ? dropactive : dropinactive
                  }
                >
                  Categories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/courses/course"
                  className={({ isActive }) =>
                    isActive ? dropactive : dropinactive
                  }
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/courses/add-topic"
                  className={({ isActive }) =>
                    isActive ? dropactive : dropinactive
                  }
                >
                  Add a new topic
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <NavLink
          to="/admin/projects"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <Users size={18} />
          Projects
        </NavLink>
        <div className={`${isCoursesActive ? "mt-1" : "mt-24"} py-1`}>
          <NavLink
            to="/admin/settings"
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            <Settings size={18} />
            Settings
          </NavLink>
          <button className="flex w-full items-center gap-x-3 py-1 pl-2 text-black">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
