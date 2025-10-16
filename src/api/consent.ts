// api/consent.ts
import axios from "axios";
import type { Consent, ConsentChoice } from "@/types/consent";
import axiosInstance from "@/lib/axiosInstance";
import { useAuthStore } from "@/store/authstore";

export const fetchConsent = async (): Promise<Consent | null> => {
  const { data } = await axiosInstance.get("/modal/me");
  return data.data || null;
};
// api/consent.ts

export const saveConsent = async ({
  choice,
  policy,
  location,
}: {
  choice: ConsentChoice;
  policy: Consent["policy"];
  location?: {
    city?: string;
    region?: string;
    country?: string;
    postal?: string;
    latitude?: number;
    longitude?: number;
  } | null;
}) => {
  const normalizedLocation = location || undefined;

  let payload: any = { choice, policy, location: normalizedLocation };

  // attach userId if present
  const userStr = localStorage.getItem("user");
  if (userStr) {
    try {
      const user = JSON.parse(userStr);
      if (user?._id) payload.userId = user._id;
    } catch (e) {
      console.error("Failed to parse user from localStorage:", e);
    }
  }

  // fallback IP if userId missing
  if (!payload.userId) {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();
    payload.ipAddress = ipData.ip;
  }

  const { token } = useAuthStore();
  const res = await axios.post(`/modal`, payload, {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  return res.data;
};
