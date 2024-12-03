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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
