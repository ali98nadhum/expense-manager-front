import { useState , useEffect } from "react";
import menuIcon from "../../assets/icons/menu.png";
import headerIcon from "../../assets/icons/headerIcon.png";
import { motion, AnimatePresence } from "framer-motion";
import { IoSettingsOutline } from "react-icons/io5";
import { jwtDecode } from "jwt-decode";


const Header = ({ isOpen, setIsOpen }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUsername(decoded.name  || "مستخدم");
        console.log(decoded);
        
      } catch (error) {
        console.error("خطأ في فك التوكن:", error);
      }
    }
  }, []);


  return (
    <>
      <div className="bg-white p-4 sm:p-6 my-5 rounded-3xl shadow-md relative mx-5 sm:mx-36">
        <div className="flex items-center justify-between">
          <div className="block sm:hidden" onClick={() => setIsOpen(!isOpen)}>
            <img src={menuIcon} alt="" className="h-7 w-7" />
          </div>

          <div className="flex items-center justify-between gap-3">
            <img src={headerIcon} alt="" className="w-7 h-7 md:w-10 md:h-10" />
            <div>
              <h2 className="text-[14px] md:text-[16px]">مستخدم</h2>
              <p className="text-gray-500 text-sm">مرحبا بك  {username}</p>
            </div>
          </div>

          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10, color: "#3b82f6" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <IoSettingsOutline className="h-8 w-8" />
            </motion.div>

            <AnimatePresence>
              {openMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-13  -right-25 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50"
                >
                  <button className="block w-full text-right px-4 py-2 hover:bg-gray-100">
                    الملف الشخصي
                  </button>
                  <button className="block w-full text-right px-4 py-2 hover:bg-gray-100 text-red-500">
                    تسجيل الخروج
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
