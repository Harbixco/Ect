/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { Image } from "lucide-react";
import { Texteditor } from "..";
export default function AddBlog() {
  return (
    <>
      <h2 className="mb-4 pl-5 text-xl font-semibold">Blog Post</h2>

      <div className="mx-auto rounded-lg bg-white p-4 shadow-md">
        <div className="mb-4">
          <label
            htmlFor="blogTitle"
            className="mb-2 block font-semibold text-gray-700"
          >
            Blog Title*
          </label>
          <input
            id="blogTitle"
            type="text"
            placeholder="Write Blog title"
            className="w-full rounded-lg border border-gray-300 p-2"
          />
        </div>

        <div className="mb-4 grid gap-x-5 md:grid-cols-[58%_20%_20%]">
          <div>
            <label
              htmlFor="category"
              className="mb-2 block font-semibold text-gray-700"
            >
              Category
            </label>
            <select
              id="category"
              className="w-full rounded-lg border border-gray-300 p-2"
            >
              <option value="">Select Category</option>
              <option value="">Web Development</option>
              <option value="">UI UX</option>
              <option value="">App Development</option>
              <option value="">Add New Category</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="blogTitle"
              className="mb-2 block font-semibold text-gray-700"
            >
              Author
            </label>
            <input
              id="blogTitle"
              type="text"
              placeholder="Write Blog title"
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>

          <div className="pt-2 md:w-40">
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
                  <span className="text-black md:pl-2"> or drag & drop</span>
                </label>
                <input id="imageUpload1" type="file" className="hidden" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="blogDescription"
            className="mb-2 block font-semibold text-gray-700"
          >
            Blog description*
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
