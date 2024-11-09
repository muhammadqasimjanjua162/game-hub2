import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
export interface Game {
  id: number;
  name: string;
  background_image: string;
}
interface gamesProps {
  results: Game[];
  count: number;
}

const useGames = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");
  console.log(games, "gamesS");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<gamesProps>("/games", {
        signal: controller.signal,
      })
      .then((res) => setGame(res.data.results))
      .catch((err) => {
        if (err.name === "CanceledError") return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error };
};

export default useGames;
