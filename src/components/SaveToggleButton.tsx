import React from "react";
import { FaCheck, FaPlus } from "react-icons/fa";
import { Movie } from "../hooks/search";
import Button from "./Button";

type SaveToggleButtonProps = {
  movie: Movie;
  saved: boolean;
  saveMovie: (movie: Movie) => void;
  unsaveMovie: (movie: Movie) => void;
};

const SaveToggleButton = ({
  movie,
  saved,
  saveMovie,
  unsaveMovie,
}: SaveToggleButtonProps) => {
  return (
    <Button
      text={saved ? "Added!" : "Add Movie"}
      icon={saved ? <FaCheck /> : <FaPlus />}
      className={
        saved
          ? "bg-green-700 hover:bg-green-900 active:bg-green-900"
          : "bg-blue-700 hover:bg-blue-900 active:bg-blue-900"
      }
      onClick={() => (saved ? unsaveMovie(movie) : saveMovie(movie))}
    />
  );
};

export default SaveToggleButton;
