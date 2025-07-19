import { Outlet } from "react-router-dom";
import Superadminsidebar from "./Superadminsidebar";
import { SuperAdminNavbar } from "../../components";

export default function SuperadminLayout() {
  return (
    <div className="flex w-full items-start">
      <div className="fixed hidden md:block md:w-1/4 lg:w-1/5 xl:w-[18%]">
        <Superadminsidebar />
      </div>
      <div className="ml-auto w-full md:w-3/4 lg:w-4/5 xl:w-[82%]">
        <div className="fixed right-0 top-0 z-10 w-full md:w-3/4 lg:w-4/5 xl:w-[82%]">
          <div className="ml-2 bg-[#398497] py-3">
            <div className="mx-auto w-[92%] md:w-[96%]">
              <SuperAdminNavbar />
            </div>
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
}
