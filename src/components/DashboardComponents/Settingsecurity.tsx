/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { useState } from "react";
/* eslint-disable tailwindcss/no-custom-classname */
export default function Settingsecurity() {
  // State for the toggle switch
  const [isToggled, setIsToggled] = useState(true);

  // Handle toggle switch
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="mx-auto px-[24px] py-4">
      <h2 className="mb-6 text-2xl font-bold">Security & Privacy</h2>

      <div className="mb-6">
        <label className="flex items-center justify-between">
          <div className="font-semibold">Two-factor Authentication</div>
          <div>
            <label
              className={`toggle-label relative block h-8 w-14 cursor-pointer rounded-full ${
                isToggled ? "bg-[#6BC049]" : "bg-gray-200"
              }`}
              onClick={handleToggle}
            >
              <span
                className={`toggle-circle absolute left-1 top-1 size-6 rounded-full bg-white transition-transform ${
                  isToggled ? "translate-x-6" : "translate-x-0"
                }`}
              ></span>
            </label>
          </div>
        </label>
        <p className="mt-1 text-sm text-gray-500">
          Enable or Disable Two-factor Authentication
        </p>
      </div>

      <div className="mb-6 flex justify-between text-sm md:text-base">
        <div>
          <div className="mb-2 block font-semibold ">Add another Email</div>
          <div>Email to send verification code</div>
        </div>
        <div>
          <button className="rounded-lg border border-gray-300 bg-white px-3 py-0.5 font-medium text-black shadow-sm md:px-3.5 md:py-1.5">
            Set Up
          </button>
        </div>
      </div>

      <div className="mb-6 flex justify-between  text-sm md:text-base">
        <div>
          <div className="mb-2 block font-semibold">SMS Recovery</div>
          <div>Your phone number</div>
        </div>
        <div>
          <button className="rounded-lg border border-gray-300 bg-white px-3 py-0.5 font-medium text-black shadow-sm md:px-3.5 md:py-1.5">
            Set Up
          </button>
        </div>
      </div>

      <div className="justify-center px-5 md:flex">
        <div className="pb-">
          <button className="mr-5 w-full rounded-lg border px-4 py-2 text-[12px] font-semibold md:w-[200px] md:px-2 md:py-1 md:text-lg">
            Change Password
          </button>
        </div>
        <div>
          <button className="w-full rounded-lg border bg-[#1D2B53] px-4 py-2 text-[12px] font-semibold text-white md:w-[120px] md:px-5 md:py-1 md:text-lg">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
