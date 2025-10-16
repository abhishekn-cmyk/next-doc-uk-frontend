// hooks/useProducts.ts
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/api/product"; // path to your fetchProducts file
import type { Product } from "@/types/product";

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes caching
    retry: 1, // retry once if it fails
  });
};
