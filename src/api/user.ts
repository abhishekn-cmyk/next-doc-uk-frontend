import axiosInstance from "@/lib/axiosInstance";
import type { TResetPassword } from "@/types/user";

export const forgotPassword = async (email: string) => {
  const res = await axiosInstance.post("/user/forgot-password", {
    email,
  });

  return res.data;
};

export const resetPassword = async (formData: TResetPassword) => {
  const res = await axiosInstance.patch("/user/reset-password", formData);
  return res.data;
};
