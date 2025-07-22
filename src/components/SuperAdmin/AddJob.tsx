/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { Texteditor } from "..";

export default function AddJob() {
  return (
    <>
      <h2 className="mb-2 pl-6 text-xl font-semibold md:text-2xl">
        Add New Job
      </h2>

      <div className="w-full rounded-lg bg-white px-6 shadow-lg">
        <div className="mb-4">
          <label
            htmlFor="jobTitle"
            className="mb-2 block pt-3 text-sm font-bold text-gray-700"
          >
            Job Title
          </label>
          <input
            id="jobTitle"
            type="text"
            placeholder="Write Job Title"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
          />
        </div>

        <div className="mb-4 gap-x-20 md:flex">
          <div className="w-full">
            <label
              htmlFor="jobType"
              className="mb-2 block text-sm font-bold text-gray-700 md:pt-3"
            >
              Job Category
            </label>
            <select
              id="jobCategory"
              className="mt-1 block w-full rounded-md border bg-white px-3 py-2 text-gray-700"
            >
              <option>Select Category</option>
            </select>
          </div>

          <div className="mt-2 w-full md:mt-0">
            <label
              htmlFor="jobType"
              className="mb-2 block text-sm font-bold text-gray-700 md:pt-3"
            >
              Job Type
            </label>

            <select
              id="jobType"
              className="mt-1 block w-full rounded-md border bg-white px-3 py-2 text-gray-700"
            >
              <option>Select Job type</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="jobDescription"
            className="mb-2 block text-sm font-bold text-gray-700 md:pt-3"
          >
            Job description
          </label>
          <div>
            <Texteditor defaultValue={undefined} onChange={undefined} />
          </div>
        </div>

        <div className="justify-end gap-x-3 px-5 py-8 md:flex">
          <div className="pb-4">
            <button className="w-full rounded border border-[#1D2B53] py-2 text-[12px] font-semibold md:px-5 md:py-1 md:text-lg">
              Discard
            </button>
          </div>
          <div>
            <button className="w-full rounded border bg-[#1D2B53] py-2 text-[12px] font-semibold text-white md:px-5 md:py-1 md:text-lg">
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
