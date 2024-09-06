import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="bg-slate-50 min-h-screen  ">
      <Header setSidebarOpen={setSidebarOpen} />

      <Sidebar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <main className="bg-slate-50 w-full lg:w-[85%]  lg:mx-64">
        {/* <AddressBar /> */}
        <div className="px-4  sm:px-6 lg:px-8 ">
          {/* Main area */}
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Main;
