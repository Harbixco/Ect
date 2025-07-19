import {
  BarCharts,
  CalendarCompo,
  Countup,
  DonoughtChart,
  LineCharts,
} from "../../components";

import { Schedules, TopContent, TopCourses } from "../../DummyData/AdminDummy";

const AdminDashboard = () => {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-y-6 md:flex-row md:gap-y-0 ">
      <div className="w-full rounded-xl  md:w-[70%]">
        <div className="grid w-full  grid-cols-3  gap-2">
          {TopContent.map((items) => (
            <div
              className="w-full rounded-xl bg-white py-3 shadow-lg"
              key={items.id}
            >
              <div className="mx-auto flex w-[96%] items-start gap-x-[6px] md:gap-x-2 ">
                <div className=" flex h-6 w-9 items-center justify-center rounded-full bg-adminPrimary sm:h-8 sm:w-11 md:h-10 md:w-12">
                  <img
                    src={items.icon}
                    alt="icons"
                    className="w-[15px] sm:w-[20px] md:w-[28px]"
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-[8px] font-bold sm:text-[10px] md:text-base ">
                    {items.title}
                  </h3>
                  <div className="mt-[2px]">
                    <p className="font-semibold">
                      <Countup end={items.value} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 w-full rounded-xl bg-white py-2 shadow">
          <div className="mx-auto w-[96%]">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold md:text-xl">Analytics</h2>
              <select className="cursor-pointer rounded-lg border border-transparent bg-white px-2 text-sm font-semibold text-black focus:outline-none focus:ring-0">
                <option value="">Yearly</option>
                <option value="">2024</option>
                <option value="">2023</option>
                <option value="">2022</option>
                <option value="">2021</option>
                <option value="">2020</option>
              </select>
            </div>
            <div className="mt-3">
              <LineCharts />
            </div>
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col items-start gap-3 md:flex-row">
          <div className=" w-full rounded-xl bg-white py-2 shadow">
            <div className="mx-auto w-[96%]">
              <h2 className="mb-3 text-lg font-semibold capitalize md:text-xl ">
                report overview
              </h2>
              <DonoughtChart position="bottom" />
            </div>
          </div>
          <div className=" w-full ">
            <div className="rounded-xl bg-white py-3 shadow">
              <div className="mx-auto w-[96%]">
                <h2 className="mb-3 text-base font-semibold capitalize md:text-lg">
                  top courses
                </h2>
                {TopCourses.map((data) => (
                  <div
                    className="mx-auto mb-2 flex w-[98%] items-center justify-between"
                    key={data.id}
                  >
                    <h3 className="text-sm font-semibold md:text-base ">
                      {data.title}
                    </h3>
                    <h3 className="text-sm font-semibold md:text-base">
                      <Countup end={data.value} />
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rounded-xl  md:w-[28%]">
        <div className="bg-white">
          <div className=" mb-[-20px] w-full rounded-lg bg-white">
            <CalendarCompo />
          </div>
          <div className="w-full pb-3 pt-8 shadow ">
            <div className="mx-auto w-[92%]">
              <h2 className="mb-3 text-base font-semibold capitalize md:text-lg">
                My Schedule
              </h2>
              {Schedules.map((data) => (
                <div
                  className="mx-auto mb-2 flex w-[98%] items-center justify-between"
                  key={data.id}
                >
                  <h4 className="text-sm font-semibold  ">{data.title}</h4>
                  <h4 className="text-sm font-semibold ">{data.time}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 w-full rounded-xl bg-white py-3 shadow-lg">
          <div className="mx-auto w-[92%]">
            <h2 className="mb-3 text-base font-semibold capitalize md:text-lg">
              Revenue
            </h2>
            <div className="">
              <BarCharts />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
