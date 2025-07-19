import { useState } from "react";
import Sidebar from "./Sidebar";
import SubmitAssignment from "./SubmitAssignment";
import CheckGrade from "./Checkgrade";
import Viewassignment from "./Viewassignment";

export default function Index() {
  const [activeTab, setActiveTab] = useState("view");

  return (
    <div className="h-screen md:flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1">
        {activeTab === "view" && <Viewassignment />}
        {activeTab === "submit" && <SubmitAssignment />}
        {activeTab === "grade" && <CheckGrade />}
      </div>
    </div>
  );
}
