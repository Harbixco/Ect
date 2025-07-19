/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
export default function Checkgrade() {
  return (
    <div className="rounded-lg bg-white p-2 text-[10px] shadow-lg md:py-8 md:text-[13px]">
      <div className="mb-4 flex justify-between rounded-lg border border-[#DADADA] px-5 py-2">
        <div className="mb-2 w-[500px] font-semibold">
          Design a task management dashboard interface using Figma. The
          dashboard should allow users to view, manage, and update their tasks
          efficiently. Provide a rationale for the tools and design decisions
          used in your submission.
        </div>
        <div className="font-semibold">20 marks</div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2 font-bold">Answer</h3>
        <p className="rounded-lg border border-[#DADADA] px-5 py-2">
          Design a task management dashboard interface using Figma. The
          dashboard should allow users to view, manage, and update their tasks
          efficiently. Provide a rationale for the tools and design decisions
          used in your submission.
        </p>

        <div className="mt-4 grid justify-items-center rounded-lg border border-[#DADADA] px-5 py-2">
          <a href="#" className="mt-2 block text-[#6BC049]">
            www.figma.com/adedejalili
          </a>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="mb-2 font-bold">Grade:</h3>
        <p className="grid justify-items-center rounded-lg border border-[#DADADA] p-2 text-lg font-semibold">
          15/20
        </p>
      </div>

      <div>
        <h3 className="mb-2 font-bold">Review</h3>
        <div className="rounded-lg border border-[#DADADA] p-2">
          Design a task management dashboard interface using Figma. The
          dashboard should allow users to view, manage, and update their tasks
          efficiently.
        </div>
      </div>
      <div className="grid justify-items-center">
        <button className="mt-8 rounded-lg bg-[#1D2B53] px-12 py-2 text-white">
          Back
        </button>
      </div>
    </div>
  );
}
