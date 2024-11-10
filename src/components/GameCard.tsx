import React from "react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  console.log(game, "galowsss");
  console.log(game.parent_platforms, "plate");
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={game.background_image} className="w-full h-48 object-cover" />
        <h3 className="text-lg font-semibold text-center p-4  text-green-600">
          {game.name}
        </h3>
        <PlatformIconsList
          plateforms={game.parent_platforms.map((p) => p.platform)}
        />
        {/* {game.parent_platforms.map(({ platform }) => (
          <p className="text-gray-600">{platform.name}</p>
        ))} */}
      </div>
    </div>
  );
};

export default GameCard;
