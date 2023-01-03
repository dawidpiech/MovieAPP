import { MainWrapper } from "../components/Wrappers/Wrappers";
import { useSearchParams } from "react-router-dom";
import {
  selectLoadingSearch,
  selectSearchResults,
  fetchSearch,
} from "../reducers/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../components/Loading/Loading";
import MovieContent from "../components/ListOfPopularMovie/MovieContent";
import Pagination from "../components/Pagination/Pagination";
import { selectGenres, fetchGenres } from "../reducers/MovieSlice";
import ErrorPage from "./ErrorPage";
import NoResultsPage from "./NoResultsPage";
import PopularPeopleContent from "../components/ListOfPopularPeople/PopularPeopleContent";

const SearchPage = () => {
  const [params] = useSearchParams();
  const type = params.get("type");
  const page = parseInt(params.get("page"));
  const query = params.get("query");
  const loading = useSelector(selectLoadingSearch);
  const results = useSelector(selectSearchResults);
  const genres = useSelector(selectGenres);
  const dispatch = useDispatch();
  let render = "";
  useEffect(() => {
    const searchParams = {
      type: type,
      page: page,
      query: query,
    };

    if (query !== "") {
      dispatch(fetchSearch(searchParams));
      dispatch(fetchGenres());
    }
  }, [query, page, type, dispatch]);

  switch (loading) {
    case "success":
      results.total_results === 0
        ? (render = <NoResultsPage query={query} />)
        : type === "movie"
        ? (render = (
            <MainWrapper>
              <h1>
                Search results for "{query}" ({results.total_results}):
              </h1>
              <MovieContent
                movies={results.results}
                genres={genres}
              ></MovieContent>
              <Pagination
                maxPage={results.total_pages}
                page={page}
                type={"search"}
                typeOfSearch={type}
                query={query}
              />
            </MainWrapper>
          ))
        : (render = (
            <MainWrapper>
              <h1>
                Search results for "{query}" ({results.total_results}):
              </h1>
              <PopularPeopleContent
                people={results.results}
              ></PopularPeopleContent>
              <Pagination
                maxPage={results.total_pages}
                page={page}
                type={"search"}
                typeOfSearch={type}
                query={query}
              />
            </MainWrapper>
          ));
      break;
    case "error":
      render = <ErrorPage />;
      break;
    case "loading":
      render = <Loading />;
      break;
    default:
      render = <ErrorPage />;
  }

  return render;
};

export default SearchPage;
