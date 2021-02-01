import React from "react";
import MovieListContainer from "./MovieListContainer";

type MovieMessageItemProps = {
  text: string;
};

const MovieMessageItem = ({ text }: MovieMessageItemProps) => {
  return (
    <MovieListContainer>
      <div className="flex-1 text-lg">{text}</div>
    </MovieListContainer>
  );
};

export default MovieMessageItem;
