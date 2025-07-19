/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { Link } from "react-router-dom";
import { mylearning } from "../../DummyData/DashboardDummy";
import { EllipsisVertical } from "lucide-react";

export default function Mylearning() {
  return (
    <div className="mx-auto bg-[#f5f5f5] p-3 shadow-lg">
      <h1 className="text-x1 mb-6 font-semibold md:text-2xl">My Learning</h1>

      <div className="mb-4 justify-between md:flex">
        <div className="pb-4 md:pb-0">
          <button className="rounded-md bg-[#1D2B53] px-2 py-1 text-white">
            In Progress
          </button>
          <button className="ml-5 rounded-md border border-[#1D2B53] px-4 py-1">
            Completed
          </button>
        </div>

        <input
          type="text"
          placeholder="Search my courses"
          className="ml-auto w-64 border px-4 py-1"
        />
      </div>

      <div className="mt-4">
        {mylearning.map((data, index) => {
          return (
            <div
              key={index}
              className="mt-4 rounded-lg border border-[#DADADA] p-4 md:flex"
            >
              <div>
                <img src={data.display} alt="" />
              </div>

              <div className="md:w-[600px]">
                <div className="pl-5 pt-5">
                  <div>
                    <Link to="/learningtab/Learninglayout/resources">
                      <p className="w-[300px] text-[20px] font-semibold text-gray-800">
                        {data.task}
                      </p>
                    </Link>
                  </div>

                  <div className="mt-2">
                    <div className="relative h-2 w-full rounded-full bg-white md:h-2.5">
                      <div
                        className="relative h-2 rounded-full bg-secondary md:h-2.5"
                        style={{ width: `${data.percentage}%` }}
                      ></div>
                    </div>
                    <p className="mt-1 pt-2 text-sm text-gray-600">
                      {`${data.percentage}%`} Completed
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <button>
                  <EllipsisVertical className="text-[#6BC049]" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
