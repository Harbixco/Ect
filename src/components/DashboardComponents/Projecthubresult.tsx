/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { zenco } from "../../assets";
export default function Projecthubresult() {
  return (
    <div className="mx-auto rounded-lg border border-gray-200 bg-white shadow-lg">
      <div className="flex flex-col items-center justify-center p-4">
        <div>
          <img src={zenco} alt="Zenco Payments Logo" className="mx-auto h-20" />
        </div>

        <div className="w-full max-w-md rounded-lg bg-white p-6 ">
          <div className="mb-4">
            <label
              htmlFor="project-name"
              className="block text-sm font-medium text-gray-700"
            >
              Project name
            </label>
            <input
              type="text"
              id="project-name"
              value="Zenco"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="teams"
              className="block text-sm font-medium text-gray-700"
            >
              Teams
            </label>
            <input
              type="text"
              id="teams"
              value="Team design"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              readOnly
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="privacy"
              className="block text-sm font-medium text-gray-700"
            >
              Privacy
            </label>
            <select
              id="privacy"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option>Private to general</option>
            </select>
          </div>

          <div>
            <h3 className="mb-2 ">Grade:</h3>
            <p className="grid justify-items-center rounded-lg border border-[#DADADA] p-2 text-lg">
              15/20
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end pb-2 pr-[130px]">
        <button className="rounded-[10px] bg-[#1D2B53] px-10 py-0.5 font-bold text-white ">
          Back
        </button>
      </div>
    </div>
  );
}
