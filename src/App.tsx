import { useEffect, useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useData";
import SortSelector from "./components/SortSelector";

import GameHeading from "./components/GameHeading";
export interface GameQuery {
  genre: Genre | null;
  plateform: Platform | null;
  sortOrder: string;
  search: string;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [plateForm,setPlateForm]=useState({} as Platform)

 
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      window.document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      localStorage.setItem("theme", "light");
      window.document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
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
  
    setGameQuery({ ...gameQuery, genre });
  };
  const onSelectPlateform = (plateform: Platform) => {
    setGameQuery({
      ...gameQuery,
      plateform,
    });
  };
  const onSelectSortOrder = (sortOrder: string) => {
    setGameQuery({
      ...gameQuery,
      sortOrder,
    });
  };
  const selectPlateForm=(plateform:Platform)=>{
    setPlateForm(plateform)

  }

 
  return (
    <>
      <div>
        <div className="px-6">
          <div className="mb-5 mt-5">
            <NavBar
              onSearch={(search) => setGameQuery({ ...gameQuery, search })}
              handleClick={handleClick}
              isDarkMode={isDarkMode}
            />
          </div>
          <div className="flex flex-row">
            <div className="w-2/12 hidden lg:block">
              <GenreList
                handleGenre={handleGenre}
                selectedGenre={gameQuery.genre}
              />
            </div>
            <div className="w-full 10/12">
              <GameHeading gameQuery={gameQuery} />
              <div className="flex items-center xs:flex-col sm:flex-row">
                <PlatformSelector onSelectPlateform={onSelectPlateform}
                selectPlateForm={selectPlateForm}
                plateForm={plateForm} />
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
