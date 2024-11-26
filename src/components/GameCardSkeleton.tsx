import React from "react";
import { Typography } from "@material-tailwind/react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GameCardSkeleton = () => {
  return (
    <div className="skeleton-container shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
      {/* Top Skeleton with rounded top corners */}
      <div className="bg-gray-300 w-full h-[190px] rounded-t-lg"></div>

      {/* Bottom Section with rounded bottom corners */}
      <div className="bg-gray-200 h-[100px] flex flex-col justify-center rounded-b-lg">
        {/* Nested Skeletons */}
        <div className="bg-gray-300 h-[10px] w-[240px] mx-auto mb-2"></div>
        <div className="bg-gray-300 h-[10px] w-[240px] mx-auto"></div>
      </div>
    </div>
  );
};

export default GameCardSkeleton;
