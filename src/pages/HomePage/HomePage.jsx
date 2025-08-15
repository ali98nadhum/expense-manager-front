import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

// بيانات تجريبية
const transactionsData = [
  { id: 1, type: "مصروف", category: "طعام", amount: 5000, date: "2025-08-15" },
  { id: 2, type: "دخل", category: "راتب", amount: 150000, date: "2025-08-14" },
  { id: 3, type: "مصروف", category: "مواصلات", amount: 2000, date: "2025-08-14" },
  { id: 4, type: "مصروف", category: "تسوق", amount: 8000, date: "2025-08-13" },
    { id: 4, type: "مصروف", category: "تسوق", amount: 8000, date: "2025-08-12" },

      { id: 4, type: "مصروف", category: "تسوق", amount: 8000, date: "2025-08-11" },

        { id: 4, type: "مصروف", category: "تسوق", amount: 8000, date: "2025-08-10" },

          { id: 4, type: "مصروف", category: "تسوق", amount: 8000, date: "2025-08-9" },

            { id: 4, type: "مصروف", category: "تسوق", amount: 8000, date: "2025-08-8" },

              { id: 4, type: "مصروف", category: "تسوق", amount: 8000, date: "2025-08-7" },


];

const categoriesData = [
  { name: "طعام", value: 5000 },
  { name: "مواصلات", value: 2000 },
  { name: "تسوق", value: 8000 },
  { name: "تسوق", value: 8000 },
  { name: "تسوق", value: 8000 },
  { name: "تسوق", value: 8000 },
  { name: "تسوق", value: 8000 },
  { name: "تسوق", value: 8000 },
  { name: "تسوق", value: 8000 },

];

const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4ADE80", "#F87171"];

const HomePage = () => {
  const [transactions, setTransactions] = useState(transactionsData);

  const totalIncome = transactions
    .filter(t => t.type === "دخل")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "مصروف")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="p-6 min-h-screen">
      {/* العنوان */}
      <h1 className="text-2xl font-bold mb-6">لوحة التحكم - إدارة المصاريف</h1>

      {/* ملخص مالي */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">الرصيد الحالي</h2>
          <p className="text-xl font-bold">{balance.toLocaleString()} د.ع</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">إجمالي الدخل</h2>
          <p className="text-xl font-bold text-green-500">{totalIncome.toLocaleString()} د.ع</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500">إجمالي المصروفات</h2>
          <p className="text-xl font-bold text-red-500">{totalExpense.toLocaleString()} د.ع</p>
        </div>
      </div>

      {/* رسوم بيانية */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500 mb-2">تصنيفات المصاريف</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categoriesData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {categoriesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-gray-500 mb-2">المصروفات حسب الأيام</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={transactions.filter(t => t.type === "مصروف")}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value) => `${value.toLocaleString()} د.ع`} />
              <Bar dataKey="amount" fill="#F87171" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* إدخال جديد */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-gray-500 mb-2">إضافة معاملة جديدة</h2>
        <form className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <input type="text" placeholder="المبلغ" className="border p-2 rounded" />
          <select className="border p-2 rounded">
            <option value="دخل">دخل</option>
            <option value="مصروف">مصروف</option>
          </select>
          <input type="text" placeholder="التصنيف" className="border p-2 rounded" />
          <button className="bg-blue-500 text-white rounded p-2">إضافة</button>
        </form>
      </div>

      {/* آخر المعاملات */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-gray-500 mb-2">آخر المعاملات</h2>
        <table className="w-full text-right">
          <thead>
            <tr className="border-b">
              <th className="p-2">التاريخ</th>
              <th className="p-2">النوع</th>
              <th className="p-2">التصنيف</th>
              <th className="p-2">المبلغ</th>
            </tr>
          </thead>
          <tbody>
            {transactions.slice(0, 5).map(t => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{t.date}</td>
                <td className={`p-2 ${t.type === "دخل" ? "text-green-500" : "text-red-500"}`}>{t.type}</td>
                <td className="p-2">{t.category}</td>
                <td className="p-2">{t.amount.toLocaleString()} د.ع</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
