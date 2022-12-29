import { MainWrapper } from "../components/Wrappers/Wrappers";
import MovieProfileContent from "../components/MovieProfile/MovieProfileContent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  selectMovieDetails,
  selectCastAndCrew,
  selectLoadingMovieDetails,
} from "../reducers/MovieSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import ErrorPage from "../pages/ErrorPage";
import {
  MovieBackdrop,
  BackdropImage,
  Rate,
  Rating,
  Votes,
} from "../components/MovieProfile/MovieProfileComponents";
import { ReactComponent as Star } from "../components/ListOfPopularMovie/star.svg";

const MovieProfile = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectMovieDetails);
  const castAndCrew = useSelector(selectCastAndCrew);
  const loading = useSelector(selectLoadingMovieDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [id, dispatch]);

  let render = "";

  switch (loading) {
    case "loading":
      render = <Loading />;
      break;
    case "success":
      render = (
        <>
          {details.backdrop_path && (
            <MovieBackdrop>
              <BackdropImage
                src={`${process.env.REACT_APP_API_PHOTO_URL}original${details.backdrop_path}`}
              ></BackdropImage>
              <div>
                <h1>{details.title}</h1>
                <Rating>
                  <Star></Star>
                  <Rate>{details.vote_average + "/10"}</Rate>
                  <Votes>{details.vote_count + " votes"}</Votes>
                </Rating>
              </div>
            </MovieBackdrop>
          )}
          <MainWrapper>
            <MovieProfileContent
              key={details.id}
              id={details.id}
              poster={details.poster_path}
              title={details.title}
              release={details.release_date}
              movieGenre={details.genres}
              rate={details.vote_average}
              votes={details.vote_count}
              production={details.production_countries}
              overview={details.overview}
              castAndCrew={castAndCrew}
            ></MovieProfileContent>
          </MainWrapper>
        </>
      );
      break;
    default:
      render = <ErrorPage />;
      break;
  }

  return render;
};

export default MovieProfile;
