import {FiPlus, FiCreditCard} from "react-icons/fi";
import WalletCard from "../../Components/WalletCard/WalletCard";



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
      
      <WalletCard/>
    
    </div>
    

    </>
  );
};

export default WalletPage;
