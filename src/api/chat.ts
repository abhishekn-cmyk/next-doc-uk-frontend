import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

// ✅ Get all chats for the logged-in user
export const getChat = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.get(`${API_URL}/chat`, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    return res.data;
  } catch (error: any) {
    console.error("❌ getChat error:", error.response?.data || error.message);
    throw error;
  }
};

// ✅ Send chat message with userId + tab + text
export const sendChat = async (payload: {
  userId: string;
  text: string;
  tab?: string;
}) => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(`${API_URL}/chat`, payload, {
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    return res.data;
  } catch (error: any) {
    console.error("❌ sendChat error:", error.response?.data || error.message);
    throw error;
  }
};
