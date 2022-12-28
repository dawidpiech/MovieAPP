import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  Image,
  Title,
  YearOfProduction,
  ListOfGenres,
  Genre,
  Rating,
  Rate,
  Votes,
} from "./MovieTileComponents";
import noMoviePhoto from "./noMoviePhoto.png";
import { ReactComponent as Star } from "./star.svg";

const MovieTileWrapper = styled.div`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.gray} 0px 4px 12px;
  border-radius: 10px;
  transition: transform 0.5s ease 0s, box-shadow 0.5s ease 0s;
`;

const Link = styled(NavLink)`
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  height: 100%;
  color: ${({ theme }) => theme.colors.black};
  padding: 0 0 60px 0;
`;

const MovieTile = ({
  id,
  poster,
  title,
  release,
  genres,
  movieGenre,
  rate,
  votes,
}) => {
  const date = new Date(release);
  return (
    <MovieTileWrapper key={id}>
      <Link to={"/movie/" + id}>
        <Image
          src={
            poster
              ? `${process.env.REACT_APP_API_PHOTO_URL}w500${poster}`
              : noMoviePhoto
          }
        />
        <Title>
          {title}
          <YearOfProduction>{date.getFullYear()}</YearOfProduction>
        </Title>
        <ListOfGenres>
          {genres.map(
            (genre) =>
              movieGenre?.includes(genre.id) && (
                <Genre key={genre.id}>{genre.name}</Genre>
              )
          )}
        </ListOfGenres>
        <Rating>
          <Star></Star>
          <Rate>{rate}</Rate>
          <Votes>{votes} votes</Votes>
        </Rating>
      </Link>
    </MovieTileWrapper>
  );
};

export default MovieTile;
