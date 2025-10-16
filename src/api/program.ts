import axios from "axios";
import type { IProgram } from "@/types/program";

export const getProgramsByCategory = async (): Promise<IProgram[]> => {
  const { data } = await axios.get(
    `${import.meta.env.VITE_API_BASE_URL}/program`
  );
  return data.data;
};
