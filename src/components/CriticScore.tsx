import React from "react";

const CriticScore = ({ criticScore }) => {
  console.log(criticScore, "critc");
  return (
    <div>
      <span
        className={`text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:text-gray-300 ${
          criticScore >= 75
            ? "bg-green-200" // High score, green background
            : criticScore >= 60
            ? "bg-yellow-100" // Medium score, yellow background
            : "" // Low score, red background
        }`}
      >
        {criticScore}
      </span>
    </div>
  );
};

export default CriticScore;
