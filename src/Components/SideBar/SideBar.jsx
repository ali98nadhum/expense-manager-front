import Lottie from "lottie-react";
import walletAnimation from "../../animation/wallet.json"
import homeIcon from "../../assets/icons/home.png"
import walletIcon from "../../assets/icons/wallet.png"
import budgetIcon from "../../assets/icons/budget-friendly.png"
import expensesIcon from "../../assets/icons/expenses.png"
import goalsIcon from "../../assets/icons/goal.png";
import todoIcon from "../../assets/icons/to-do-list.png"
import closeIcon from "../../assets/icons/close.png"
import { Link } from "react-router-dom";


const SideBar = ({isOpen , setIsOpen , }) => {

  const menuItems = [
    { name: "الرئيسية", icon: homeIcon , link: "/" },
    { name: "الميزانيه", icon: budgetIcon },
    { name: "محافظي", icon: walletIcon  , link:"/wallet"},
    { name: "الصرفيات", icon: expensesIcon },
    { name: "الاهداف", icon: goalsIcon},
    { name: "المهام", icon: todoIcon },
  ];

  return (
    <>
      <div
        className={`fixed top-0 z-50  ${
          isOpen ? "right-0" : "-right-64"
        } h-full w-64 bg-white shadow-lg transition-all duration-300 flex flex-col rtl`}
      >
        <div className="flex justify-end mb-10 text-center p-6 bg-gradient-to-l from-purple-600 to-indigo-500 text-white text-xl font-bold">
           <img src={closeIcon} alt="" className="h-6 w-6 block sm:hidden" onClick={() => setIsOpen(!isOpen)} />
        </div>

         <Lottie
              style={{ height: "180px" }}
              loop={false}
              animationData={walletAnimation}
            />

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex items-center gap-4 p-3 text-gray-700 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-200"
            >
              <img src={item.icon} alt={item.name} className="h-7 w-7" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Footer Sidebar */}
        <div className="text-center p-4 border-t border-gray-200 mt-auto text-gray-500 text-sm">
          &copy; alinadhum1998@gmail.com
        </div>
      </div>
    </>
  );
};

export default SideBar;
