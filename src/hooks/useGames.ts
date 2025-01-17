import { GameQuery } from "../App";
import useData from "./useData";

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
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery?.plateform?.id,
        ordering: gameQuery.sortOrder,
        search:
          gameQuery.search !== "th" && gameQuery.search !== "ht"
            ? gameQuery.search
            : "theft",
      },
    },
    [gameQuery]
  );

export default useGames;
