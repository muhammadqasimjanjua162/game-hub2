import React from "react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genre } = useGenre();
  console.log(genre, "newGen");
  return (
    <div>
      <ul>
        {genre.map((genre) => {
          return (
            <ul key={genre.id} className="flex items-center">
              <li className="py-2 ">
                <img
                  src={genre.image_background}
                  className="w-7 h-7 rounded "
                  alt="example image"
                />
              </li>
              <li className="px-2">
                <p>{genre.name}</p>
              </li>
            </ul>
          );
        })}
      </ul>
    </div>
  );
};

export default GenreList;
