import { toast as hotToast } from "react-hot-toast";
import type { ToastOptions as HotToastOptions } from "react-hot-toast";
import React from "react";

export type ToastOptions = HotToastOptions;

export function useToast() {
  function showToast(message: string | React.ReactNode, options?: ToastOptions) {
    const messageString = typeof message === 'string' ? message : React.isValidElement(message) ? 'Notification' : String(message);
    hotToast(messageString, options);
  }

  function success(message: string | React.ReactNode, options?: ToastOptions) {
    const messageString = typeof message === 'string' ? message : React.isValidElement(message) ? 'Success' : String(message);
    hotToast.success(messageString, options);
  }

  function error(message: string | React.ReactNode, options?: ToastOptions) {
    const messageString = typeof message === 'string' ? message : React.isValidElement(message) ? 'Error occurred' : String(message);
    hotToast.error(messageString, options);
  }

  return { showToast, success, error };
}