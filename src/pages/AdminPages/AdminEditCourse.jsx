/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { useNavigate, useParams } from "react-router-dom";
import { Courses } from "../../DummyData/AdminDummy";
import { SquarePen } from "lucide-react";
import { thumb } from "../../assets";
import { TextEditor } from "../../components";

const AdminEditCourse = () => {
  const { id } = useParams();
  const course = Courses.find((c) => c.id === parseInt(id));
  const navigate = useNavigate();

  return (
    <div className="relative w-full">
      <div className="relative w-full border-[#dadada] py-7 md:border">
        <div className="relative border py-9 md:border-none md:py-0">
          <h1 className="mb-4 text-center text-xl font-semibold">
            {course.title}
          </h1>
          <div className="absolute right-[5px] top-[2px] text-secondary md:top-[-24px] ">
            <SquarePen />
          </div>
        </div>
        <hr className="my-7 hidden w-full border md:block" />
        <div className="mx-auto w-full md:w-[97%]">
          <form>
            <div className="mt-4 flex w-full flex-col items-start gap-4 md:flex-row md:items-center">
              <div className="w-full md:w-[75%]">
                <label className="mb-1 block">Title</label>
                <input
                  type="text"
                  className="w-full border border-[#dadada] p-2"
                  defaultValue={course.title}
                />
              </div>
              <div className="w-full md:w-[25%]">
                <label className="mb-1 block">Course Category</label>
                <select
                  className="w-full border border-[#dadada] p-2"
                  defaultValue={course.category}
                >
                  <option>Ui/Ux</option>
                  <option>Web development</option>
                  <option>App development</option>
                  <option>Block Chain</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col items-start gap-4 md:flex-row md:items-center">
              <div className="w-full md:w-[75%]">
                <label className="mb-1 block">Created by</label>
                <input
                  type="text"
                  className="w-full border border-[#dadada] p-2"
                  defaultValue={course.author}
                />
              </div>
              <div className="w-full md:w-[25%]">
                <label className="mb-1 block">Price</label>
                <input
                  className="w-full border border-[#dadada] p-2"
                  defaultValue={course.price}
                />
              </div>
            </div>
            <div className="mt-6 flex w-full flex-col items-start gap-4 md:flex-row md:items-center">
              <div className="w-full md:w-[75%]">
                <label className="mb-1 block">Estimated completion date</label>
                <input
                  type="text"
                  className="w-full border border-[#dadada] p-2"
                  defaultValue={course.completion}
                />
              </div>
              <div className="w-full md:w-[25%]">
                <label className="mb-1 block">Language</label>
                <select
                  className="w-full border border-[#dadada] p-2"
                  defaultValue={course.language}
                >
                  <option>English</option>
                  <option>French</option>
                </select>
              </div>
            </div>
            <div className="my-4 grid grid-cols-1 gap-y-3 md:grid-cols-3 md:gap-x-5 md:gap-y-0">
              <div className="">
                <label>One-on-one live session</label>
                <div className=" mt-1 flex items-center gap-x-4 border border-[#dadada] bg-white px-4 py-2 md:py-3">
                  <div className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      className=" size-4 cursor-pointer appearance-none rounded-sm border border-secondary checked:border-transparent checked:bg-secondary focus:outline-none md:size-6"
                    />
                    <label>Yes</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      className="size-4 cursor-pointer appearance-none rounded-sm border border-secondary checked:border-transparent checked:bg-secondary focus:outline-none md:size-6"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
              <div className="">
                <label>Live Project</label>
                <div className=" mt-1 flex items-center gap-x-4 border border-[#dadada] bg-white px-4 py-2 md:py-3">
                  <div className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      className="size-4 cursor-pointer appearance-none rounded-sm border border-secondary checked:border-transparent checked:bg-secondary focus:outline-none md:size-6"
                    />
                    <label>Yes</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      className="size-4 cursor-pointer appearance-none rounded-sm border border-secondary checked:border-transparent checked:bg-secondary focus:outline-none md:size-6"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
              <div className="">
                <label>Certification</label>
                <div className=" mt-1 flex items-center gap-x-4 border border-[#dadada] bg-white px-4 py-2 md:py-3">
                  <div className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      className="size-4 cursor-pointer appearance-none rounded-sm border border-secondary checked:border-transparent checked:bg-secondary focus:outline-none md:size-6"
                    />
                    <label>Yes</label>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <input
                      type="checkbox"
                      className="size-4 cursor-pointer appearance-none rounded-sm border border-secondary checked:border-transparent checked:bg-secondary focus:outline-none md:size-6"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-6 flex w-full flex-col-reverse items-start gap-y-4 md:flex-row  md:gap-x-5 md:gap-y-0">
              <div className="w-full md:w-3/4">
                <label className="text-lg font-bold md:text-xl">
                  Description
                </label>
                <div className="mt-1  w-full ">
                  <TextEditor defaultValue={course.description} onChange={undefined} />
                </div>
              </div>
              <div className="w-full md:w-1/4">
                <h4 className="">Upload thumbnail</h4>
                <img src={thumb} alt="" className="mt-1 w-full" />
              </div>
            </div>
            <div className=" my-4">
              <p className="">What you will learn</p>
              <div className="mt-1 w-full">
                <TextEditor defaultValue={undefined} onChange={undefined} />
              </div>
            </div>
            <div className=" my-6">
              <p className="">Requirement</p>
              <div className="mt-1 w-full">
                <TextEditor defaultValue={undefined} onChange={undefined} />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt flex w-full  flex-col justify-center gap-y-4 md:mt-6 md:flex-row md:gap-x-6 md:gap-y-0">
        <button className="w-full rounded-2xl bg-adminPrimary  py-1 text-white md:w-2/5 md:py-2 lg:w-1/5">
          Save Changes
        </button>
        <button
          className="w-full rounded-2xl border border-[#dadada] py-1 md:w-2/5 md:py-2 lg:w-1/5"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AdminEditCourse;
