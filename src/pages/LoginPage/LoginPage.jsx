
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link} from "react-router-dom";



const schema = Yup.object().shape({
  email: Yup.string().email("يرجى ادخال اميل صالح").required("الاميل مطلوب"),
  password: Yup.string()
    .required("الرمز مطلوب"),
});

const LoginPage = () => {

  const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

    const handleLogin = () => {
      console.log("تم تسجيل الدخول");
      
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          تسجيل الدخول
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
          {/* Email Input */}
          <div className="relative">
            <FiMail className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              {...register("email")}
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full pl-10 pr-4 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <FiLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
            <input
              {...register("password")}
              type="password"
              placeholder="كلمة المرور"
              className="w-full pl-10 pr-4 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-indigo-500 text-white py-3 rounded-xl font-semibold text-lg shadow-lg hover:bg-indigo-600 transition"
          >
            تسجيل الدخول
          </motion.button>
        </form>

        <p className="text-center text-gray-500 mt-4 text-sm">
          لا تملك حساب؟{" "}
          <Link to="/register" className="text-indigo-500 font-semibold hover:underline">
            أنشئ حساب الآن
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
