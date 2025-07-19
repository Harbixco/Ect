import { viewassignment } from "../../../DummyData/DashboardDummy";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Viewassignment() {
  return (
    <div className="rounded-lg bg-white p-1 shadow-lg">
      <div className="mx-2">
        <div>
          {/* <div className="flex items-center space-x-4"> */}
          {viewassignment.map((data, index) => {
            return (
              <div
                key={index}
                className="mt-4 flex items-center justify-between rounded-lg border border-[#DADADA] p-4"
              >
                <div className="text-xl font-semibold">
                  <CircularProgressbar
                    value={data.percentage}
                    text={`${data.percentage}%`}
                    styles={buildStyles({
                      rotation: 1,
                      strokeLinecap: "butt",
                      textSize: "24px",
                      pathTransitionDuration: 0.5,
                      pathColor: `#6BC049`,
                      textColor: "black",
                      trailColor: "#f5f5f5",
                      backgroundColor: "#000000",
                    })}
                    className="size-10"
                  />
                </div>

                <div>
                  <p className="px-2 text-[10px] font-semibold text-gray-700 md:px-0 md:text-[13px]">
                    {data.task}
                  </p>
                </div>
                <div className="text-[10px] md:text-[13px]">
                  <p className="text-gray-500">{data.due}</p>
                  <p className="font-semibold text-gray-900">{data.date}</p>
                </div>
              </div>
            );
          })}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
