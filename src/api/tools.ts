// src/api/tools.ts
import axios from "axios";
import type { ITool } from "@/types/tool";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

// Helper to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");
  return token ? { Authorization: `Bearer ${token}` } : {};
};

// Fetch all tools
export const fetchTools = async (): Promise<ITool[]> => {
  try {
    const res = await axios.get(`${API_BASE}/tools`, {
      headers: getAuthHeaders(),
    });
    return res.data?.data ?? [];
  } catch (err: any) {
    console.error("❌ fetchTools error:", err.response?.data || err.message);
    return [];
  }
};

// Get sponsor job matches
export const getMatches = async () => {
  try {
    const res = await axios.get(`${API_BASE}/tools/sponsor/job-match`, {
      headers: getAuthHeaders(),
    });
    return res.data;
  } catch (err: any) {
    console.error("❌ getMatches error:", err.response?.data || err.message);
    throw err;
  }
};
