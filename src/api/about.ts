import axios from "axios";
import type { IAbout } from "@/types/about";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchAbouts = async (): Promise<IAbout[]> => {
  try {
    const token = localStorage.getItem("token"); // get token from localStorage

    const res = await axios.get(`${API_URL}/about`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    return res.data?.data ?? [];
  } catch (error: any) {
    console.error("❌ fetchAbouts error:", error.response?.data || error.message);
    return [];
  }
};
