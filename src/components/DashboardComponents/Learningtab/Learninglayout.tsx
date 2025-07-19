/* eslint-disable tailwindcss/migration-from-tailwind-2 */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
// import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Learninglayout() {
  const activeLink = "mb-2 flex items-center px-4 py-1 font-semibold";
  const inactiveLink =
    "mb-2 flex items-center bg-transparent px-4 py-1 text-[#D9D9D9]";
  return (
    <>
      <div className="">
        <div className="">
          <div className="mt-4 flex items-center">
            <NavLink
              to="/learningtab/Learninglayout/resources"
              end
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
            >
              {({ isActive }) => (
                <div>
                  <div className="text-[12px] md:text-base"> Resources</div>
                  {isActive && <div></div>}
                </div>
              )}
            </NavLink>

            <NavLink
              to="/learningtab/Learninglayout/prevtopic"
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
            >
              {({ isActive }) => (
                <div>
                  <div className="text-[12px] md:text-base"> Prev topic</div>
                  {isActive && <div></div>}
                </div>
              )}
            </NavLink>

            <NavLink
              to="/learningtab/Learninglayout/nexttopic"
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
            >
              {({ isActive }) => (
                <div>
                  <div className="text-[12px] md:text-base"> Next topic</div>
                  {isActive && <div></div>}
                </div>
              )}
            </NavLink>
            <NavLink
              to="/learningtab/Learninglayout/reviews"
              className={({ isActive }) =>
                isActive ? activeLink : inactiveLink
              }
            >
              {({ isActive }) => (
                <div>
                  <div className="text-[12px] md:text-base"> Reviews</div>
                  {isActive && <div></div>}
                </div>
              )}
            </NavLink>
          </div>
        </div>
        <div className="mt-1 w-full rounded-xl bg-white md:w-[75%] lg:w-[80%]">
          <Outlet />
        </div>
      </div>
    </>
  );
}
