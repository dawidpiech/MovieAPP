import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGenres,
  fetchPopularMovies,
  selectGenres,
  selectLoadingPopularMovies,
  selectPopularMovies,
} from "../reducers/MovieSlice";
import { useSearchParams } from "react-router-dom";
import MovieContent from "../components/Movie/MovieContent";
import Loading from "../components/Loading/Loading";
import Pagination from "../components/Movie/Pagination";

const PopularMovie = styled.main`
  max-width: 1368px;
  margin: 0px auto;
  padding: 0px 10px 20px;
`;

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
        <PopularMovie>
          <h1>Popular movies:</h1>
          <MovieContent movies={popular.results} genres={genres}></MovieContent>
          <Pagination maxPage={maxPage} page={page} type={"movies"} />
        </PopularMovie>
      );
      break;
    default:
      render = <h1>ERROR!!!!</h1>;
  }

  return render;
};

export default PopularMoviePage;
