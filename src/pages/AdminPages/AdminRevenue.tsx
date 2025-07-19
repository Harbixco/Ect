import { BarCharts, Countup, DonoughtChart } from "../../components";
import { RevenueDatas } from "../../DummyData/AdminDummy";

const AdminRevenue = () => {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-start gap-4 md:flex-row">
        <div className=" w-full rounded-lg bg-white py-3 shadow md:w-[70%] lg:w-[80%] ">
          <div className="mx-auto w-[96%]">
            <h2 className="text-lg font-semibold md:text-xl">Analytics</h2>
            <div className="mt-4">
              <BarCharts />
            </div>
          </div>
        </div>
        <div className=" w-full  md:w-[30%] lg:w-[20%] ">
          {RevenueDatas.map((data) => (
            <div
              className="mb-2 w-full rounded-lg bg-white py-2 shadow"
              key={data.id}
            >
              <div className="mx-auto w-[95%]">
                <h4 className="text-center text-sm font-semibold text-adminPrimary md:text-base">
                  {data.title}{" "}
                </h4>
                <h4 className="my-[7px] text-center text-xl font-bold text-adminPrimary md:text-2xl">
                  <Countup end={data.value} />
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7 flex flex-col items-center gap-4 md:flex-row">
        <div className=" w-full rounded-lg bg-white py-3 shadow">
          <div className="mx-auto w-[96%]">
            <h2 className="mb-2 text-lg font-semibold md:text-xl">
              Customers 1369 2587 942
            </h2>
            <DonoughtChart position="right" />
          </div>
        </div>
        <div className=" w-full rounded-lg bg-white py-3 shadow">
          <div className="mx-auto w-[96%]">
            <h2 className="mb-2 text-lg font-semibold md:text-xl">Students</h2>
            <DonoughtChart position="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRevenue;
