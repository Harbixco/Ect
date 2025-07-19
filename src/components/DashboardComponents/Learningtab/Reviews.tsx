/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { reviewdata } from "../../../DummyData/DashboardDummy";

export default function Reviews() {
  return (
    <>
      {reviewdata.map((data, index) => {
        return (
          <div
            className="my-4 flex space-x-4 rounded-lg border px-5 py-4 md:ml-4 md:w-[700px]"
            key={index}
          >
            <div>
              <img
                className="rounded-full"
                src={data.review}
                alt="User Image"
              />
            </div>

            <div>
              <p className="text-lg font-semibold">{data.name}</p>
              <div className="flex space-x-1">
                <span className="text-2xl text-[#F9B506]">★</span>
                <span className="text-2xl text-[#F9B506]">★</span>
                <span className="text-2xl text-[#F9B506]">★</span>
                <span className="text-2xl text-[#F9B506]">★</span>
                <span className="text-2xl text-[#F9B506]">★</span>
              </div>
              <p className="text-sm text-gray-500">Reviewed on {data.date}</p>
              <p className="text-[12px] text-gray-700 md:text-base">
                {data.comment}
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex gap-2">
                <div>
                  <button className="rounded-full border border-[#1D2B53] p-1">
                    <data.ThumbsUp className="size-4" />
                  </button>
                </div>
                <div>
                  <button className="rounded-full border border-[#1D2B53] p-1">
                    <data.ThumbsDown className="size-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
