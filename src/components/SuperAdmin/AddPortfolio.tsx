/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { Texteditor } from "..";
import { Image } from "lucide-react";
export default function AddPortfolio() {
  return (
    <>
      <h2 className="mb-4 pl-5 text-xl font-semibold">Portfolio</h2>
      <div className="mx-auto rounded-lg bg-white p-6 shadow-md">
        <div className="mb-4">
          <label
            htmlFor="projectTitle"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Project Title
          </label>
          <input
            id="projectTitle"
            type="text"
            placeholder="Please type the project title"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700"
          />
        </div>

        <div className="mb-4 grid md:grid-cols-2 md:gap-20">
          <div className="mb-2 md:mb-0">
            <label
              htmlFor="projectCategory"
              className="mb-2 block font-semibold text-gray-700"
            >
              Project Category
            </label>
            <select
              id="projectCategory"
              className="w-full rounded-lg border border-gray-300 p-2"
            >
              <option value="">Select Category</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="stackUsed"
              className="mb-2 block font-semibold text-gray-700"
            >
              Stack Used
            </label>
            <select
              id="stackUsed"
              className="w-full rounded-lg border border-gray-300 p-2"
            >
              <option value="">Select</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-20">
          <div className="mb-2 md:mb-0">
            <label
              htmlFor="startDate"
              className="mb-2 block font-semibold text-gray-700"
            >
              From
            </label>
            <div className="relative">
              <input
                id="startDate"
                type="date"
                className="w-full rounded-lg border border-gray-300 p-2"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="endDate"
              className="mb-2 block font-semibold text-gray-700"
            >
              To
            </label>
            <div className="relative">
              <input
                id="endDate"
                type="date"
                className="w-full rounded-lg border border-gray-300 p-2"
              />
            </div>

            <div className="pt-4">
              <label
                htmlFor="deploymentLink"
                className="mb-2 block font-semibold text-gray-700"
              >
                Deployment link/view
              </label>
              <input
                id="deploymentLink"
                type="text"
                placeholder="Add link"
                className="w-full rounded-lg border border-gray-300 p-2"
              />
            </div>
          </div>
        </div>

        <div className="mt-3 md:mt-0">
          <label
            htmlFor="imageUpload1"
            className="mb-2 block font-semibold text-gray-700"
          >
            Add Images
          </label>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="md:w-40">
            <div className="w-full cursor-pointer items-center rounded-lg border-2 border-[#1D2B53] bg-[#A3D98E]">
              <div className="grid justify-items-center py-4">
                <div>
                  <Image />
                </div>
                <label
                  htmlFor="imageUpload1"
                  className="text-center text-green-500"
                >
                  <span className="text-white underline">Click to upload</span>
                  <span className="text-black"> or drag & drop</span>
                </label>
                <input id="imageUpload1" type="file" className="hidden" />
              </div>
            </div>
          </div>

          <div className="md:w-40">
            <div className="w-full cursor-pointer items-center rounded-lg border-2 border-[#1D2B53]">
              <div className="grid justify-items-center py-4">
                <div>
                  <Image />
                </div>
                <label
                  htmlFor="imageUpload1"
                  className="text-center text-green-500"
                >
                  <span className="text-sm font-semibold text-black underline">
                    Click to upload
                  </span>
                  <span className="text-black"> or drag & drop</span>
                </label>
                <input id="imageUpload1" type="file" className="hidden" />
              </div>
            </div>
          </div>
          <div className="md:w-40">
            <div className="w-full cursor-pointer items-center rounded-lg border-2 border-[#1D2B53]">
              <div className="grid justify-items-center py-4">
                <div>
                  <Image />
                </div>
                <label
                  htmlFor="imageUpload1"
                  className="text-center text-green-500"
                >
                  <span className="text-sm font-semibold text-black underline">
                    Click to upload
                  </span>
                  <span className="text-black"> or drag & drop</span>
                </label>
                <input id="imageUpload1" type="file" className="hidden" />
              </div>
            </div>
          </div>
          <div className="md:w-40">
            <div className="w-full cursor-pointer items-center rounded-lg border-2 border-[#1D2B53]">
              <div className="grid justify-items-center py-4">
                <div>
                  <Image />
                </div>
                <label
                  htmlFor="imageUpload1"
                  className="text-center text-green-500"
                >
                  <span className="text-sm font-semibold text-black underline">
                    Click to upload
                  </span>
                  <span className="text-black"> or drag & drop</span>
                </label>
                <input id="imageUpload1" type="file" className="hidden" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="projectDescription"
            className="mb-2 block font-semibold text-gray-700"
          >
            Project description
          </label>
          <div>
            <Texteditor defaultValue={undefined} onChange={undefined} />
          </div>
        </div>

        <div className="justify-end px-5 py-2 md:flex">
          <div className="pb-4">
            <button className="mr-5 w-full rounded border px-4 py-2 text-[12px] font-semibold md:w-[120px] md:px-5 md:py-1 md:text-lg">
              Discard
            </button>
          </div>
          <div>
            <button className="w-full rounded border bg-[#1D2B53] px-4 py-2 text-[12px] font-semibold text-white md:w-[120px] md:px-5 md:py-1 md:text-lg">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
