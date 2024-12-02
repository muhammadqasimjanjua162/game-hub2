import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface Requirements {
  minimum?: string | null;
  recommended?: string | null;
}

// Define the platform interface
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Define the main platform details interface

interface fetchResponse<T> {
  results: T[];
  count: number;
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  //   console.log(games, "gamesS");
  useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);
    apiClient
      .get<fetchResponse<T>>(endpoint, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data.results);
        setisLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setisLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { data, error, isLoading };
};

export default useData;
