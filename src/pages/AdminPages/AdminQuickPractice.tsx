import { Countup, LineCharts } from "../../components";
import { ManagementPractice, QuickContent } from "../../DummyData/AdminDummy";

const AdminQuickPractice = () => {
  return (
    <div className="flex w-full flex-col items-start gap-9 md:flex-row md:gap-4">
      <div className="w-full md:w-[70%]">
        <div className="grid w-full grid-cols-2 gap-2  md:grid-cols-2 lg:grid-cols-3">
          {QuickContent.map((items) => (
            <div
              className="w-full rounded-xl bg-white py-3 shadow-lg"
              key={items.id}
            >
              <div className="mx-auto flex w-[96%] items-start gap-x-[6px] md:gap-x-2">
                <div className="flex h-7 w-9 items-center justify-center rounded-full bg-adminPrimary sm:h-9 sm:w-11 md:h-10 md:w-12">
                  <items.icon className="flex size-4 items-center justify-center text-white md:size-5 " />
                </div>
                <div className="w-full">
                  <h3 className="text-[13px] font-semibold md:text-base">
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
        <div className="mt-8 w-full rounded-xl bg-white py-2 shadow">
          <div className="mx-auto w-[96%]">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold md:text-xl">
                Performance metrics
              </h2>
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
      </div>
      <div className=" w-full rounded-lg border border-[#dadada] bg-white py-3 md:w-[30%]">
        <div className="mx-auto w-[90%]">
          <h2 className="border-b-2 pb-3 text-base font-semibold text-[#6BC04A] md:text-lg ">
            Categories
          </h2>
          {ManagementPractice.map((data, index) => (
            <div
              className="mt-4 flex items-center gap-x-2 border-b-2 pb-3 text-base"
              key={data.id}
            >
              <h4>{index + 1}.</h4>
              <h4 className=" ">{data.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminQuickPractice;
