import { Plus, Trash2 } from "lucide-react";
import { Categories } from "../../DummyData/AdminDummy";

const AdminCategory = () => {
  return (
    <div className="flex w-full flex-col items-start gap-3 md:flex-row">
      <div className="w-full md:hidden">
        <h2>Categories</h2>
      </div>
      <div className="hidden h-screen w-full rounded-lg bg-adminBg py-2 shadow md:block md:w-1/4 lg:w-1/5">
        <h2 className="pl-2 text-lg font-semibold md:text-xl">Categories</h2>
        <div className="mt-4 w-full">
          {Categories.map((data) => (
            <div
              className="mx-auto mb-4 flex w-[90%] items-center justify-between"
              key={data.id}
            >
              <div className="flex items-center gap-x-2">
                <div className="size-2 rounded-full bg-black"></div>
                <p className="text-base">{data.name}</p>
              </div>
              <Trash2 color="#6BC04A" size={19} className="cursor-pointer" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7 w-full border border-[#dadada] bg-white py-3 md:mt-0 md:w-[75%] lg:w-[80%]">
        <div className="mt-2 flex w-full items-center justify-center">
          <Plus size={22} />
          <h3 className="font-semibold">Add a new Category</h3>
        </div>
        <hr className="my-5 w-full" />
        <div className="mx-auto w-[95%]">
          <div className="w-full">
            <label className="text-base font-semibold md:text-lg">Title</label>
            <input
              type="text"
              className="mt-1 w-full border border-[#dadada] focus:border-transparent focus:ring-[#dadada]"
            />
          </div>

          <div className=" w-[80% ] mx-auto mb-8 mt-20 flex flex-col items-center justify-between gap-6 md:w-[60%] md:flex-row lg:w-[50%]">
            <button className="w-full rounded-3xl bg-adminPrimary py-1 text-sm  text-white md:text-base">
              Save
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

export default AdminCategory;
