import React from "react";

type MovieListContainerProps = {
  children?: React.ReactNode;
};

const MovieListContainer = ({ children }: MovieListContainerProps) => {
  return (
    <div className="flex flex-wrap items-center items-stretch justify-center p-4">
      {children}
    </div>
  );
};

export default MovieListContainer;
