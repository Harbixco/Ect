/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import { Trash, SquarePen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { viewblog } from "../../DummyData/SuperAdminNavbar";

export default function ViewPortfolio() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className="mb-4 pl-5 text-xl font-semibold">View Portfolios</h2>
      <div className="mx-auto rounded-lg bg-white p-6 shadow-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left">
              <th className="py-2"></th>
              <th className="py-2">Name</th>
              <th className="py-2">Category</th>
              <th className="py-2">Job Type</th>
              <th className="py-2">Date</th>
              <th className="py-2">Views</th>
            </tr>
          </thead>
          <tbody>
            {viewblog.map((data, index) => {
              return (
                <tr className="border-b">
                  <td className="py-3" key={index}>
                    <input
                      type="checkbox"
                      className="form-checkbox text-[#A3D98E]"
                    />
                  </td>
                  <td className="py-3">{data.name}</td>
                  <td className="py-3">{data.category}</td>
                  <td className="py-3">{data.job}</td>
                  <td className="py-3">{data.date}</td>
                  <td className="py-3">{data.views}</td>
                  <td className="flex space-x-3 py-3">
                    <button
                      onClick={() => navigate(`/admin/courses/edit-course/`)}
                      className="text-secondary"
                    >
                      <SquarePen />
                    </button>
                    <button className="pl-5 text-secondary">
                      <Trash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="justify-end px-5 py-8 md:flex">
          <div className="pb-4">
            <button className="mr-5 w-full rounded border border-[#1D2B53] px-4 py-2 text-[12px] font-semibold md:w-[170px] md:px-5 md:py-1 md:text-lg">
              Delete Selected
            </button>
          </div>
          <div>
            <button className="w-full rounded border bg-[#1D2B53] px-4 py-2 text-[12px] font-semibold text-white md:w-[120px] md:px-5 md:py-1 md:text-lg">
              Add New
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
