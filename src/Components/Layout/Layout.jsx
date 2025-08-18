import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";

const Layout = () => {
  const location = useLocation(); 
  const noLayoutPages = ["/login", "/register"];
  const hideLayout = noLayoutPages.includes(location.pathname);

  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      {!hideLayout && <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />}

      {/* Overlay in mobile */}
      {!hideLayout && isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${!hideLayout && !isMobile ? "md:mr-64" : ""}`}>
        {!hideLayout && <Header isOpen={isOpen} setIsOpen={setIsOpen} />}
        <main className="flex-1 overflow-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
