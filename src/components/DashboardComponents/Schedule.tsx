/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { CalendarCompo } from "../../components";
import { Plus, Minus, Slash } from "lucide-react";
import { schedule } from "../../DummyData/DashboardDummy";

export default function Schedule() {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-y-6 md:flex-row md:gap-y-0 ">
      <div className="w-full rounded-xl md:w-[70%] md:pr-5">
        <div className="mt-2 rounded-lg border border-[#DADADA] p-3">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <div className="flex">
                <div className="pr-3">
                  <select className="rounded-md border border-[#DADADA] bg-[#f5f5f5] p-2 text-[10px] md:text-base">
                    <option value="daily">Daily</option>
                    <option value="daily">Monthly</option>
                    <option value="daily">Year</option>
                  </select>
                </div>

                <div className="flex items-center rounded-md border border-[#DADADA] px-1 text-[10px] md:px-2 md:text-base">
                  <span>Sort by:</span>
                  <button>Time</button>
                </div>
              </div>

              <div className="flex gap-1 rounded-lg border bg-white pt-0.5 md:px-2">
                <div>
                  <button>
                    <Plus className="text-[#6BC049]" />
                  </button>
                </div>
                <div>
                  <button className="">
                    <Slash className="text-[#6BC049]" />
                  </button>
                </div>
                <div>
                  <button className="">
                    <Minus className="text-[#6BC049]" />
                  </button>
                </div>
              </div>
            </div>

            {schedule.map((data, index) => {
              return (
                <div className="mt-3 rounded-lg border border-[#DADADA] bg-white px-4 shadow">
                  <div
                    key={index}
                    className="flex items-center justify-between pt-2 "
                  >
                    <div>
                      <h3 className="text-[14px] font-semibold md:text-lg">
                        {data.title}
                      </h3>
                      <p className="text-[12px] text-gray-600 md:text-sm">
                        {data.name}
                      </p>
                    </div>

                    <div>
                      <div className="text-[12px] text-gray-600 md:text-sm">
                        {data.lesson}
                      </div>
                      <div className="text-[12px] text-gray-600 md:text-sm">
                        {data.time}
                      </div>
                    </div>
                  </div>
                  <div className="py-2 text-center">
                    <button className="rounded-[50px] bg-[#1D2B53] px-2 py-1 text-[12px] text-white md:px-5 md:text-base">
                      {data.reschedule}
                    </button>
                    <button className="ml-3 rounded-[50px] border border-[#DADADA] bg-white  px-2 text-[#1D2B53] md:px-5 md:py-1 md:text-base">
                      {data.delete}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full rounded-xl  md:w-[30%]">
        <div className="pl-4 md:pl-0">
          <CalendarCompo />
        </div>
      </div>
    </div>
  );
}
