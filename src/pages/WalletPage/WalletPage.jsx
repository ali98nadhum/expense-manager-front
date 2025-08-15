import React from "react";
import { Button, IconButton } from "@mui/material";
import { FiEdit, FiRefreshCw, FiPlus, FiCreditCard  , FiTrash2 } from "react-icons/fi";
import PaymentAnimation from "../../animation/Payment Success.json"
import Lottie from "lottie-react";



const WalletPage = () => {

  return (
    <>
    {/* ===== Header page ===== */}
       <div className="header-wallet-page flex items-center justify-center px-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white w-full sm:w-5/6 px-4 py-3 rounded-2xl shadow-lg">
        <div className="flex items-center gap-2 justify-center sm:justify-start">
          <FiCreditCard className="text-blue-500 text-2xl" />
          <h2 className="text-lg sm:text-xl font-bold text-gray-800">
            بطاقاتي
          </h2>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 px-4 py-2 active:scale-95 transition bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg text-white shadow-lg shadow-blue-500/30 text-sm sm:text-base font-semibold w-full sm:w-auto"
        >
          <FiPlus /> إضافة بطاقة
        </button>
      </div>
    </div>

    {/* ===== Wallet card ===== */}
    <div className="wallet-card-sec mt-10 sm:mx-32 p-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg p-5 w-full sm:w-96 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

      <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold mb-4">مصروفي</h3>
            <Lottie style={{ height: "100px" }} loop={false} animationData={PaymentAnimation}/>
      </div>

      {/* الرصيد */}
      <p className="text-sm text-white/80">الرصيد الحالي</p>
      <h2 className="text-3xl font-bold mb-4">300.000 IQD</h2>

      {/* آخر تحديث */}
      <p className="text-xs text-white/70 mb-6">
        آخر تحديث: 2025-8-15
      </p>

      {/* الأزرار */}
      <div className="flex gap-3">
        <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition">
          <FiEdit /> تعديل
        </button>
        <button className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-medium transition">
          <FiTrash2 /> حذف
        </button>
      </div>
    </div>
    
    </div>
    

    </>
  );
};

export default WalletPage;
