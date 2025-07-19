import { ListFilter, Search } from "lucide-react";
import { useState } from "react";
import { Notification } from "../../DummyData/AdminDummy";
import { useNavigate } from "react-router-dom";

const AdminNotification = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filterToggle, setFilterToggle] = useState(false);
  const navigate = useNavigate();
  const handleNotificationClick = (id) => {
    navigate(`/admin/notification/${id}`);
  };
  return (
    <div className="mx-auto w-full bg-white">
      <div className="mx-auto w-[96%] py-3">
        <h2 className="text-lg font-semibold md:text-xl">Notification</h2>
        <div className="relative my-3 flex items-center gap-x-3">
          <div className="relative ">
            <input
              type="search"
              placeholder="Search"
              className=" h-[35px] rounded-lg border border-[#dadada] py-2 pl-3 pr-10"
            />
            <Search className="absolute right-[10px] top-1/2  w-4 -translate-y-1/2 text-gray-400" />
          </div>
          <div
            className="cursor-pointer rounded-lg border border-[#dadada] px-2 py-1 "
            onClick={() => setFilterToggle(!filterToggle)}
          >
            <ListFilter />
          </div>
          {filterToggle && (
            <div className="absolute left-0 top-12 z-10 w-[300px] rounded-xl bg-white px-3 py-2 shadow md:left-48">
              <h2 className="">Filter notification</h2>
              <div className="my-3">
                <h2 className="">Notification</h2>
                <div className="mt-2 flex items-center gap-x-3">
                  <button className="w-fit rounded-lg border border-[#dadada] px-4">
                    All
                  </button>
                  <button className="w-fit rounded-lg border border-[#dadada] px-2">
                    Unread
                  </button>
                  <button className="w-fit rounded-lg border border-[#dadada] px-2">
                    Read
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-x-2 ">
                  <div className="">
                    <input
                      id="start-date"
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full cursor-pointer rounded-xl border border-[#dadada] text-[13px] focus:outline-none"
                    />
                  </div>
                  <div className="">
                    <input
                      id="start-date"
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full cursor-pointer rounded-xl border border-[#dadada] text-[13px] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 w-full">
          <hr className="py-[2px]" />
          {Notification.map((data) => (
            <div
              className="mx-auto flex w-full cursor-pointer items-start justify-between border-b pb-3 pt-2"
              key={data.id}
              onClick={() => handleNotificationClick(data.id)} // Handle click for navigation and close notification
            >
              <div className="flex items-center gap-x-1 md:gap-x-3">
                <div className="size-[36px] rounded-full md:size-[40px]">
                  <img
                    src={data.avatar}
                    alt="profile"
                    className="w-full rounded-full"
                  />
                </div>
                <div>
                  <p className="text-sm md:text-base">
                    <span className="font-semibold">{data.name}</span>{" "}
                    {data.message}
                  </p>
                  <p className="text-[12px] text-[#B9B1B1] md:text-sm">
                    {data.time}
                  </p>
                </div>
              </div>
              <div className="mt-1 size-2 rounded-full bg-[#6BC049]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminNotification;
