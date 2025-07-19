/* eslint-disable tailwindcss/no-custom-classname */
import { useLocation, useNavigate } from "react-router-dom";

const AssignmentDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { row } = location.state;
  return (
    <div>
      <h2 className="text-lg font-semibold md:text-xl">Assignment Details </h2>
      <div className="mt-4 w-full rounded-xl border border-[#dadada] bg-white py-3">
        <div className="mx-auto w-[94%] md:w-[96%]">
          <div className="mb-4 flex flex-col-reverse items-start justify-between gap-y-1 rounded-xl border border-[#dadada] px-3  py-2 md:flex-row md:gap-y-0 md:px-6 md:py-3">
            <h2 className="text-sm font-medium md:text-base">
              {row.assignment}
            </h2>
            <p className="t  text-base font-semibold md:text-lg">
              {row.mark} Marks
            </p>
          </div>

          <div className="my-3 rounded-xl border border-[#dadada] bg-adminBg px-3 py-2 md:px-6 md:py-3">
            <h3 className="text-lg font-semibold">Answer:</h3>
            <p className="mt-[6px] text-sm md:text-base">{row.answer}</p>
          </div>
          <div className="my-3 rounded-xl border border-[#dadada] bg-white px-3 py-2 md:px-6 md:py-3">
            <h4 className="text-center text-[#6BC04A]">{row.url}</h4>
          </div>
          <div className="">
            <h3 className="">Grade:</h3>
            <div className="mb-3 flex items-center justify-center rounded-xl border border-[#dadada] bg-white px-3  md:px-6 ">
              <input
                type="text"
                className="w-full border-transparent text-center text-lg outline-none focus:border-transparent  focus:ring-0 md:text-xl"
              />
            </div>
            <textarea
              name=""
              id=""
              className="max-h-[190px] w-full resize-none rounded-xl border border-[#dadada] bg-adminBg text-black ring-1 focus:border-transparent focus:ring-0"
              placeholder="Add Review"
            />
            <div className=" w-[80% ] mx-auto mb-6 mt-8 flex flex-col items-center justify-between gap-6 md:w-[60%] md:flex-row lg:w-[40%]">
              <button className="w-full rounded-3xl bg-adminPrimary py-1 text-white">
                Save
              </button>
              <button
                className="w-full rounded-3xl border border-[#dadada] bg-white py-1 text-black "
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetails;
