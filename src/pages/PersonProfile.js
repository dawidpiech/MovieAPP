import { useEffect } from "react";
import styled from "styled-components";
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
import PersonProfileContent from "../components/People/PersonProfileContent";

const PersonProfile = styled.main`
  max-width: 1368px;
  margin: 0px auto;
  padding: 0px 10px 20px;
`;

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
        <PersonProfile>
          <PersonProfileContent
            name={details.name}
            dateOfBirth={details.birthday}
            placeOfBirth={details.place_of_birth}
            profilePath={details.profile_path}
            biography={details.biography}
            castAndCrew={castAndCrew}
            genres={genres}
          ></PersonProfileContent>
        </PersonProfile>
      );
      break;
    default:
      render = <h1>ERROR!!!!</h1>;
  }

  return render;
};

export default PersonProfilePage;
