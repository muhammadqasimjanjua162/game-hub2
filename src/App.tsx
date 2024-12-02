import { useEffect, useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Games from "./components/Games";
import GenreList from "./components/GenreList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  return (
    <>
      <div>
        <div>
          <div className="px-4 mb-5 mt-5">
            <NavBar handleClick={handleClick} isDarkMode={isDarkMode} />
          </div>
          <div className="flex flex-row">
            <div className="w-2/12 hidden lg:block p-5 ">
              <GenreList />
            </div>
            <div className="w-full 10/12">
              <Games />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
