import { forgotPassword, resetPassword } from "@/api/user";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export const useForgotPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (email: string) => forgotPassword(email),
    onSuccess: () => {
      toast.success("OTP sent to your email.");
      navigate("/reset-password");
    },
    onError: (error: any) => {
      toast.error(
        error?.message || "An error occurred while updating the profile."
      );
    },
  });
};

export const useResetPassword = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success("Password reset successfully");
      navigate("/login");
    },
    onError: (error: any) => {
      toast.error(error?.message || "Failed to reset password");
    },
  });
};
