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
  metacritic: string;
}

const useGames = () => useData<Game>("/games");

export default useGames;
