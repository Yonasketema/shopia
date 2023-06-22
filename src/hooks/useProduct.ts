import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Category } from "../pages/HomePage";

export interface Product {
  id: number;
  title: string;
  price: number;
  image_uri: string;
}

const useProduct = (selectedCategory: Category | null) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Product[]>("/product/", {
        signal: controller.signal,
        params: { categories: selectedCategory?.params.join(",") },
      })
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [selectedCategory]);

  return { products, error, isLoading };
};

export default useProduct;
