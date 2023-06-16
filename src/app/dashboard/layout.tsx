import React from "react";
import Sidebar from "./sidebar/page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-0 relative p-3 sm:p-5 ">
    {/* <div className="grid grid-cols-5 sm:grid-cols-7 relative p-3 sm:p-5 "> */}
      {< span className="sm:hidden"></span>}
      {/* sidebar */}
      <Sidebar />
      {/* Dasboardsub routes*/}
      <div className="flex-1 p-5">
        {/* <div className=" flex-grow bg-gray-400"> */}
  
        {children}
      </div>
    </div>
  );
}
