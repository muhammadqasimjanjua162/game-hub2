import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}

const Games = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  return (
    <div>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-4">
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
