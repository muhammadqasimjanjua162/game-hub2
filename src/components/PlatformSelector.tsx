import React, { useState } from "react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const { data } = usePlatforms();
  console.log(data, "platformssss");

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="w-48 px-4 py-2 text-lg font-medium text-gray-800 border border-gray-300 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300"
      >
        Platform
        <svg
          className={`w-5 h-5 ml-2 inline-block transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul className="py-2">
            {data.map((platform, index) => (
              <li>
                <a
                  href="/first"
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 rounded transition-all duration-300"
                >
                  {platform.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
