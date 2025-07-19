import { CirclePlus, SquarePen } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Courses } from "../../DummyData/AdminDummy";
import EmptyCourse from "./EmptyCourse";

const AdminCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white p-4">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-xl">Courses</h1>
        <button
          className="flex items-center gap-x-2 rounded-lg border border-[#dadada] px-4 py-[6px]  "
          onClick={() => navigate("/admin/courses/add-course")}
        >
          Add new
          <CirclePlus size={18} color="#6BC049" />
        </button>
      </div>
      {Courses.length === 0 ? (
        <div>
          <EmptyCourse />
        </div>
      ) : (
        <div className="w-full overflow-x-auto ">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-2 text-left">S/N</th>
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Students</th>
                <th className="p-2 text-left"></th>
              </tr>
            </thead>
            <tbody>
              {Courses.map((course, index) => (
                <tr key={course.id} className="border-y">
                  <td className=" p-2">{index + 1}.</td>
                  <td className=" p-2">{course.title}</td>
                  <td className=" p-2">{course.category}</td>
                  <td className=" p-2">{course.students}</td>
                  <td className=" p-2 text-center">
                    <button
                      onClick={() =>
                        navigate(`/admin/courses/edit-course/${course.id}`)
                      }
                      className="text-secondary"
                    >
                      <SquarePen />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminCourses;
