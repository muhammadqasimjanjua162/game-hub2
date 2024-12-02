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

export interface Genre {
  id: number;
  name: string;
}
interface fetchGenreResponse {
  results: Genre[];
  count: number;
}

const useGenre = () => {
  const [genre, setGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  //   console.log(games, "gamesS");
  useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);
    apiClient
      .get<fetchGenreResponse>("/genres", {
        signal: controller.signal,
      })
      .then((res) => {
        setGenre(res.data.results);
        setisLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setisLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genre, error, isLoading };
};

export default useGenre;
