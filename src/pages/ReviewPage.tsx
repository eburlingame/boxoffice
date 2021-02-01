import { useEffect } from "react";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import Button from "../components/Button";
import Layout from "../components/Layout";
import MovieDetails from "../components/MovieDetails";
import MovieItemContainer from "../components/MovieItemContainer";
import MovieListContainer from "../components/MovieListContainer";
import RemoveButton from "../components/RemoveButton";
import { Movie } from "../hooks/search";

type ReviewPageProps = {
  gotoPage: (page: string) => void;
  savedMovies: Movie[];
  saveMovie: (movie: Movie) => void;
  unsaveMovie: (movie: Movie) => void;
};

const ReviewPage = ({
  gotoPage,
  savedMovies,
  saveMovie,
  unsaveMovie,
}: ReviewPageProps) => {
  useEffect(() => {
    if (savedMovies.length === 0) {
      gotoPage("search");
    }
  }, [savedMovies]);

  return (
    <Layout>
      <div className="w-full flex flex-wrap items-center justify-between items-center p-4 mt-4">
        <div className="mt-2 flex-1 md:flex-initial">
          <Button
            icon={<FaArrowLeft />}
            text={`Back to Search`}
            className="bg-purple-700 hover:bg-purple-900"
            onClick={() => gotoPage("search")}
          />
        </div>
      </div>

      <div className="p-4 text-3xl font-extrabold">Confirm your films</div>

      <div className="p-4">Selected films:</div>
      <div className="w-full">
        <MovieListContainer>
          {savedMovies.map((movie) => (
            <MovieItemContainer>
              <MovieDetails movie={movie} />
              <RemoveButton onClick={() => unsaveMovie(movie)} />
            </MovieItemContainer>
          ))}
        </MovieListContainer>
      </div>

      <div className="w-full flex items-center justify-center items-stretch p-4">
        <div className="flex-1 md:flex-initial md:w-40">
          <Button
            icon={<FaCheck />}
            text="Confirm"
            className="bg-green-700 hover:bg-green-900"
            onClick={() => gotoPage("confirm")}
          />
        </div>
      </div>
    </Layout>
  );
};

export default ReviewPage;
