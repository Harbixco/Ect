import { praticequestions } from "../../DummyData/DashboardDummy";

/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
export default function Practice() {
  return (
    <>
      <div className="pb-[20px] text-center text-[20px] font-bold md:pb-[30px] md:text-[30px]">
        Quick Practice
      </div>
      <div className="w-full rounded-lg bg-white p-3 shadow-lg md:w-[95%] md:px-8 md:py-5">
        <div className="flex justify-between pb-4 md:pb-0">
          <div>
            <p className="text-[20px] font-semibold md:text-base">
              Question 27/40
            </p>
          </div>

          <div className="flex items-center">
            <div className="relative flex size-10 items-center justify-center rounded-full bg-gray-200 md:size-12">
              <span className="font-semibold text-gray-700">5:25</span>
              <svg
                className="absolute left-0 top-0 size-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#D1D5DB"
                  stroke-width="10"
                  fill="none"
                ></circle>
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#10B981"
                  stroke-width="10"
                  fill="none"
                  stroke-dasharray="283"
                  stroke-dashoffset="50"
                ></circle>
              </svg>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-4 text-[13px] font-semibold md:text-xl">
            Which of the following best describes the purpose of UI/UX design?
          </p>
          <div className="space-y-4">
            <label className="block cursor-pointer rounded-lg text-[11px] md:p-3 md:text-base">
              <input type="radio" name="question" className="mr-1" />
              {praticequestions.firstquestion}
            </label>
            <label className="block cursor-pointer rounded-lg text-[11px] md:p-3 md:text-base">
              <input type="radio" name="question" className="mr-3" />
              {praticequestions.secondquestion}
            </label>
            <label className="block cursor-pointer rounded-lg text-[11px] md:p-3 md:text-base">
              <input type="radio" name="question" className="mr-3" />
              {praticequestions.thirdquestion}
            </label>
            <label className="block cursor-pointer rounded-lg text-[11px] md:p-3 md:text-base">
              <input type="radio" name="question" className="mr-3" />
              {praticequestions.fourthquestion}
            </label>
          </div>
        </div>
        <div className="flex items-center justify-end gap-4 pt-6 md:pt-0">
          <button className="rounded-lg border border-[#1D2B53] bg-transparent px-5 py-0.5 text-[#1D2B53] md:px-10 md:py-1">
            Back
          </button>

          <button className="rounded-lg border border-[#1D2B53] bg-transparent px-5 py-0.5  text-[#1D2B53] md:px-10 md:py-1">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
