import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGenres,
  fetchPopularMovies,
  selectGenres,
  selectLoadingPopularMovies,
  selectPopularMovies,
} from "../reducers/MovieSlice";
import { useSearchParams } from "react-router-dom";
import MovieContent from "../components/ListOfPopularMovie/MovieContent";
import Loading from "../components/Loading/Loading";
import Pagination from "../components/Pagination/Pagination";
import { MainWrapper } from "../components/Wrappers/Wrappers";
import ErrorPage from "./ErrorPage";

const PopularMoviePage = () => {
  const dispatch = useDispatch();
  const popular = useSelector(selectPopularMovies);
  const maxPage = 500;
  const genres = useSelector(selectGenres);
  const loading = useSelector(selectLoadingPopularMovies);
  const [params] = useSearchParams();
  const page = parseInt(params.get("page"))
    ? parseInt(params.get("page"))
    : parseInt(1);

  useEffect(() => {
    dispatch(fetchPopularMovies(page));
    dispatch(fetchGenres());
  }, [page, dispatch]);

  let render = "";

  switch (loading) {
    case "loading":
      render = <Loading />;
      break;
    case "success":
      render = (
        <MainWrapper>
          <h1>Popular movies:</h1>
          <MovieContent movies={popular.results} genres={genres}></MovieContent>
          <Pagination maxPage={maxPage} page={page} type={"movies"} />
        </MainWrapper>
      );
      break;
    default:
      render = <ErrorPage />;
  }

  return render;
};

export default PopularMoviePage;
