import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Review {
  id: number;
  name: string;
  description: string;
}

const useProductReview = (id: string) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Review[]>(`/review/${parseInt(id)}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setReviews(res.data);
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

  return { reviews, error, isLoading };
};

export default useProductReview;
