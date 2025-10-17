// api/consent.ts
import axios from "axios";
import type { Consent, ConsentChoice } from "@/types/consent";
// import { useAuthStore } from "@/store/authstore";

const API_URL = import.meta.env.VITE_API_BASE_URL;

// Fetch consent
export const fetchConsent = async (): Promise<Consent | null> => {
  try {
    const token = localStorage.getItem("token");
    const { data } = await axios.get(`${API_URL}/modal/me`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return data.data || null;
  } catch (err: any) {
    console.error("❌ fetchConsent error:", err.response?.data || err.message);
    return null;
  }
};

// Save consent
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

  // Attach userId if present in localStorage
  const userStr = localStorage.getItem("user");
  if (userStr) {
    try {
      const user = JSON.parse(userStr);
      if (user?._id) payload.userId = user._id;
    } catch (e) {
      console.error("Failed to parse user from localStorage:", e);
    }
  }

  // Fallback IP if userId missing
  if (!payload.userId) {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();
    payload.ipAddress = ipData.ip;
  }

  const token = localStorage.getItem("token"); // fetch token from localStorage

  try {
    const { data } = await axios.post(`${API_URL}/modal`, payload, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
    return data;
  } catch (err: any) {
    console.error("❌ saveConsent error:", err.response?.data || err.message);
    throw err;
  }
};
