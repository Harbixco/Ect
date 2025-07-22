import { NavLink } from "react-router-dom";
import { Logo } from "../common";
import { Search, ChevronDown } from "lucide-react"; // Import ChevronDown
import { ReactNode, useState } from "react";

interface NavbarProps {
  Buttons: ReactNode;
  NavList: {
    nav: string;
    link: string;
    dropdown?: { nav: string; link: string }[];
  }[];
}

export default function NavBar({ Buttons, NavList }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (index: number) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between gap-20 border-b bg-white p-4 md:px-8 md:py-4">
      <div className="flex items-center gap-4">
        {/* <Menu onClick={handleMobileMenuToggle} /> */}
        <Logo className="w-28 md:w-40 lg:w-44" />
      </div>

      <div className="flex w-full items-center justify-end gap-2 md:gap-8">
        {/* search bar */}
        <div className="relative hidden flex-1 md:block">
          <input
            type="text"
            className="w-full rounded-full border border-primary/20 p-2 pl-10 placeholder:text-sm placeholder:text-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Search"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="size-5 text-gray-400" />
          </div>
        </div>
        {/* mobile search bar */}
        <div className="mr-2 cursor-pointer rounded-full border p-2 shadow md:hidden">
          <Search className="size-5 text-gray-400" />
        </div>
        {/* nav links */}
        <div className="hidden items-center gap-4 md:flex md:gap-6">
          {NavList?.map(({ nav, link, dropdown }, index) => (
            <div key={index} className="relative">
              <div
                className={`flex items-center ${dropdown ? "cursor-pointer" : ""}`}
                onClick={
                  dropdown ? () => handleDropdownToggle(index) : undefined
                }
              >
                <NavLink
                  to={link}
                  className="flex items-center capitalize text-gray-500"
                >
                  {nav}
                  {dropdown && (
                    <ChevronDown
                      className={`ml-2 size-4 transition-transform ${dropdownOpen === index ? "rotate-180" : "rotate-0"}`}
                    />
                  )}
                </NavLink>
              </div>
              {dropdown && dropdownOpen === index && (
                <div className="absolute left-0 mt-2 w-[100px] rounded border border-gray-200 bg-white shadow-lg">
                  {dropdown.map(
                    (
                      { nav: dropdownNav, link: dropdownLink },
                      dropdownIndex,
                    ) => (
                      <NavLink
                        key={dropdownIndex}
                        to={dropdownLink}
                        className="block p-2 text-gray-700 hover:bg-gray-100"
                      >
                        {dropdownNav}
                      </NavLink>
                    ),
                  )}
                </div>
              )}
            </div>
          ))}
          <>{Buttons}</>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white shadow-lg md:hidden">
          <div className="p-4">
            <div className="flex justify-end">
              <button onClick={handleMobileMenuToggle}>
                <ChevronDown className="size-6" />
              </button>
            </div>
            <div className="mt-4 space-y-2">
              {NavList?.map(({ nav, link, dropdown }, index) => (
                <div key={index} className="relative">
                  <NavLink
                    to={link}
                    className="block p-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => dropdown && handleDropdownToggle(index)}
                  >
                    {nav}
                  </NavLink>
                  {dropdown && dropdownOpen === index && (
                    <div className="mt-2 space-y-1">
                      {dropdown.map(
                        (
                          { nav: dropdownNav, link: dropdownLink },
                          dropdownIndex,
                        ) => (
                          <NavLink
                            key={dropdownIndex}
                            to={dropdownLink}
                            className="block p-2 text-gray-700 hover:bg-gray-100"
                            onClick={handleMobileMenuToggle}
                          >
                            {dropdownNav}
                          </NavLink>
                        ),
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4">{Buttons}</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
