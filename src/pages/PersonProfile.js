import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPersonDetails,
  selectPersonDetails,
  selectLoadingPersonDetails,
  fetchPersonCastCrew,
  selectPersonCastCrew,
} from "../reducers/PeopleSlice";
import { selectGenres, fetchGenres } from "../reducers/MovieSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import PersonProfileContent from "../components/PersonProfile/PersonProfileContent";
import ErrorPage from "../pages/ErrorPage";
import { MainWrapper } from "../components/Wrappers/Wrappers";

const PersonProfilePage = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectPersonDetails);
  let castAndCrew = useSelector(selectPersonCastCrew);
  const loading = useSelector(selectLoadingPersonDetails);
  const genres = useSelector(selectGenres);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPersonDetails(id));
    dispatch(fetchPersonCastCrew(id));
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
          <PersonProfileContent
            name={details.name}
            dateOfBirth={details.birthday}
            placeOfBirth={details.place_of_birth}
            profilePath={details.profile_path}
            biography={details.biography}
            castAndCrew={castAndCrew}
            genres={genres}
          ></PersonProfileContent>
        </MainWrapper>
      );
      break;
    default:
      render = <ErrorPage />;
  }

  return render;
};

export default PersonProfilePage;
