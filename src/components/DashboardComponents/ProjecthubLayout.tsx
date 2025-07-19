/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ProjecthubLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const activeLink =
    "mb-2 flex w-full items-center bg-[#6BC049] px-4 py-1 text-white";
  const inactiveLink =
    "mb-2 flex w-full items-center bg-transparent px-4 py-1 text-black";
  return (
    <>
      <div className="hidden md:block">
        <div className="flex w-full flex-col items-start gap-3 md:flex-row">
          <div className="w-full rounded-lg bg-adminBg py-2 shadow md:h-screen md:w-1/4 lg:w-1/5">
            <h2 className="pl-4 text-lg font-semibold md:text-xl">
              Project Hub
            </h2>
            <div className="mt-4 w-full">
              <NavLink
                to="/dashboard/project"
                end
                className={({ isActive }) =>
                  isActive ? activeLink : inactiveLink
                }
              >
                View Project
              </NavLink>
              <NavLink
                to="/dashboard/project/submit-project"
                className={({ isActive }) =>
                  isActive ? activeLink : inactiveLink
                }
              >
                Submit Project
              </NavLink>
              <NavLink
                to="/dashboard/project/project-result"
                className={({ isActive }) =>
                  isActive ? activeLink : inactiveLink
                }
              >
                Result
              </NavLink>
            </div>
          </div>
          <div className="w-full rounded-xl bg-white md:w-[75%] lg:w-[80%]">
            <Outlet />
          </div>
        </div>
      </div>

      <div className="bg-[#f5f5f5] md:hidden">
        <div className="">
          <div className="mt-4  items-center">
            <div>
              <button
                onClick={toggleDropdown}
                className="inline-flex w-full px-4 py-2 text-sm font-semibold"
              >
                Project Hub
                <ChevronDown />
              </button>

              {isOpen && (
                <div
                  className="absolute  mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-button"
                >
                  <div className="mt-4 w-full">
                    <NavLink
                      to="/dashboard/project"
                      end
                      className={({ isActive }) =>
                        isActive ? activeLink : inactiveLink
                      }
                    >
                      View Project
                    </NavLink>
                    <NavLink
                      to="/dashboard/project/submit-project"
                      className={({ isActive }) =>
                        isActive ? activeLink : inactiveLink
                      }
                    >
                      Submit Project
                    </NavLink>
                    <NavLink
                      to="/dashboard/project/project-result"
                      className={({ isActive }) =>
                        isActive ? activeLink : inactiveLink
                      }
                    >
                      Result
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-1 w-full rounded-xl">
          <Outlet />
        </div>
      </div>
    </>
  );
}
