import { useQuery } from "react-query";
import useDebounce from "./util";

type APIMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Poster: string;
  Type: string;
};

export type Movie = {
  title: string;
  year: string;
  imdbId: string;
  poster: string;
  type: string;
};

export const useMovieSearch = (searchText: string) => {
  searchText = searchText.trim();
  const recentSearchText = useDebounce(searchText, 750);

  const { isLoading, isError, error, data } = useQuery(
    "movieSearch:" + recentSearchText,
    async () => {
      if (recentSearchText.length === 0) {
        return false;
      }

      console.log("Fetching films for: " + recentSearchText);

      const queryParams = {
        apikey: "ed6f47ce", // TODO: move this somewhere else
        s: recentSearchText,
      };

      const paramString = new URLSearchParams(queryParams).toString();
      const response = await fetch("https://www.omdbapi.com/?" + paramString);

      return response.json();
    }
  );

  let results: Movie[] = [];

  try {
    if (data && data.Search) {
      const movies: APIMovie[] = data.Search;

      results = movies.map(({ Title, Year, imdbID, Poster, Type }) => ({
        title: Title,
        year: Year,
        imdbId: imdbID,
        poster: Poster,
        type: Type,
      }));
    }
  } catch (e) {
    console.error(e);
  }

  return {
    isLoading: isLoading || recentSearchText !== searchText,
    isError,
    error,
    results,
  };
};
