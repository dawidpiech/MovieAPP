import MovieTile from "./MovieTile";
import { MovieWrapper } from "../Wrappers/Wrappers";

const MovieContent = ({ movies, genres }) => {
  return (
    <MovieWrapper>
      {movies &&
        movies.map((movie) => (
          <MovieTile
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            release={movie.release_date}
            genres={genres}
            movieGenre={movie.genre_ids}
            rate={movie.vote_average}
            votes={movie.vote_count}
          ></MovieTile>
        ))}
    </MovieWrapper>
  );
};

export default MovieContent;
