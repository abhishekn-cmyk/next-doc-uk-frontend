import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

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

export const sendChat = async (text: string) => {
  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      `${API_URL}/chat`,
      { text },
      {
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      }
    );

    return res.data;
  } catch (error: any) {
    console.error("❌ sendChat error:", error.response?.data || error.message);
    throw error;
  }
};
