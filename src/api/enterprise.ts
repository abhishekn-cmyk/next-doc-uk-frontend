import axios from "axios";
import type { IEnterpriseSolution } from "@/types/enterpriseSolution";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchEnterprise = async (): Promise<IEnterpriseSolution[]> => {
  try {
    const token = localStorage.getItem("token"); // get token if needed
    const res = await axios.get(`${API_URL}/trust`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return res.data?.data ?? [];
  } catch (err: any) {
    console.error("❌ fetchEnterprise error:", err.response?.data || err.message);
    return [];
  }
};
