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
}

const useGenre = () => useData<Genre[]>("/genres");
console.log(useGenre, "genMen");

export default useGenre;
