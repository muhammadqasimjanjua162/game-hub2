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

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  criticScore: number;
}
interface gamesProps {
  results: Game[];
  count: number;
}

const useGames = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  console.log(games, "gamesS");
  useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);
    apiClient
      .get<gamesProps>("/games", {
        signal: controller.signal,
      })
      .then((res) => {
        setGame(res.data.results);
        setisLoading(false);
      })
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
        setisLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};

export default useGames;
