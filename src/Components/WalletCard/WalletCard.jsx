import React, { useState } from "react";
import Lottie from "lottie-react";
import PaymentAnimation from "../../animation/Payment Success.json";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const WalletCard = () => {

  const gradients = [
  "from-blue-600 to-indigo-700",
  "from-green-500 to-emerald-600",
  "from-purple-600 to-pink-500",
  "from-yellow-400 to-orange-500",
  "from-red-500 to-pink-600",
  "from-teal-400 to-cyan-500",
  "from-orange-400 to-rose-500",
  "from-indigo-500 to-purple-600",
  "from-fuchsia-500 to-pink-500",
  "from-lime-400 to-green-500",
  "from-amber-400 to-orange-600",
  "from-cyan-400 to-sky-500",
  "from-violet-500 to-purple-700",
  "from-rose-400 to-red-500",
];


// this state for change color wallet 
  const [bgGradient] = useState(gradients[Math.floor(Math.random() * gradients.length)]
  );

  return (
    <div
      className={`bg-gradient-to-r ${bgGradient} text-white rounded-2xl shadow-lg p-4 w-full sm:w-80 relative overflow-hidden`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold mb-2">مصروفي</h3>
        <Lottie
          style={{ height: "70px", width: "70px" }}
          loop={false}
          animationData={PaymentAnimation}
        />
      </div>

      <p className="text-sm text-white/80">الرصيد الحالي</p>
      <h2 className="text-2xl font-bold mb-3">300,000 د.ع</h2>

      <p className="text-xs text-white/70 mb-4">آخر تحديث: 2025-8-15</p>

      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg text-sm font-medium transition">
          <FiEdit /> تعديل
        </button>
        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-3 py-2 rounded-lg text-sm font-medium transition">
          <FiTrash2 /> حذف
        </button>
      </div>
    </div>
  );
};

export default WalletCard;
