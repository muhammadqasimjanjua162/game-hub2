import React from "react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery?.genre?.name || ""}   ${
    gameQuery?.plateform?.name || ""
  }          Games`;
  return (
    <h1 className="text-5xl font-semibold mb-3 text-gray-800">{heading}</h1>
  );
};

export default GameHeading;
