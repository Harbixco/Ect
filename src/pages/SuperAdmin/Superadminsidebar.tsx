import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../assets";
import {
  LayoutDashboard,
  Images,
  SquarePen,
  Users,
  BriefcaseBusiness,
  Settings,
  LogOut,
  TextSearch,
  ChevronUp,
  ChevronDown,
  Dot,
} from "lucide-react";
import { useState } from "react";

export default function Superadminsidebar() {
  const [isCoursesActive, setIsCoursesActive] = useState(false);
  const toggleCoursesActive = () => {
    setIsCoursesActive(!isCoursesActive);
  };

  const [isBlogActive, setIsBlogActive] = useState(false);
  const toggleBlogActive = () => {
    setIsBlogActive(!isBlogActive);
  };

  const [isPortfolioActive, setIsPortfolioActive] = useState(false);
  const togglePortfolioActive = () => {
    setIsPortfolioActive(!isPortfolioActive);
  };

  const active =
    "bg-adminPrimary flex w-full items-center gap-x-3 py-0.5 pl-2 text-white mb-2";
  const inactive = "flex w-full items-center gap-x-3 py-1 pl-2 text-white mb-2";
  const dropactive = "bg-adminPrimary flex w-full items-center pl-7 text-white";
  const dropinactive =
    "flex w-full items-center pl-7 text-black mb-2 text-white";

  return (
    <div className="h-screen w-full bg-[#398497] shadow">
      <div className="mx-auto w-[92%] py-4">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="mt-4 w-full">
        <NavLink
          to="/superadmin"
          end
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <div>
          <button>
            <div onClick={toggleCoursesActive} className="flex pl-2 text-white">
              <div className="pr-3">
                <BriefcaseBusiness size={18} />
              </div>
              <div className="mt-[-5px] pr-4">Opening Jobs</div>
              <div>
                <span className="">
                  {isCoursesActive ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              </div>
            </div>
            {isCoursesActive && (
              <ul className="mt-2 list-disc space-y-2">
                <li>
                  <NavLink
                    to="/superadmin/add-job"
                    className={({ isActive }) =>
                      isActive ? dropactive : dropinactive
                    }
                  >
                    <Dot size={35} />
                    <span> Add jobs</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/superadmin/view-job"
                    className={({ isActive }) =>
                      isActive ? dropactive : dropinactive
                    }
                  >
                    <Dot size={35} />
                    <span> View jobs</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </button>
        </div>

        <NavLink
          to="/superadmin/album"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <Images size={18} />
          Media
        </NavLink>

        <div className="py-3">
          <button>
            <div
              onClick={togglePortfolioActive}
              className="flex pl-2 text-white"
            >
              <div className="pr-3">
                <BriefcaseBusiness size={18} />
              </div>
              <div className="mt-[-5px] pr-12"> Portfolio</div>
              <div>
                <span className="">
                  {isPortfolioActive ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              </div>
            </div>
            {isPortfolioActive && (
              <ul className="mt-2 list-disc space-y-2">
                <li>
                  <NavLink
                    to="/superadmin/add-portfolio"
                    className={({ isActive }) =>
                      isActive ? dropactive : dropinactive
                    }
                  >
                    <Dot size={35} />
                    <span> Add Portfolio</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/superadmin/view-portfolio"
                    className={({ isActive }) =>
                      isActive ? dropactive : dropinactive
                    }
                  >
                    <Dot size={35} />
                    <span> View Portfolio</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </button>
        </div>

        <div className="pb-3">
          <button>
            <div onClick={toggleBlogActive} className="flex pl-2 text-white">
              <div className="pr-3">
                <SquarePen size={18} />
              </div>
              <div className="mt-[-5px] pr-[42px]">Blog Post</div>
              <div>
                <span className="">
                  {isBlogActive ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </span>
              </div>
            </div>
            {isBlogActive && (
              <ul className="mt-2 list-disc space-y-2">
                <li>
                  <NavLink
                    to="/superadmin/add-blog"
                    className={({ isActive }) =>
                      isActive ? dropactive : dropinactive
                    }
                  >
                    <Dot size={35} />
                    <span> Add Blog</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/superadmin/view-blog"
                    className={({ isActive }) =>
                      isActive ? dropactive : dropinactive
                    }
                  >
                    <Dot size={35} />
                    <span> View Blog</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </button>
        </div>

        <NavLink
          to="/superadmin/get-quote"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <TextSearch size={18} />
          Get a Quote directory
        </NavLink>

        <NavLink
          to="/superadmin/contact"
          className={({ isActive }) => (isActive ? active : inactive)}
        >
          <Users size={18} />
          Contact us
        </NavLink>

        <div className="mt-8"></div>
        <div
          className={`${isCoursesActive || !isPortfolioActive || !isBlogActive ? "mt-1" : "mt-24"} py-1`}
        >
          <NavLink
            to="/dashboard/setting"
            className={({ isActive }) => (isActive ? active : inactive)}
          >
            <Settings size={18} />
            Settings
          </NavLink>
          <button className=" flex w-full items-center gap-x-3 pl-2 text-white">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
