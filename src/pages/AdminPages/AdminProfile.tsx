import { SquarePen } from "lucide-react";
import { Profile } from "../../assets";

const AdminProfile = () => {
  return (
    <div className="w-full">
      <h2 className="text-base font-semibold md:text-lg">My Profile</h2>
      <div className="my-5 w-full rounded-lg border-[#dadada] py-3 md:border">
        <div className="mx-auto flex w-[96%] items-center justify-between ">
          <div className="flex  items-center gap-x-2 md:gap-x-4">
            <img
              src={Profile}
              alt="profile"
              className="size-14 rounded-full md:size-16"
            />
            <div className="">
              <h3 className="text-base font-bold  uppercase md:text-lg">
                Adedeji alli
              </h3>
              <h3 className="text-sm uppercase  md:text-base">ceo</h3>
              <p className="text-sm capitalize md:text-base">Lagos, Nigeria</p>
            </div>
          </div>
          <div className="">
            <button className="flex items-center gap-x-2 rounded-3xl border border-[#6BC049] px-4 py-[5px] font-semibold text-[#6BC049] md:px-6 md:py-2">
              Edit
              <SquarePen size={19} />
            </button>
          </div>
        </div>
      </div>
      <div className="my-6 rounded-lg border-[#dadada] py-4 md:border">
        <div className="mx-auto w-[96%]">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-semibold capitalize md:text-lg">
              Personal information
            </h3>
            <div className="">
              <button className="flex items-center gap-x-2 rounded-3xl border border-[#6BC049] px-4 py-[5px] font-semibold text-[#6BC049] md:px-6 md:py-2">
                Edit
                <SquarePen size={19} />
              </button>
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col items-center justify-between gap-3 md:flex-row md:gap-7 ">
            <div className="w-full">
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded-lg border border-[#dadada]"
              />
            </div>
            <div className="w-full">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded-lg border border-[#dadada]"
              />
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col items-center justify-between gap-3 md:flex-row md:gap-7 ">
            <div className="w-full">
              <label>Email</label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full rounded-lg border border-[#dadada]"
              />
            </div>
            <div className="w-full">
              <label>Phone</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-lg border border-[#dadada]"
              />
            </div>
          </div>

          <div className="mt-9 flex items-center justify-between">
            <h3 className="text-base font-semibold capitalize md:text-lg">
              Address
            </h3>
            <div className="">
              <button className="flex items-center gap-x-2 rounded-3xl border border-[#6BC049] px-4 py-[5px] font-semibold text-[#6BC049] md:px-6 md:py-2">
                Edit
                <SquarePen size={19} />
              </button>
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col items-center justify-between gap-3 md:flex-row md:gap-7 ">
            <div className="w-full">
              <label>Country</label>
              <input
                type="text"
                placeholder="Enter your country"
                className="w-full rounded-lg border border-[#dadada]"
              />
            </div>
            <div className="w-full">
              <label>State</label>
              <input
                type="text"
                placeholder="Enter your state"
                className="w-full rounded-lg border border-[#dadada]"
              />
            </div>
          </div>
          <div className="mt-6 flex w-full flex-col items-center justify-between gap-3 md:flex-row md:gap-7 ">
            <div className="w-full">
              <label>Postal Code</label>
              <input
                type="text"
                placeholder="Enter your postal code"
                className="w-full rounded-lg border border-[#dadada]"
              />
            </div>
            <div className="w-full">
              <label>City</label>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full rounded-lg border border-[#dadada]"
              />
            </div>
          </div>

          <div className=" w-[80% ] mx-auto mb-6 mt-10 flex flex-col items-center justify-between gap-6 md:w-[60%] md:flex-row lg:w-[50%]">
            <button className="w-full rounded-3xl bg-adminPrimary py-1 text-sm  text-white md:text-base">
              Save Changes
            </button>
            <button className="w-full rounded-3xl border border-[#dadada]  bg-white py-1 text-sm text-black md:text-base ">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
