import { useState } from "react";
import { Movie } from "./search";

const useSavedMovies = () => {
  const [savedMovies, setSaved] = useState<Movie[]>([]);

  const saveMovie = (movie: Movie) => {
    setSaved((list) => [...list, movie]);
  };

  const unsaveMovie = (movie: Movie) => {
    setSaved((list) => list.filter((m: Movie) => m.imdbId !== movie.imdbId));
  };

  console.log(savedMovies);

  return { savedMovies, saveMovie, unsaveMovie };
};

export default useSavedMovies;
