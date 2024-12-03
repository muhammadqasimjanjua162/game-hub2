import React, { useEffect, useState } from "react";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "../hooks/useGenre";
import useGames, { Game } from "../hooks/useGames";
import useData from "../hooks/useData";
interface Props {
  selectedGenre: Genre | null;
}

const Games = () => {
  const { data, error, isLoading } = useGames();

  // console.log(games, "gaerrrr");
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
          : data.map((game) => (
              <div key={game.id}>
                <GameCard game={game} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Games;
