/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { Link } from "react-router-dom";
import { quickpractice } from "../../DummyData/DashboardDummy";

export default function Quickpractice() {
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="text-center text-3xl font-bold">Quick Practice</h1>
      <div className="mt-4 text-justify text-[13px] md:text-base">
        <div className="text-xl">Hello Adedeji,</div>
        <div className="mt-4 text-gray-600">
          Welcome to Your Quick divractice Section
        </div>
        <div className="mt-4 text-gray-600">
          This section is here to heldiv you learn better with focused
          divractice sessions. Use easy controls to move through questions
          smoothly.
        </div>
        <div className="mt-4 text-gray-600">
          You'll get instant feedback on your answers to see how well you're
          doing. A timer shows you how much time you have left to finish.
        </div>
        <div className="mt-4 text-gray-600">
          Get ready to imdivrove your skills and feel more confident. Let's
          divractice and do well together!
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {quickpractice.map((data, index) => {
          return (
            <div className="rounded-lg bg-white p-4 shadow" key={index}>
              <h2 className="text-[14px] font-semibold">{data.course}</h2>
              <div className="mt-2 py-4 text-[14px] text-gray-600">
                {data.read}
              </div>
              <button className="mt-4 rounded-lg bg-[#1D2B53] px-4 py-1 text-white">
                <Link to="/dashboard/practice">Start practice</Link>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
