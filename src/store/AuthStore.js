import axios from "axios";
import { create } from "zustand";




export const authStore = create((set) => ({


   // Loading state
   isLoading: false,
   setIsLoading: (isLoading) => set({ isLoading }),


  // ============================== Auth Functions ============================================
  token: null,  

  login: async (email, password) => {
    try {
      // send data to server
      const res = await axios.post("http://localhost:8050/api/v1/auth/login", {
        email,
        password,
      });

      const data = res.data;

      set({ token: data.token });

    localStorage.setItem("token", data.token);

      return { success: true };
    } catch (err) {
    console.error("Login Error:", err);

    let message = "فشل تسجيل الدخول"; // error defult message
    if (err.response && err.response.data && err.response.data.message) {
      message = err.response.data.message; // error server message
    }

    return { success: false, error: message };
  }
  },
  




   registerUser: async (name, email, password) => {
    try {
      const res = await axios.post("http://localhost:8050/api/v1/auth/register", {
        name,
        email,
        password,
      });

      const data = res.data;

      return { success: true };
    } catch (err) {
      console.error("Register Error:", err);

      let message = "فشل إنشاء الحساب";
      if (err.response?.data?.message) {
        message = err.response.data.message;
      }

      return { success: false, error: message };
    }
  },





}));