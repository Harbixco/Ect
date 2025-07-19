import { DonoughtChart, HorizontalChart } from "../../components";

const AdminReports = () => {
  return (
    <div className="w-full rounded-xl bg-white pb-7 pt-3 shadow">
      <div className="mx-auto w-[95%]">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold capitalize md:text-xl">
            report overview
          </h2>
          <select className="cursor-pointer rounded-lg border border-transparent bg-white px-2 text-sm font-semibold text-black focus:outline-none focus:ring-0">
            <option value="">Weekly</option>
            <option value="">2024</option>
            <option value="">2023</option>
            <option value="">2022</option>
            <option value="">2021</option>
            <option value="">2020</option>
          </select>
        </div>
        <div className="mt-8 flex w-full flex-col items-start gap-6 md:flex-row md:gap-3">
          <div className="w-full bg-white">
            <DonoughtChart position="bottom" />
          </div>
          <div className="w-full rounded-xl  bg-adminBg py-2">
            <div className="mx-auto w-[95%]">
              <h3 className="text-base font-semibold capitalize md:text-lg">
                Report bar chart
              </h3>
              <div className="mt-3 w-full">
                <HorizontalChart />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-base font-semibold capitalize md:text-lg">
            Reports
          </h3>
          <p className="my-3 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Odio arcu at gravida
            dictumst eleifend ullamcorper. Nunc turpis massa viverra malesuada.
            Fringilla amet sed sit blandit.Lorem ipsum dolor sit amet
            consectetur. Odio arcu at gravida dictumst eleifend ullamcorper.
            Nunc turpis massa viverra malesuada. Fringilla amet sed sit blandit
            . Lorem ipsum dolor sit amet consectetur. Odio arcu at gravida
            dictumst eleifend ullamcorper. Nunc turpis massa viverra malesuada.
            Fringilla amet sed sit blandit. Lorem ipsum dolor sit amet
            consectetur. Odio arcu at gravida dictumst eleifend ullamcorper.
            Nunc turpis massa viverra malesuada. Fringilla amet sed sit blandit
            . Lorem ipsum dolor sit amet consectetur. Odio arcu at gravida
            dictumst eleifend ullamcorper. Nunc turpis massa viverra malesuada.
            Fringilla amet sed sit blandit . Lorem ipsum dolor sit amet
            consectetur. Odio arcu at gravida dictumst eleifend ullamcorper.
            Nunc turpis massa viverra malesuada. Fringilla amet sed sit blandit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
