import { useEffect, useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useData";
import SortSelector from "./components/SortSelector";
export interface GameQuery {
  genre: Genre | null;
  plateform: Platform | null;
  sortOrder: string;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  console.log("rendering");
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);
  const handleClick = () => {
    if (isDarkMode) {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      window.document.documentElement.classList.add("dark");
    }
    setIsDarkMode(!isDarkMode);
  };
  const handleGenre = (genre: Genre) => {
    console.log(genre, "vlas");
    setGameQuery({ ...gameQuery, genre });
  };
  const onSelectPlateform = (plateform: Platform) => {
    setGameQuery({
      ...gameQuery,
      plateform,
    });
  };
  const onSelectSortOrder = (sortOrder) => {
    setGameQuery({
      ...gameQuery,
      sortOrder,
    });
  };
  console.log(selectedGenre, "this selected");
  console.log(selectedPlatform, "platedelect");
  return (
    <>
      <div>
        <div>
          <div className="px-4 mb-5 mt-5">
            <NavBar handleClick={handleClick} isDarkMode={isDarkMode} />
          </div>
          <div className="flex flex-row">
            <div className="w-2/12 hidden lg:block p-5 ">
              <GenreList
                handleGenre={handleGenre}
                selectedGenre={gameQuery.genre}
              />
            </div>
            <div className="w-full 10/12">
              <div className="flex row  items-center">
                <PlatformSelector onSelectPlateform={onSelectPlateform} />
                <SortSelector
                  sortOrder={gameQuery.sortOrder}
                  onSelectSortOrder={onSelectSortOrder}
                />
              </div>

              <Games gameQuery={gameQuery} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
