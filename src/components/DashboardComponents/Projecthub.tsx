import { viewproject } from "../../DummyData/DashboardDummy";

export default function Projecthub() {
  return (
    <div className="mx-auto grid grid-cols-1 rounded-lg border border-gray-200 bg-white p-5 shadow-lg md:grid-cols-2">
      {viewproject.map((data, index) => {
        return (
          <div
            key={index}
            className=" mx-1 my-2 rounded-lg border border-[#DADADA] p-4"
          >
            <div>
              <img src={data.display} alt="image" />
            </div>
            <div className="py-2 text-lg font-semibold">{data.name}</div>

            <div className="relative h-2 w-full rounded-full bg-white md:h-2.5">
              <div
                className="relative h-2 rounded-full bg-secondary md:h-2.5"
                style={{ width: `${data.percentage}%` }}
              >
                <span
                  className="absolute right-[6px] translate-x-1/2 text-[11px] font-semibold md:right-1 md:text-sm"
                  style={{ top: "-1.2rem" }}
                >
                  {data.percentage}%
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
