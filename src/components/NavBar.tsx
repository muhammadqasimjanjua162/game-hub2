import React, { useEffect, useState } from "react";

import Dark from "./Dark";
import Light from "./Light";
interface NavBarProps {
  handleClick: () => void;
  isDarkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ handleClick, isDarkMode }) => {
  console.log("nav render ");
  return (
    <div className="flex flex-row w-full items-center justify-between ">
      <div className="flex flex-row w-full items-center">
        <div>
          <img
            className="h-10 w-10 object-cover object-center"
            src="./src/assets/logo.webp"
            alt="nature image"
          />
        </div>

        <h2>Navbar</h2>
      </div>
      <div className="bg-yellow-100 dark:bg-blue-900">
        <button
          className="text-gray-400 hover:bg-slate-200 p-2 flex items-center justify-center rounded-md dark:hover:bg-slate-700"
          onClick={handleClick}
          aria-label={`Toggle ${isDarkMode ? "light" : "dark"} mode`}
        >
          {isDarkMode ? <Light /> : <Dark />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
