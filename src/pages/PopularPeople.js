import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectPopularPeople,
  selectLoadingPopularPeople,
} from "../reducers/PeopleSlice";
import { useSearchParams } from "react-router-dom";
import PopularPeopleContent from "../components/ListOfPopularPeople/PopularPeopleContent";
import Loading from "../components/Loading/Loading";
import Pagination from "../components/Pagination/Pagination";
import { MainWrapper } from "../components/Wrappers/Wrappers";
import ErrorPage from "./ErrorPage";

const PopularPeoplePage = () => {
  const dispatch = useDispatch();
  const popular = useSelector(selectPopularPeople);
  const maxPage = 500;
  const loading = useSelector(selectLoadingPopularPeople);
  const [params] = useSearchParams();
  const page = parseInt(params.get("page")) ? parseInt(params.get("page")) : 1;

  useEffect(() => {
    dispatch(fetchPopularPeople(page));
  }, [page, dispatch]);

  let render = "";

  switch (loading) {
    case "loading":
      render = <Loading />;
      break;
    case "success":
      render = (
        <MainWrapper>
          <h1>Popular people:</h1>
          <PopularPeopleContent people={popular.results}></PopularPeopleContent>
          <Pagination maxPage={maxPage} page={page} type={"people"} />
        </MainWrapper>
      );
      break;
    default:
      render = <ErrorPage />;
  }

  return render;
};

export default PopularPeoplePage;
