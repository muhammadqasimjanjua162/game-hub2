import React from "react";

const NavBar = () => {
  return (
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
  );
};

export default NavBar;
