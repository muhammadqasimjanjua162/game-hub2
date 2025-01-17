import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
//this component is rendring multie times
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
// import useGames from "../hooks/useGames";

interface Props {
  game: Game;
}


const GameCard = ({ game }: Props) => {
  return (
    
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      <img
        src={getCroppedImageUrl(game.background_image)}
        className="w-full h-48 object-cover"
      />

      <h3 className="text-lg font-semibold text-center w-full p-1 text-green-600 ">
        {game.name}
      </h3>
      <div className="flex flex-row justify-between items-center text-center  p-2">
        <PlatformIconsList
          plateforms={game.parent_platforms.map((p) => p.platform)}
        />
        <CriticScore criticScore={game.metacritic} />
      </div>
      <Emoji rating={game.rating_top}/>
    </div>
  );
};

export default GameCard;
