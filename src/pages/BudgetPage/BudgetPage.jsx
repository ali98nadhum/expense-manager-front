import { FiPlus, FiCreditCard, FiEdit, FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import { motion } from "framer-motion";

const BudgetPage = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  // بيانات تجريبية
  const budgets = [
    { id: 1, month: 8, year: 2025, amount: 1500000 },
    { id: 2, month: 7, year: 2025, amount: 1200000 },
    { id: 3, month: 6, year: 2025, amount: 1000000 },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* ===== Header page ===== */}
      <div className="header-wallet-page flex items-center justify-center px-3">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white w-full sm:w-5/6 px-4 py-3 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <FiCreditCard className="text-blue-500 text-2xl" />
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              ميزانيات الأشهر
            </h2>
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 px-4 py-2 active:scale-95 transition bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg text-white shadow-lg shadow-blue-500/30 text-sm sm:text-base font-semibold w-full sm:w-auto"
            onClick={() => setIsAddOpen(!isAddOpen)}
          >
            <FiPlus /> إضافة ميزانية
          </button>
        </div>
      </div>

      {/* ===== Budget Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full sm:w-5/6 mx-auto">
        {budgets.map((budget) => (
          <motion.div
            key={budget.id}
            initial={{ x: 100, opacity: 0 }}        
            animate={{ x: 0, opacity: 1 }}          
            transition={{ duration: 0.6, delay:0.6 }} 
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 flex flex-col justify-between border border-gray-100"
          >
            {/* العنوان */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800">
                ميزانية شهر {budget.month}
              </h3>
              <span className="text-[18px] text-gray-500">{budget.year}</span>
            </div>

            {/* المبلغ */}
            <p className="mt-3 text-2xl font-extrabold text-blue-600">
              {budget.amount.toLocaleString()}{" "}
              <span className="text-sm">IQD</span>
            </p>

            {/* أزرار التحكم */}
            <div className="flex justify-end gap-3 mt-6">
              <button className="flex items-center gap-1 px-3 py-2 text-sm bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                <FiEdit /> تعديل
              </button>
              <button className="flex items-center gap-1 px-3 py-2 text-sm bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                <FiTrash2 /> حذف
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BudgetPage;
