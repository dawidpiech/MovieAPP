import {
  PersonDetailsWrapper,
  Image,
  PersonProfileImageWrapper,
  DateOfBirth,
  PlaceOfBirth,
  Biography,
  PersonProfileDetailsWrapper,
} from "./PersonProfileComponents";
import MovieTile from "../ListOfPopularMovie/MovieTile";
import { PeopleWrapper } from "../Wrappers/Wrappers";
import NoPersonPhoto from "../ListOfPopularPeople/noPersonPhoto.png";

const PersonProfileContent = ({
  name,
  dateOfBirth,
  placeOfBirth,
  profilePath,
  biography,
  castAndCrew,
  genres,
}) => {
  return (
    <>
      <PersonProfileDetailsWrapper>
        <PersonProfileImageWrapper>
          <Image
            src={
              profilePath
                ? `${process.env.REACT_APP_API_PHOTO_URL}w500${profilePath}`
                : NoPersonPhoto
            }
          ></Image>
        </PersonProfileImageWrapper>
        <PersonDetailsWrapper>
          <h1>{name}</h1>
          <DateOfBirth>
            <span>Date of Birth: </span> {dateOfBirth}
          </DateOfBirth>
          <PlaceOfBirth>
            <span>Place of birth: </span> {placeOfBirth}
          </PlaceOfBirth>
          <Biography>{biography}</Biography>
        </PersonDetailsWrapper>
      </PersonProfileDetailsWrapper>
      <section>
        <h2>Movies Cast ({castAndCrew.cast && castAndCrew.cast.length}): </h2>
        <PeopleWrapper>
          {castAndCrew.cast &&
            castAndCrew.cast.map((movie) => (
              <MovieTile
                key={"cast_" + movie.id}
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
        </PeopleWrapper>
      </section>
      <section>
        <h2>Movies Crew ({castAndCrew.crew && castAndCrew.crew.length}): </h2>
        <PeopleWrapper>
          {castAndCrew.crew &&
            castAndCrew.crew.map((movie) => (
              <MovieTile
                key={"crew_" + movie.id}
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
        </PeopleWrapper>
      </section>
    </>
  );
};

export default PersonProfileContent;
