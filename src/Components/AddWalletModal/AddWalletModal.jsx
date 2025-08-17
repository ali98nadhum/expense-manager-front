import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Lottie from "lottie-react";
import successAnim from "../../animation/Payment Successful Animation.json";

const schema = Yup.object().shape({
  cardName: Yup.string().required("اسم البطاقة مطلوب"),
  amount: Yup.number()
    .typeError("المبلغ لازم يكون رقم")
    .positive("المبلغ لازم يكون أكبر من صفر")
    .required("المبلغ مطلوب"),
  budgetId: Yup.string().required("اختر الشهر"),
});

const AddWalletModal = ({ isAddOpen, setIsAddOpen, budgets, onSubmit }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    setIsSuccess(true);
    reset();

    setTimeout(() => {
      setIsSuccess(false);
      setIsAddOpen(false);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative transform transition-transform duration-500 ease-out scale-95 animate-fadeIn">
        {/*  successAnim screen */}
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center p-6">
            <Lottie
              animationData={successAnim}
              loop={false}
              style={{ height: 300 }}
            />
            <h2 className="text-xl font-bold text-green-600 mt-4">
              تمت إضافة البطاقة بنجاح 🎉
            </h2>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              إضافة بطاقة جديدة
            </h2>

            <form
              onSubmit={handleSubmit(handleFormSubmit)}
              className="space-y-5"
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  اسم البطاقة
                </label>
                <input
                  type="text"
                  {...register("cardName")}
                  className="w-full rounded-xl p-3 bg-gray-100 placeholder-gray-400 focus:outline-none transition-all"
                  placeholder="مثال: مصاريف السوق"
                />
                {errors.cardName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cardName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  المبلغ (بالدينار العراقي)
                </label>
                <input
                  type="number"
                  {...register("amount")}
                  className="w-full rounded-xl p-3 bg-gray-100 placeholder-gray-400 focus:outline-none transition-all"
                  placeholder="مثال: 200000"
                />
                {errors.amount && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.amount.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  اختر الشهر
                </label>
                <select
                  {...register("budgetId")}
                  className="w-full rounded-xl p-3 bg-gray-100 placeholder-gray-400 focus:outline-none transition-all"
                >
                  <option value="">-- اختر الشهر --</option>
                  {budgets.map((budget) => (
                    <option key={budget.id} value={budget.id}>
                      {budget.name}
                    </option>
                  ))}
                </select>
                {errors.budgetId && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.budgetId.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsAddOpen(false)}
                  className="px-5 py-2 rounded-xl border border-gray-300 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all"
                >
                  إضافة
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AddWalletModal;
