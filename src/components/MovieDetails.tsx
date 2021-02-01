import React from "react";
import { Movie } from "../hooks/search";
import MoviePoster from "./MoviePoster";

type MovieDetailsProps = {
  movie: Movie;
};

const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const { title, year, poster } = movie;

  return (
    <>
      <MoviePoster src={poster} />

      <div>
        <div className="text-xl font-bold">{title}</div>
        <div className="text-base dark:text-gray-200">{year}</div>
      </div>
    </>
  );
};

export default MovieDetails;
