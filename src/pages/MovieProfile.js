import { MainWrapper } from "../components/Wrappers/Wrappers";
import MovieProfileContent from "../components/MovieProfile/MovieProfileContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  selectMovieDetails,
  selectCastAndCrew,
  selectLoadingMovieDetails,
  selectGenres,
  fetchGenres,
} from "../reducers/MovieSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import ErrorPage from "../pages/ErrorPage";

const MovieProfile = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectMovieDetails);
  const castAndCrew = useSelector(selectCastAndCrew);
  const loading = useSelector(selectLoadingMovieDetails);
  const genres = useSelector(selectGenres);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
    dispatch(fetchGenres());
  }, [id, dispatch]);

  let render = "";

  switch (loading) {
    case "loading":
      render = <Loading />;
      break;
    case "success":
      render = (
        <MainWrapper>
          <MovieProfileContent
            key={details.id}
            id={details.id}
            poster={details.poster_path}
            backdrop_path={details.backdrop_path}
            title={details.title}
            release={details.release_date}
            genres={genres}
            movieGenre={details.genre_ids}
            rate={details.vote_average}
            votes={details.vote_count}
            castAndCrew={castAndCrew}
          ></MovieProfileContent>
        </MainWrapper>
      );
      break;
    default:
      render = <ErrorPage />;
      break;
  }

  return render;
};

export default MovieProfile;
