import { Countup, LineCharts } from "../../components";
import { AnalyticsContent } from "../../DummyData/AdminDummy";

const Analytics = () => {
  return (
    <div className="w-full">
      <div className="w-full rounded-xl bg-white py-4 shadow-lg">
        <div className="mx-auto w-[96%]  md:w-[94%]">
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
          <div className="mt-6">
            <LineCharts />
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mb-4 mt-6 grid w-full grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {AnalyticsContent.map((data) => (
            <div
              className="w-full rounded-lg bg-white py-2 shadow"
              key={data.id}
            >
              <div className="mx-auto w-[95%]">
                <h4 className="text-sm font-semibold text-adminPrimary md:text-base">
                  {data.title}{" "}
                </h4>
                <h4 className="my-2 text-center text-xl font-bold text-adminPrimary md:text-2xl">
                  <Countup end={data.value} />
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
