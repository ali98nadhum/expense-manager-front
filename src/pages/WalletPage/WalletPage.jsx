import React from "react";
import { Button, IconButton } from "@mui/material";
import { FiEdit, FiRefreshCw, FiPlus } from "react-icons/fi";

const WalletPage = () => {
  // مثال بيانات المحفظة
  const wallets = [
    {
      id: 1,
      name: "My Iraqi Dinar Wallet",
      balance: 1250000,
      lastUpdate: "2025-08-15",
    },
    {
      id: 2,
      name: "Savings Wallet",
      balance: 450000,
      lastUpdate: "2025-08-14",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* زر إنشاء محفظة جديدة */}
      <div className="flex justify-end mb-6">
        <Button
          variant="contained"
          color="primary"
          startIcon={<FiPlus />}
          className="bg-blue-700 hover:bg-blue-800"
        >
          Create New Wallet
        </Button>
      </div>

      {/* قائمة المحافظ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            className="relative bg-gradient-to-br from-yellow-100 via-orange-200 to-yellow-300 rounded-xl p-6 shadow-lg border border-yellow-400"
          >
            {/* تصميم مستوحى من الحضارة العراقية */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                {wallet.name}
              </h2>
              <p className="text-gray-600">
                Balance: <span className="font-semibold">{wallet.balance} IQD</span>
              </p>
              <p className="text-gray-500 text-sm">
                Last Update: {wallet.lastUpdate}
              </p>
            </div>

            {/* أزرار التعديل والتحديث */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <IconButton
                color="primary"
                className="bg-white hover:bg-gray-100 shadow"
                size="small"
              >
                <FiEdit />
              </IconButton>
              <IconButton
                color="secondary"
                className="bg-white hover:bg-gray-100 shadow"
                size="small"
              >
                <FiRefreshCw />
              </IconButton>
            </div>

            {/* زخارف حضارية عراقية */}
            <div className="absolute top-0 left-0 w-full h-full rounded-xl border-2 border-dashed border-orange-400 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletPage;
