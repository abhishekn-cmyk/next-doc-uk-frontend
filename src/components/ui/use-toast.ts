// src/hooks/use-toast.ts
import { toast as hotToast } from "react-hot-toast";
import type { ToastOptions as HotToastOptions } from "react-hot-toast"; // <-- type-only import


// Custom ToastOptions type
export type ToastOptions = HotToastOptions & {
  title?: string;
  description?: string;
  variant?: "default" | "destructive" | "success" | "warning" | "info";
};

export function useToast() {
  function showToast(message: string, options?: ToastOptions) {
    hotToast(message, options);
  }

  function success(message: string, options?: ToastOptions) {
    hotToast.success(message, options);
  }

  function error(message: string, options?: ToastOptions) {
    hotToast.error(message, options);
  }

  return {
    showToast,
    success,
    error,
  };
}
