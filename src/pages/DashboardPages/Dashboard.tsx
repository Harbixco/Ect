/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { CalendarCompo } from "../../components";
import { certified, award, trophy, medal } from "../../assets";
import { Plus } from "lucide-react";
import {
  chat,
  Userdetails,
  lesson,
  assignment,
} from "../../DummyData/DashboardDummy";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Dashboard() {
  return (
    <div className="flex w-full flex-col items-start justify-between gap-y-6 md:flex-row md:gap-y-0 ">
      <div className="w-full rounded-xl  md:w-[70%]">
        <div className="mt-2 rounded-lg border bg-white py-3 pl-3">
          <div className="flex justify-between pr-4">
            <div className="text-[14px] md:text-[18px]">
              <div className="font-semibold">{Userdetails.name}</div>
              <div className="w-[200px] pt-2 md:w-[320px]">
                {Userdetails.text}
              </div>
            </div>

            <div className="pt-2">
              <img src={Userdetails.display} alt="image" className="size-16" />
            </div>
          </div>
        </div>

        <div className="mt-2 rounded-lg border bg-white px-2 py-3">
          <div className="pl-2">
            <div className="pb-5 text-[14px] font-semibold md:text-[18px]">
              Lesson Schedule
            </div>
            <div>27-04-2024</div>
          </div>

          <div className="grid justify-items-center">
            {lesson.map((data, index) => {
              return (
                <div
                  key={index}
                  className="mt-3 flex w-full justify-between rounded-lg border border-[#1D2B52] px-4 py-1 md:py-2"
                >
                  <div>
                    <div className="pb-1 text-[14px] font-semibold md:pb-0 md:text-[18px]">
                      {data.title}
                    </div>
                    <div className="text-[11px] md:text-[14px]">
                      {data.name}
                    </div>
                  </div>
                  <div className="text-[14px] md:text-[18px]">
                    <div className="grid justify-end pb-1 md:pb-0">
                      {data.lesson}
                    </div>
                    <div>{data.time}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-2 grid md:grid-cols-[60%_40%]">
          <div className=" rounded-lg border bg-white p-3">
            <div>
              <div className="text-[14px] font-semibold md:text-[18px]">
                Assignments
              </div>

              <div className="">
                {assignment.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className="mt-3 rounded-lg border border-[#1D2B52] py-3"
                    >
                      <div className="flex justify-between px-2 text-[14px]">
                        <div className="flex">
                          <div className="pt-1">
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
                          <div className="pl-2">
                            <div className="w-40 font-medium">{data.name}</div>
                          </div>
                        </div>
                        <div>
                          <div className="">{data.due}</div>
                          <div>{data.date}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="ml-1 mt-2 w-full rounded-lg border border-gray-200 bg-white p-6 text-center shadow-lg md:mt-0">
            <div className="mb-4 text-[14px] font-semibold md:text-[18px]">
              Quick Practice
            </div>
            <p className="mb-6 text-gray-600">
              Read each question, select your answer, and submit.
            </p>
            <button className="rounded bg-[#1D2B53] p-2 font-semibold text-white">
              Start Practice
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen w-full rounded-xl md:ml-4 md:w-[30%]">
        <div className="pl-4 md:pl-0">
          <CalendarCompo />
        </div>

        <div className="mt-2 rounded-lg border bg-white py-3 pl-3">
          <div className="text-[14px] font-semibold md:text-[18px]">
            Certifications
          </div>
          <div className="flex gap-5 pl-5 pt-2">
            <div>
              <img src={certified} alt="image" className="size-6 md:size-8" />
            </div>
            <div>
              <img src={medal} alt="image" className="size-6 md:size-8" />
            </div>
            <div>
              <img src={award} alt="image" className="size-6 md:size-8" />
            </div>
            <div>
              <img src={trophy} alt="image" className="size-6 md:size-8" />
            </div>
          </div>
        </div>

        <div className="mt-2 rounded-lg border bg-white py-3 pl-3">
          <div className="flex justify-between px-3">
            <div className="text-[14px] font-semibold md:text-[18px]">
              Chats
            </div>
            <Plus className="text-[#6BC049]" />
          </div>

          <div>
            {chat.map((data, index) => {
              return (
                <div key={index} className="text-[14px] md:text-[14px]">
                  <div className="py-2 text-[#B3B3B3]">
                    <hr />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="pt-2">
                        <img src={data.display} alt="image" />
                      </div>
                      <div className="pl-3">
                        <div className="font-semibold">{data.name}</div>
                        <div className="pt-1 text-[12px]">{data.response}</div>
                      </div>
                    </div>
                    <div className="pr-3">
                      <div>{data.time}</div>
                      <div className="grid justify-items-center">
                        <img src={data.number} alt="image" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
