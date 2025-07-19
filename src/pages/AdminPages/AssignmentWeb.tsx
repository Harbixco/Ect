import { useNavigate } from "react-router-dom";
import { DataTable } from "../../components";
import { tableHeader, webData } from "../../DummyData/AdminDummy";

const AssignmentWeb = () => {
  const navigate = useNavigate();

  // Define what happens when a row is clicked
  const handleRowClick = (row) => {
    navigate(`/admin/assignments-detail/${row.id}`, { state: { row } });
  };

  return (
    <div className="w-full rounded-xl">
      <DataTable
        columns={tableHeader}
        data={webData}
        onRowClick={handleRowClick}
      />
    </div>
  );
};
export default AssignmentWeb;
