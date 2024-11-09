import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useGames from "../hooks/useGames";

const Games = () => {
  const { games, error } = useGames();

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
