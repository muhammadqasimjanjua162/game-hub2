import React, { useEffect, useState } from "react";

import Dark from "./Dark";
import Light from "./Light";
import SearchInput from "./SearchInput";
interface NavBarProps {
  handleClick: () => void;
  isDarkMode: boolean;
  onSearch: (searchText: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({
  handleClick,
  isDarkMode,
  onSearch,
}) => {
  console.log("nav render ");
  console.log(isDarkMode, "mooooood");
  return (
    <div className="flex items-center justify-center w-full h-16">
      {/* Logo */}
      <div className="flex items-center mr-auto">
        <img
          className="h-10 w-10 object-cover object-center"
          src="./src/assets/logo.webp"
          alt="nature image"
        />
      </div>

      {/* Search Bar */}
      <div className="flex-1 mx-4">
        <SearchInput onSearch={onSearch} />
      </div>

      {/* Dark/Light Mode Toggle */}
      <div className="ml-auto">
        <button
          className="text-gray-400 rounded-3xl bg-slate-200 px-2 py-1.5 flex items-center justify-center  dark:bg-slate-700"
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
