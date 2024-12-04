import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";

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
  metacritic: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.plateform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );

export default useGames;
