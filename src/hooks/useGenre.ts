import useData from "./useData";

// Define the platform interface
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// Define the main platform details interface

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => useData<Genre[]>("/genres");

export default useGenre;
