import Layout from "../components/Layout";
import MovieDetails from "../components/MovieDetails";
import MovieItemContainer from "../components/MovieItemContainer";
import MovieListContainer from "../components/MovieListContainer";
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
  return (
    <Layout>
      <div className="p-4 text-3xl font-extrabold">Confirmed!</div>

      <div className="p-4 text-xl">{savedMovies.length} films selected:</div>
      <div className="w-full">
        <MovieListContainer>
          {savedMovies.map((movie) => (
            <MovieItemContainer>
              <MovieDetails movie={movie} />
            </MovieItemContainer>
          ))}
        </MovieListContainer>
      </div>
    </Layout>
  );
};

export default ReviewPage;
