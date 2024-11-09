import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const Games = () => {
  const { games, error } = useGames();

  console.log(games, "gaerrrr");
  return (
    <div>
      {error && <p>{error}</p>}
      <div className="flex flex-wrap gap-4 p-4 justify-between">
        {games.map((game) => (
          <div key={game.id} className="w-full sm:w-1/2 lg:w-3/12 p-2">
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
