/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { getaquoteimg } from "../../assets";

const RequestaQuote = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20">
      <div className="order-last px-5 md:order-first md:w-4/5 md:px-10 md:pt-10">
        <form className="w-full max-w-2xl rounded-lg py-4 md:max-w-4xl">
          <h1 className="text-center text-2xl font-semibold text-[#1D2B53] md:text-5xl">
            Request a Quote
          </h1>
          <div className="py-7">
            <label
              htmlFor="category"
              className="mb-2 block text-sm font-semibold text-[#1D2B53]"
            >
              Project Categories
            </label>
            <select
              id="category"
              name="category"
              className="block w-full rounded-lg border border-black bg-transparent px-4 py-2 text-gray-600"
            >
              <option value="">Select a category</option>
              <option value="web-development">Web Development</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="digital-marketing">Digital Marketing</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 md:gap-x-20">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-[#1D2B53]"
              >
                Name/Business
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name or business name"
                className="block w-full rounded-lg border border-black bg-transparent px-4 py-2"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#1D2B53]"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="block w-full rounded-lg border border-black bg-transparent px-4 py-2"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="project-title"
              className="mb-2 block text-sm font-semibold text-[#1D2B53]"
            >
              Project Title
            </label>
            <input
              id="project-title"
              name="project-title"
              type="text"
              placeholder="Enter project title"
              className="block w-full rounded-lg border border-black bg-transparent px-4 py-2"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="project-description"
              className="mb-2 block text-sm font-semibold text-[#1D2B53]"
            >
              Project Description
            </label>
            <textarea
              id="project-description"
              name="project-description"
              rows={4}
              placeholder="Describe your project"
              className="block max-h-[190px] w-full rounded-lg border border-black bg-transparent px-4  py-2 "
            />
          </div>

          <div className="relative mb-6">
            <label
              htmlFor="file-attachment"
              className="mb-2 block text-sm font-semibold text-[#1D2B53]"
            >
              Reference link(sample)
            </label>
            <input
              id="file-attachment"
              name="file-attachment"
              type="text"
              className="block w-full rounded-lg border border-black bg-transparent px-4 py-2"
            />
          </div>

          <div className="flex w-full justify-start text-center">
            <button
              type="submit"
              className="rounded-3xl bg-[#1D2B53] px-6 py-2 font-semibold text-white"
            >
              Get a Quote
            </button>
          </div>
        </form>
      </div>

      <div>
        <img src={getaquoteimg} alt="image" />
      </div>
    </div>
  );
};

export default RequestaQuote;
