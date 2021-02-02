import { useState } from "react";
import { FaFilm } from "react-icons/fa";

import Button from "../components/Button";
import Layout from "../components/Layout";
import MovieDetails from "../components/MovieDetails";
import MovieItemContainer from "../components/MovieItemContainer";
import MovieListContainer from "../components/MovieListContainer";
import MovieMessageItem from "../components/MovieMessageItem";
import SaveToggleButton from "../components/SaveToggleButton";
import SearchInput from "../components/SearchInput";
import { Movie, useMovieSearch } from "../hooks/search";

type SearchPageProps = {
  savedMovies: Movie[];
  gotoPage: (page: string) => void;
  saveMovie: (movie: Movie) => void;
  unsaveMovie: (movie: Movie) => void;
};

const isSavedMovie = (savedMovies: Movie[], movie: Movie): boolean => {
  const savedMovieIds = savedMovies.map((m) => m.imdbId);
  return savedMovieIds.includes(movie.imdbId);
};

const SearchPage = ({
  gotoPage,
  savedMovies,
  saveMovie,
  unsaveMovie,
}: SearchPageProps) => {
  const [searchText, setSearchText] = useState("");
  const { isError, isLoading, results } = useMovieSearch(searchText);

  const searchValid = searchText.trim().length > 0;
  const loaded = !isLoading || !searchValid;
  const noResults = !isLoading && results.length === 0 && searchValid;

  return (
    <Layout>
      <div className="w-full flex flex-wrap items-center justify-between items-center p-4 mt-4">
        <div className="text-3xl font-extrabold mr-6">Select your films</div>

        {savedMovies.length > 0 && (
          <div
            className="mt-2 flex-1 sm:flex-initial"
            style={{ minWidth: "200px" }}
          >
            <Button
              icon={<FaFilm />}
              text={`Confirm ${savedMovies.length} movie${
                savedMovies.length > 1 ? "s" : ""
              }`}
              className="bg-purple-700 hover:bg-purple-900"
              onClick={() => gotoPage("review")}
            />
          </div>
        )}
      </div>

      <div className="w-full flex items-center justify-center flex-col items-stretch p-4">
        <div className="mb-2">Search</div>
        <SearchInput
          value={searchText}
          onChange={(s) => setSearchText(s)}
          placeholder="Search for a movie"
        />
      </div>

      {!loaded && (
        <div className="w-full">
          <MovieMessageItem text="Loading..." />
        </div>
      )}

      {noResults && (
        <div className="w-full">
          <MovieMessageItem text="No results" />
        </div>
      )}

      {isError && (
        <div className="w-full">
          <MovieMessageItem text="An error occured" />
        </div>
      )}

      {loaded && (
        <div className="w-full">
          <MovieListContainer>
            {results.map((movie) => (
              <MovieItemContainer key={movie.imdbId}>
                <MovieDetails movie={movie} />

                <SaveToggleButton
                  movie={movie}
                  saved={isSavedMovie(savedMovies, movie)}
                  saveMovie={saveMovie}
                  unsaveMovie={unsaveMovie}
                />
              </MovieItemContainer>
            ))}
          </MovieListContainer>
        </div>
      )}
    </Layout>
  );
};

export default SearchPage;
