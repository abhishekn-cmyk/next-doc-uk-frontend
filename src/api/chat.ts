import axiosInstance from "@/lib/axiosInstance";

export const getChat = async () => {
  const res = await axiosInstance.get("/chat");
  return res.data;
};

export const sendChat = async (text: string) => {
  const res = await axiosInstance.post("/chat", { text: text });
  return res.data;
};
