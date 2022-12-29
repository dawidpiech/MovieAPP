import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import {
  fetchPopularPeople,
  setPopularPeople,
  fetchErrorPopularPeople,
  fetchPersonDetails,
  setPersonDetails,
  fetchErrorPersonDetails,
  fetchPersonCastCrew,
  setPersonCastCrew,
  fetchErrorPersonCastCrew,
} from "../reducers/PeopleSlice";

const APIKey = process.env.REACT_APP_API_KEY;
const APIUrl = process.env.REACT_APP_API_URL;

function* fetchPopularPeopleHandler(page) {
  try {
    const popularPeople = yield axios.get(
      `${APIUrl}person/popular?api_key=${APIKey}&language=en-US&page=${page.payload}`
    );
    yield put(setPopularPeople(popularPeople.data));
  } catch (error) {
    yield put(fetchErrorPopularPeople("error"));
  }
}

function* fetchPersonDetailsHandler(personID) {
  try {
    const personDetails = yield axios.get(
      `${APIUrl}person/${personID.payload}?language=en-US&api_key=${APIKey}`
    );
    yield put(setPersonDetails(personDetails.data));
  } catch (error) {
    yield put(fetchErrorPersonDetails("error"));
  }
}

function* fetchPersonCastCrewHandler({ payload: id }) {
  try {
    const personCastCrew = yield axios.get(
      `${APIUrl}person/${id}/movie_credits?api_key=${APIKey}`
    );

    const uniq = {
      id: personCastCrew.data.id,
      cast: personCastCrew.data.cast.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      ),
      crew: personCastCrew.data.crew.filter(
        (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
      ),
    };
    yield put(setPersonCastCrew(uniq));
  } catch (error) {
    yield put(fetchErrorPersonCastCrew("error"));
  }
}

export function* popularPeopleSaga() {
  yield takeEvery(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeEvery(fetchPersonDetails.type, fetchPersonDetailsHandler);
  yield takeEvery(fetchPersonCastCrew.type, fetchPersonCastCrewHandler);
}
