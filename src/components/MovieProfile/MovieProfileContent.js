import {
  MovieDetailsWrapper,
  MovieProfileDetailsWrapper,
  MovieProfileImageWrapper,
  Image,
  Production,
  DateOfRelease,
  Overview,
  ListOfGenres,
  Genre,
  Rate,
  Rating,
  Votes,
} from "./MovieProfileComponents";
import { PeopleWrapper } from "../Wrappers/Wrappers";
import PersonTile from "../ListOfPopularPeople/PersonTile";
import { ReactComponent as Star } from "../ListOfPopularMovie/star.svg";
import NoMoviePhoto from "../ListOfPopularMovie/noMoviePhoto.png";

const MovieProfileContent = ({
  poster,
  title,
  release,
  movieGenre,
  rate,
  votes,
  production,
  overview,
  castAndCrew,
}) => {
  return (
    <>
      <MovieProfileDetailsWrapper>
        <MovieProfileImageWrapper>
          <Image
            src={
              poster
                ? `${process.env.REACT_APP_API_PHOTO_URL}w500${poster}`
                : NoMoviePhoto
            }
          ></Image>
        </MovieProfileImageWrapper>
        <MovieDetailsWrapper>
          <h1>{title}</h1>
          <Production>
            <span>Production: </span>
            {production && production.map((country) => country.name + ", ")}
          </Production>
          <DateOfRelease>
            <span>Release date: </span> {release ? release : "No release date"}
          </DateOfRelease>
          <ListOfGenres>
            {movieGenre &&
              movieGenre.map((genre) => (
                <Genre key={genre.id}>{genre.name}</Genre>
              ))}
          </ListOfGenres>
          <Rating>
            <Star></Star>
            <Rate>{rate + "/10"}</Rate>
            <Votes>{votes + " votes"}</Votes>
          </Rating>
          <Overview>{overview}</Overview>
        </MovieDetailsWrapper>
      </MovieProfileDetailsWrapper>
      <section>
        <h2>Movies Cast ({castAndCrew.cast && castAndCrew.cast.length}): </h2>
        <PeopleWrapper>
          {castAndCrew.cast &&
            castAndCrew.cast.map((person) => (
              <PersonTile
                key={"cast_" + person.id}
                id={person.id}
                profile_path={person.profile_path}
                name={person.name}
                character={person.character}
              ></PersonTile>
            ))}
        </PeopleWrapper>
      </section>
      <section>
        <h2>Movies Crew ({castAndCrew.crew && castAndCrew.crew.length}): </h2>
        <PeopleWrapper>
          {castAndCrew.crew &&
            castAndCrew.crew.map((person) => (
              <PersonTile
                key={"crew_" + person.id}
                id={person.id}
                profile_path={person.profile_path}
                name={person.name}
                character={person.character}
              ></PersonTile>
            ))}
        </PeopleWrapper>
      </section>
    </>
  );
};

export default MovieProfileContent;
