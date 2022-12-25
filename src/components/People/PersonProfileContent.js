import styled from "styled-components";
import {
  PersonDetailsWrapper,
  Image,
  PersonProfileImageWrapper,
  Name,
  DateOfBirth,
  PlaceOfBirth,
  Biography,
  PersonCastWrapper,
  CastTitle,
  CastList,
  PersonMoviesCrewWrapper,
  CrewTitle,
  CrewList,
} from "./PersonProfileComponents";
import MovieTile from "../../components/Movie/MovieTile";

const PersonProfileDetailsWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  box-shadow: ${({ theme }) => theme.colors.gray} 0px 4px 12px;
  margin-top: 50px;
  padding: 30px;
  width: 100%;
  border-radius: 10px;

  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    flex-flow: column;
  }
`;

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
                : "noMoviePhoto"
            }
          ></Image>
        </PersonProfileImageWrapper>
        <PersonDetailsWrapper>
          <Name>{name}</Name>
          <DateOfBirth>
            <span>Date of Birth: </span> {dateOfBirth}
          </DateOfBirth>
          <PlaceOfBirth>
            <span>Place of birth: </span> {placeOfBirth}
          </PlaceOfBirth>
          <Biography>{biography}</Biography>
        </PersonDetailsWrapper>
      </PersonProfileDetailsWrapper>
      <PersonCastWrapper>
        <CastTitle>
          Movies Cast ({castAndCrew.cast && castAndCrew.cast.length}):{" "}
        </CastTitle>
        <CastList>
          {castAndCrew.cast &&
            castAndCrew.cast.map((movie) => (
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
        </CastList>
      </PersonCastWrapper>
      <PersonMoviesCrewWrapper>
        <CrewTitle>
          Movies Crew ({castAndCrew.crew && castAndCrew.crew.length}):{" "}
        </CrewTitle>
        <CrewList>
          {castAndCrew.crew &&
            castAndCrew.crew.map((movie) => (
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
        </CrewList>
      </PersonMoviesCrewWrapper>
    </>
  );
};

export default PersonProfileContent;
