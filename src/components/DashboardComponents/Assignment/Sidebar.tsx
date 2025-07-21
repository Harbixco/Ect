/* eslint-disable tailwindcss/migration-from-tailwind-2 */
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type SidebarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function Idex({ activeTab, setActiveTab }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hidden bg-gray-100 p-4 md:block md:w-1/4">
        <h2 className="mb-8 text-2xl font-bold">Assignments</h2>
        <ul>
          <li
            className={`cursor-pointer p-2 ${activeTab === "view" ? "bg-[#6BC04A] font-semibold text-white" : ""}`}
            onClick={() => setActiveTab("view")}
          >
            View assignment
          </li>
          <li
            className={`cursor-pointer p-2 ${activeTab === "submit" ? "bg-[#6BC04A] font-semibold text-white" : ""}`}
            onClick={() => setActiveTab("submit")}
          >
            Submit assignment
          </li>
          <li
            className={`cursor-pointer p-2 ${activeTab === "grade" ? "bg-[#6BC04A] font-semibold text-white" : ""}`}
            onClick={() => setActiveTab("grade")}
          >
            Check grade
          </li>
        </ul>
      </div>

      <div className="md:hidden">
        <div className="mt-4  items-center">
          <div>
            <button
              onClick={toggleDropdown}
              className="inline-flex w-full px-4 pt-2 text-sm font-semibold"
            >
              Assignments
              <ChevronDown />
            </button>

            {isOpen && (
              <div
                className="absolute right-0 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-button"
              >
                <ul>
                  <li
                    className={`cursor-pointer p-2 ${activeTab === "view" ? "bg-[#6BC04A] font-semibold text-white" : ""}`}
                    onClick={() => setActiveTab("view")}
                  >
                    View assignment
                  </li>
                  <li
                    className={`cursor-pointer p-2 ${activeTab === "submit" ? "bg-[#6BC04A] font-semibold text-white" : ""}`}
                    onClick={() => setActiveTab("submit")}
                  >
                    Submit assignment
                  </li>
                  <li
                    className={`cursor-pointer p-2 ${activeTab === "grade" ? "bg-[#6BC04A] font-semibold text-white" : ""}`}
                    onClick={() => setActiveTab("grade")}
                  >
                    Check grade
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
