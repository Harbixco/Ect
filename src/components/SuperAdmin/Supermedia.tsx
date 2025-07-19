/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { imageavater } from "../../assets";

export default function Media() {
  return (
    <>
      <h2 className="mb-4 pl-5 text-xl font-semibold"> Upload media</h2>
      <div className="rounded-lg border bg-white py-[65px]">
        <div className="grid justify-items-center text-sm">
          <img src={imageavater} alt="image" className="size-20" />
          <div className="px-[54px] text-justify text-[12px] text-[#AFAFAF] md:px-0 md:text-base">
            Supported Extenstions are JPEG, PNG,JPG, MP4 . (Must be less than
            5M)
          </div>
          <div className="text-sm font-semibold underline">
            <div>Upload Images & videos</div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center">
            <div className="flex h-40 w-64 flex-col items-center justify-center rounded-lg border border-gray-300 p-6 px-10 md:h-48 md:w-96">
              <label className="flex w-full flex-col items-center ">
                <span className="rounded-full border border-[#1D2B53] px-1.5 text-[10px] font-semibold">
                  Select File
                </span>
                <input type="file" className="hidden" />
              </label>
            </div>

            <button className="mt-6 rounded-lg bg-[#1D2B53] px-6 py-2 font-semibold text-white shadow-md">
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
