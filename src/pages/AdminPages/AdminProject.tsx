import { AdminProjectCard } from "../../components";
import { ProjectsData } from "../../DummyData/AdminDummy";

const AdminProject = () => {
  return (
    <div className="py-3">
      <h2 className="mb-5 text-xl font-semibold md:text-2xl">Projects</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {ProjectsData.map((data) => (
          <div key={data.id}>
            <AdminProjectCard {...data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminProject;
