import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const Games = () => {
  const { games, error, isLoading } = useGames();

  console.log(games, "gaerrrr");
  console.log(isLoading, "loadingssssss");
  return (
    <div>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {isLoading
          ? Array.from({ length: 9 }).map((_, index) => (
              <div key={index}>
                <GameCardSkeleton />
              </div>
            ))
          : games.map((game) => (
              <div key={game.id}>
                <GameCard game={game} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Games;
