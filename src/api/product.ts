import type { Product } from "@/types/product";
import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/product`;

export const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<{ success: boolean; data: Product[] }>(
    `${BASE_URL}`
  );
  if (!data.success) throw new Error("Failed to fetch product");
  return data.data;
};
