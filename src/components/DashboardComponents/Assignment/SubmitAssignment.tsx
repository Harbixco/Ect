/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { submitassignment } from "../../../DummyData/DashboardDummy";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function SubmitAssignment() {
  return (
    <div className="mx-auto rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="font-semibold text-gray-600">2 weeks left</div>
        <div className="font-semibold text-gray-600">20 marks</div>
      </div>

      <div className="mb-4 flex items-center space-x-4">
        <div className="text-xl font-semibold">
          <CircularProgressbar
            value={Number(submitassignment.percentage)}
            text={`${submitassignment.percentage}%`}
            styles={buildStyles({
              rotation: 1,
              strokeLinecap: "butt",
              textSize: "24px",
              pathTransitionDuration: 0.5,
              pathColor: `#6BC049`,
              textColor: "black",
              trailColor: "#f5f5f5",
              backgroundColor: "#000000",
            })}
            className="size-10"
          />
        </div>
        <div className="text-[12px] text-gray-700 md:text-[14px]">
          {submitassignment.task}
        </div>
      </div>

      <textarea
        className="mb-4 max-h-[190px] w-full resize-none rounded-lg border border-[#DADADA] p-4 focus:outline-none focus:ring-2 focus:ring-[#DADADA]"
        rows={5}
        placeholder="Write your answer here"
      ></textarea>

      <input
        type="text"
        className="mb-4 w-full rounded-lg border border-[#DADADA] p-4 text-center focus:outline-none focus:ring-2 focus:ring-[#DADADA]"
        placeholder="Insert link here"
      />

      <div className="flex justify-end pt-6">
        <button className="mr-5 rounded-lg border border-gray-400 px-4 py-1 text-[12px] font-semibold md:px-5 md:py-2 md:text-lg">
          Cancel
        </button>
        <button className="rounded-lg border border-gray-400 px-4 py-1 text-[12px] font-semibold md:px-5 md:py-2 md:text-lg">
          Submit
        </button>
      </div>
    </div>
  );
}
