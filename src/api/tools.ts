// src/api/tools.ts
import axios from "axios";
import type { ITool } from "@/types/tool";
import axiosInstance from "@/lib/axiosInstance";

export const fetchTools = async (): Promise<ITool[]> => {
  const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/tools`);
  return res.data?.data ?? [];
};

export const getMatches = async () => {
  const res = await axiosInstance.get(
    `${import.meta.env}/tools/sponsor/job-match`
  );
  return res.data;
};
