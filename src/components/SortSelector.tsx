import React, { useState, useEffect, useRef } from "react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({ onSelectSortOrder }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sortOrders = [
    { value: "", label: "" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const { data } = usePlatforms();
  console.log(data, "platformssss");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as HTMLDivElement)
    ) {
      setIsOpen(false);
    }
  };

  const handleItemClick = () => {
    setIsOpen(false); // Close the dropdown when a platform is clicked
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="w-auto px-4 py-2 text-lg font-medium text-gray-800 border border-gray-300 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex items-center justify-between"
      >
        Order By: Relevence
        <svg
          className={`w-5 h-5 ml-2 transform ${
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
        <div
          id="dropdownSearch"
          className="absolute z-10 mt-2 bg-white rounded-lg shadow w-60 dark:bg-gray-700"
        >
          <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
            <li>
              <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <label className="w-full py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Relevence
                </label>
              </div>
            </li>
            <li>
              {sortOrders.map((order) => (
                <div
                  key={order.value} // Ensure each item has a unique key
                  className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  <label
                    className="w-full py-2 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    onClick={() => {
                      onSelectSortOrder(order.value);
                      handleItemClick();
                    }} // Use arrow function to call onClick properly
                  >
                    {order.label}
                  </label>
                </div>
              ))}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortSelector;
