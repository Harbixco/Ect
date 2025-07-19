/* eslint-disable tailwindcss/no-custom-classname */
import {
  ManagementContent,
  ManagementPractice,
} from "../../DummyData/AdminDummy";

const AdminCourseManagement = () => {
  return (
    <div className="w-full">
      <div className=" flex flex-col items-start gap-x-0 gap-y-8 md:flex-row md:gap-x-4 md:gap-y-0">
        <div className="flex w-full flex-col gap-y-4">
          <div className=" rounded-lg border border-[#dadada] bg-white py-2">
            <div className="mx-auto w-[96%]">
              <h3 className="mb-3 text-lg font-semibold md:text-xl">
                Assignments
              </h3>
              {ManagementContent.map((data) => (
                <div
                  className="mb-1 mt-2 w-full rounded-lg border border-[#dadada]  bg-adminBg py-1"
                  key={data.id}
                >
                  <div className="mx-auto w-[95%] py-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-bold md:text-lg">
                        {data.name}
                      </h3>
                      <p className="text-sm font-semibold md:text-base ">
                        Submitted
                      </p>
                    </div>
                    <div className="flex items-start justify-between py-3">
                      <p className="text-sm  md:text-base">
                        {data.description}
                      </p>
                      <h4 className="text-sm font-semibold md:text-base ">
                        {data.date}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full rounded-lg border border-[#dadada] bg-white py-3">
          <div className="mx-auto w-[90%]">
            <h2 className="border-b-2 pb-3 text-base text-[#6BC04A] md:text-lg ">
              Quick Practice
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
    </div>
  );
};

export default AdminCourseManagement;
