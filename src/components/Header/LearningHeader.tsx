/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets";
import {
  EllipsisVerticalIcon,
  Star,
  Gift,
  SquareArrowDown,
  ChartLine,
} from "lucide-react";

export default function LearningHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between bg-[#f5f5f5] pl-5 md:pl-10 md:pr-5">
      <div className="w-20 py-4 md:mx-auto md:w-[92%]">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="flex items-center">
        <Link
          to="/Dashboard"
          className="mr-4 rounded-lg bg-[#1D2B53] px-3 py-1 text-sm text-white md:mr-0 md:px-7 md:py-1 md:text-base"
        >
          Dashboard
        </Link>

        <div className="hidden md:block">
          <div className="relative inline-block pr-5 text-left md:ml-4 md:pr-0">
            {/* Button */}
            <button
              onClick={toggleDropdown}
              className="inline-flex w-full justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none"
            >
              <EllipsisVerticalIcon />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg">
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex">
                      <div className="pr-4">
                        <Star />
                      </div>
                      <div>Add to favorite</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex">
                      <div className="pr-4">
                        <ChartLine />
                      </div>
                      <div>Add to archive</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex">
                      <div className="pr-4">
                        <SquareArrowDown />
                      </div>
                      <div>Gift this course</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex">
                      <div className="pr-4">
                        <Gift />
                      </div>
                      <div>Share this course</div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
