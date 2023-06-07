import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import ImageList from "../components/ImageList";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  last_update: Date;
  image_uri: string;
  images: ImageList[];
}

const useProductDetails = (id: string) => {
  const [product, setProducts] = useState<Product | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Product>(`/product/${parseInt(id)}`, {
        signal: controller.signal,
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
  }, [id]);

  return { product, error, isLoading };
};

export default useProductDetails;
