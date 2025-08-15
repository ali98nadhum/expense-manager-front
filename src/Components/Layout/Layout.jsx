import { Outlet } from "react-router-dom";
import { useState } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
   <div className="flex h-screen overflow-hidden">
  {/* Sidebar */}
  <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

    {/* Overlay in mobail */}
      {isOpen && (
        <div
          className="fixed  inset-0 bg-black opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

  {/* Main content */}
  <div className="flex-1 flex flex-col transition-all duration-300 md:mr-64">
    <Header isOpen={isOpen} setIsOpen={setIsOpen} />
    <main className="flex-1 overflow-auto p-4 bg-gray-100">
      <Outlet />
    </main>
  </div>
</div>

  );
};

export default Layout;