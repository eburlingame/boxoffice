import React from "react";

type MovieItemContainerProps = {
  children?: React.ReactNode;
};

const MovieItemContainer = ({ children }: MovieItemContainerProps) => {
  return (
    <div
      className="flex flex-col border justify-between border-solid dark:border-gray-400 rounded m-2 p-2"
      style={{ minWidth: "150px", maxWidth: "250px", width: "40vw" }}
    >
      {children}
    </div>
  );
};

export default MovieItemContainer;
