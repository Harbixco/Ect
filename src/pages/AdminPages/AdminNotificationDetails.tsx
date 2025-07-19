import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Profile } from "../../assets";

const AdminNotificationDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white py-4">
      <div className="mx-auto w-[96%]">
        <h2 className="text-lg font-semibold md:text-xl">
          Notification Details
        </h2>
        <div
          className="my-3 cursor-pointer"
          onClick={() => navigate("/admin/notification")}
        >
          <ArrowLeft />
        </div>
        <div className="mt-5 flex items-center gap-x-3 md:gap-x-5">
          <div className="size-[40px] rounded-full md:size-[45px]">
            <img src={Profile} alt="profile" className="w-full rounded-full" />
          </div>
          <div>
            <p className="text-sm font-semibold md:text-base lg:text-lg">
              Odedeji Tolulope
            </p>
            <p className="text-sm text-[#B9B1B1] md:text-base">a min ago</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-base md:text-lg">
            This is to notify you that Odedeji Tolulope has just paid for a
            UI/UX course titled{" "}
            <span className="font-semibold">
              {" "}
              Introduction to UI/UX design by Frank Hustein.
            </span>{" "}
          </h3>
          <div className="mt-7 flex w-full items-start gap-x-3 md:w-1/2 md:gap-x-9">
            <h4 className="w[30%] text-sm font-semibold md:w-1/4">
              Course Title:
            </h4>
            <p className="w-[70%] text-sm md:w-3/4">
              Introduction to UI/UX design by Frank Hustein.
            </p>
          </div>
          <div className="mt-3 flex w-full items-center gap-x-6 md:w-1/2 md:gap-x-9">
            <h4 className="w-1/4">Email:</h4>
            <p className="w-3/4">OdedejiAlii@gmail.com</p>
          </div>
          <div className="mt-3 flex w-full items-center gap-x-6 md:w-1/2 md:gap-x-9">
            <h4 className="w-1/4">Amount:</h4>
            <p className="w-3/4">#37,000</p>
          </div>
        </div>
        <div className="mt-9 flex items-center gap-x-4">
          <p className="">Date:</p>
          <p className="">9th August, 2024</p>
          <p className="">2:00 pm</p>
        </div>
      </div>
    </div>
  );
};

export default AdminNotificationDetails;
