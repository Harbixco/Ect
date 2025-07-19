/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { zenco } from "../../assets";

export default function Projecthubsubmit() {
  return (
    <div className="mx-auto rounded-lg border border-gray-200 bg-white shadow-lg">
      <div className="flex flex-col items-center justify-center p-4">
        <div className="mb-8">
          <img src={zenco} alt="Zenco Payments Logo" className="mx-auto h-24" />
        </div>

        <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 ">
          <div>
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Project name
            </label>
            <input
              type="text"
              id="project-name"
              placeholder="Project name"
              className="mt-1 block w-full rounded-md border-gray-300 "
            />
          </div>

          <div>
            <label
              htmlFor="teams"
              className="block text-sm font-medium text-gray-700"
            >
              Teams
            </label>
            <input
              type="text"
              id="teams"
              placeholder="Teams"
              className="mt-1 block w-full rounded-md border-gray-300 "
            />
          </div>

          <div>
            <label
              htmlFor="privacy"
              className="block text-sm font-medium text-gray-700"
            >
              Privacy
            </label>
            <input
              type="text"
              id="privacy"
              placeholder="Privacy"
              className="mt-1 block w-full rounded-md border-gray-300 "
            />
          </div>

          <div className="mt-4 grid justify-items-center">
            <div className="flex">
              <div className="pr-4">
                <button className="rounded-[10px] bg-[#1D2B53] px-6 py-0.5 font-bold text-white">
                  submit
                </button>
              </div>
              <div>
                <button className="rounded-[10px] border border-[#DADADA] bg-white px-6 py-0.5 font-bold text-[#1D2B53]">
                  cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
