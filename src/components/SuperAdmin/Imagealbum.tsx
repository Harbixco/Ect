/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { Link } from "react-router-dom";
import { imagealbum } from "../../DummyData/SuperAdminNavbar";

export default function Imagealbum() {
  return (
    <>
      <h2 className="mb-4 pl-5 text-xl font-semibold"> Images</h2>
      <div className="rounded-lg border bg-white">
        <div className="py-4 pl-4 font-semibold md:pl-[50px]">
          Delete Single or Selected Media Image/Video
        </div>
        <div className="grid grid-cols-2 justify-items-center md:grid-cols-4">
          {imagealbum.map((data, index) => {
            return (
              <div key={index} className="px-2 md:px-0 md:pb-4">
                <img
                  src={data.image}
                  alt="image"
                  className="size-[170px] md:size-[210px]"
                />
              </div>
            );
          })}
        </div>
        <div className="justify-center gap-x-8 px-5 py-8 md:flex">
          <div className="pb-4">
            <Link to="/superadmin/media">
             <button className="mr-5 w-full rounded-lg border border-gray-400 px-4 py-2 text-[12px] font-semibold md:w-[180px] md:px-5 md:py-1 md:text-lg">
              Add New Media
            </button>
            </Link>
           
          </div>
          <div>
            <button className="w-full rounded-lg border bg-[#1D2B53] px-4 py-2 text-[12px] font-semibold text-white md:w-[170px] md:px-5 md:py-1 md:text-lg">
              Delete Selected
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
