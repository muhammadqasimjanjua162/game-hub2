import React from "react";

const Light = () => {
  return (
    <div
      className={`w-14 h-4 flex items-center rounded-full p-1 cursor-pointer `}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${"translate-x-6"}`}
      />
    </div>
  );
};

export default Light;
