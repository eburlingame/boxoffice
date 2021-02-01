import React from "react";

type MoviePosterProps = {
  src: string;
};

const MoviePoster = ({ src }: MoviePosterProps) => {
  if (src === "N/A") {
    src = "https://via.placeholder.com/300x475.png?text=No%20Poster";
  }

  return (
    <img
      alt="Movie poster"
      style={{
        width: "100%",
        maxHeight: "300px",
        paddingBottom: "10%",
        objectFit: "contain",
      }}
      src={src}
    />
  );
};

export default MoviePoster;
