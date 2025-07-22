import { useNavigate } from "react-router-dom";
import { DataTable } from "../../components";
import { tableHeader, uxData } from "../../DummyData/AdminDummy";

const AdminAssignment = () => {
  const navigate = useNavigate();

  const handleRowClick = (row) => {
    navigate(`/admin/assignments-detail/${row.id}`, { state: { row } });
  };

  return (
    <div className="w-full rounded-xl">
      <DataTable
        columns={tableHeader}
        data={uxData}
        onRowClick={handleRowClick}
      />
    </div>
  );
};
export default AdminAssignment;
