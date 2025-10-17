import axios from "axios";
import type { TResetPassword } from "@/types/user";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

// Optional: helper to get token headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Forgot password
export const forgotPassword = async (email: string) => {
  try {
    const res = await axios.post(
      `${API_BASE}/user/forgot-password`,
      { email },
      { headers: getAuthHeaders() }
    );
    return res.data;
  } catch (err: any) {
    console.error("❌ forgotPassword error:", err.response?.data || err.message);
    throw err;
  }
};

// Reset password
export const resetPassword = async (formData: TResetPassword) => {
  try {
    const res = await axios.patch(
      `${API_BASE}/user/reset-password`,
      formData,
      { headers: getAuthHeaders() }
    );
    return res.data;
  } catch (err: any) {
    console.error("❌ resetPassword error:", err.response?.data || err.message);
    throw err;
  }
};
