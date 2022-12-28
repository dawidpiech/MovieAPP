import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPeople,
  selectPopularPeople,
  selectLoadingPopularPeople,
} from "../reducers/PeopleSlice";
import { useSearchParams } from "react-router-dom";
import PopularPeopleContent from "../components/People/PopularPeopleContent";
import Loading from "../components/Loading/Loading";
import Pagination from "../components/Pagination/Pagination";

const PopularPeople = styled.div`
  max-width: 1368px;
  margin: 0px auto;
  padding: 0px 10px 20px;
`;

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
        <PopularPeople>
          <h1>Popular people:</h1>
          <PopularPeopleContent people={popular.results}></PopularPeopleContent>
          <Pagination maxPage={maxPage} page={page} type={"people"} />
        </PopularPeople>
      );
      break;
    default:
      render = <h1>ERROR!!!!</h1>;
  }

  return render;
};

export default PopularPeoplePage;
