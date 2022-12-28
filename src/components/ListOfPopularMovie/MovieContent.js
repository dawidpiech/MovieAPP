import styled from "styled-components";
import MovieTile from "./MovieTile";

const MovieWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  gap: 24px;
`;

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
