import Lottie from "lottie-react";
import PaymentAnimation from "../../animation/Payment Success.json"
import { FiEdit,FiTrash2 } from "react-icons/fi";



const WalletCard = () => {
  return (
    <>
       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg p-5 w-full sm:w-96 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

      <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold mb-4">مصروفي</h3>
            <Lottie style={{ height: "100px" }} loop={false} animationData={PaymentAnimation}/>
      </div>

      <p className="text-sm text-white/80">الرصيد الحالي</p>
      <h2 className="text-3xl font-bold mb-4">300.000 IQD</h2>

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
    </>
  )
}

export default WalletCard
