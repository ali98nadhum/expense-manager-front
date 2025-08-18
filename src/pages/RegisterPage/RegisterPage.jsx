import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string().email("يرجى ادخال اميل صالح").required("الاميل مطلوب"),
  password: Yup.string().min(8, "الرمز يجب أن يكون 8 أحرف على الأقل").required("الرمز مطلوب"),
  name: Yup.string().required("يرجى ادخال الاسم").min(3 , "الاسم يجب ان يكون من 3 احرف على الاقل")
});



const RegisterPage = () => {

     const {
          register,
          handleSubmit,
          reset,
          formState: { errors },
        } = useForm({
          resolver: yupResolver(schema),
        });
    
        const handRegister = () => {
          console.log("تم تسجيل ");
          
        }
  return (
    <>
       <div className="min-h-screen w-full bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center p-4">
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl p-6 sm:p-8 border border-white/40"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">إنشاء حساب</h1>
          <p className="text-sm text-gray-500 mt-1">سجّل بياناتك للمتابعة</p>
        </div>

        {/* Form (تصميم فقط – بدون لوجك) */}
        <form className="space-y-5" onSubmit={handleSubmit(handRegister)}>
          {/* Name */}
          <div className="relative">
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
              الاسم الكامل
            </label>
            <FiUser className="absolute left-3 top-[47px] -translate-y-1/2" />
            <input
              {...register("name")}
              id="name"
              type="text"
              placeholder="أدخل اسمك الكامل"
              className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
              autoComplete="name"
              dir="rtl"
            />

            {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                </p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              البريد الإلكتروني
            </label>
            <FiMail className="absolute left-3 top-[47px] -translate-y-1/2" />
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="name@example.com"
              className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
              autoComplete="email"
              inputMode="email"
              dir="ltr"
            />
            {errors.email && (
                <p className="text-red-500 text-sm mt-1"> {errors.email.message} </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
              كلمة المرور
            </label>
            <FiLock className="absolute left-3 top-[47px] -translate-y-1/2" />
            <input
              {...register("password")}
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
              autoComplete="new-password"
              dir="ltr"
            />
            {errors.password && (
                <p className="text-red-500 text-sm mt-1"> {errors.password.message} </p>
            )}
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full select-none rounded-xl bg-indigo-600 text-white font-semibold py-3 shadow-lg hover:bg-indigo-700 active:bg-indigo-800 transition"
          >
            إنشاء الحساب
          </motion.button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-sm">
          <span className="text-gray-500">لديك حساب بالفعل؟ </span>
          <Link className="font-semibold text-indigo-600 hover:underline" to="/login">تسجيل الدخول</Link>
        </div>
      </motion.div>
    </div>
    </>
  )
}

export default RegisterPage
