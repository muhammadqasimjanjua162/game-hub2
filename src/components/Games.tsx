import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
interface Game {
  id: number;
  name: string;
}
interface gamesProps {
  results: Game[];
  count: number;
}

const Games = () => {
  const [games, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");
  console.log(games, "gamesS");
  useEffect(() => {
    apiClient
      .get<gamesProps>("/games")
      .then((res) => setGame(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  console.log(games, "gaerrrr");
  return (
    <div>
      {error && <p>{error}</p>}
      <ul>
        {games?.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Games;
