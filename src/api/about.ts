import axiosInstance from "@/lib/axiosInstance";
import type { IAbout } from "@/types/about";

export const fetchAbouts = async (): Promise<IAbout[]> => {
  const res = await axiosInstance.get("/about");
  return res.data?.data ?? [];
};
