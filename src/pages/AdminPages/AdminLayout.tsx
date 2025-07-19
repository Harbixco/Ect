import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { AdminNavbar } from "../../components";

const AdminLayout = () => {
  return (
    <div className="flex w-full items-start">
      <div className="fixed hidden md:block md:w-1/4 lg:w-1/5 xl:w-[18%]">
        <AdminSidebar />
      </div>
      <div className="ml-auto w-full md:w-3/4 lg:w-4/5 xl:w-[82%]">
        <div className="fixed right-0 top-0 z-10 w-full bg-adminBg py-3 md:w-3/4 lg:w-4/5 xl:w-[82%]">
          <div className="mx-auto w-[92%] md:w-[96%]">
            <AdminNavbar />
          </div>
        </div>

        <div className="mt-[3.9rem] w-full bg-adminBg py-10 md:mt-[4.8rem] md:py-4">
          <div className="mx-auto w-[92%] md:w-[96%]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
