import axios from "axios";
import { delay, put, takeEvery } from "redux-saga/effects";
import {
  setPopularMovies,
  fetchPopularMovies,
  fetchGenres,
  setGenres,
  fetchErrorPopularMovies,
} from "../reducers/MovieSlice";

const APIKey = process.env.REACT_APP_API_KEY;
const APIUrl = process.env.REACT_APP_API_URL;

function* fetchPopularMoviesHandler(page) {
  try {
    yield delay(1500);
    const popularMovies = yield axios.get(
      `${APIUrl}movie/popular?api_key=${APIKey}&language=en-US&page=${page.payload}`
    );
    yield put(setPopularMovies(popularMovies.data));
  } catch (error) {
    yield put(fetchErrorPopularMovies("error"));
    yield console.error(error);
  }
}

function* fetchGenresHandler() {
  try {
    const response = yield axios.get(
      `${APIUrl}genre/movie/list?api_key=${APIKey}&language=en-US`
    );
    yield put(setGenres(response.data.genres));
  } catch (error) {
    yield console.error(error);
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchGenres.type, fetchGenresHandler);
}
