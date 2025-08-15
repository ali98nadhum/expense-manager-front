import { useState } from "react";
import AvatarMune from "../AvatarMune/AvatarMune";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { IoMdArrowDropright } from "react-icons/io";
import menuIcon from "../../assets/icons/menu.png"
import headerIcon from "../../assets/icons/headerIcon.png"
import { CiSettings } from "react-icons/ci";


const Header = ({ isOpen, setIsOpen }) => {
  const [avatarOpen, setAvatarOpen] = useState(false);

  return (
      <div className="bg-white p-4 sm:p-6 my-5 rounded-3xl shadow-md relative mx-5 sm:mx-36">
        <div className="flex items-center justify-between">
          <div className="block sm:hidden"  onClick={() => setIsOpen(!isOpen)}>
            <img src={menuIcon} alt="" className="h-7 w-7" />
          </div>
          <div className="flex items-center justify-between gap-3">
            <img src={headerIcon} alt="" className="w-10 h-10" />
            <div>
              <h2 className="text-[16px]">مستخدم</h2>
              <p className="text-gray-500 text-sm">مرحبا بك علي ناظم</p>
            </div>
          </div>

<CiSettings className="h-10 w-10"/>
          {/* Avatar */}
          {/* <div className="relative">
            <div
              className="flex items-center gap-1"
              onClick={() => setAvatarOpen(!avatarOpen)}
            >
              <Avatar
                sx={{
                  bgcolor: deepOrange[500],
                  width: 56,
                  height: 56,
                  fontSize: 24,
                  cursor: "pointer",
                }}
              >
                ع
              </Avatar>

              <IoMdArrowDropright
                className={`text-2xl transition-transform duration-300 ${
                  avatarOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </div>

            {avatarOpen && <AvatarMune />}
          </div> */}
        </div>
      </div>
  );
};

export default Header;
