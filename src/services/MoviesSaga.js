import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import {
  setPopularMovies,
  fetchPopularMovies,
  fetchGenres,
  setGenres,
  fetchErrorPopularMovies,
  fetchErrorGenres,
  setMovieDetails,
  fetchErrorMovieDetails,
  fetchMovieCastAndCrew,
  fetchMovieDetails,
  setMovieCastAndCrew,
} from "../reducers/MovieSlice";

const APIKey = process.env.REACT_APP_API_KEY;
const APIUrl = process.env.REACT_APP_API_URL;

function* fetchPopularMoviesHandler(page) {
  try {
    const popularMovies = yield axios.get(
      `${APIUrl}movie/popular?api_key=${APIKey}&language=en-US&page=${page.payload}`
    );
    yield put(setPopularMovies(popularMovies.data));
  } catch (error) {
    yield put(fetchErrorPopularMovies("error"));
  }
}

function* fetchGenresHandler() {
  try {
    const response = yield axios.get(
      `${APIUrl}genre/movie/list?api_key=${APIKey}&language=en-US`
    );
    yield put(setGenres(response.data.genres));
  } catch (error) {
    yield put(fetchErrorGenres("error"));
  }
}

function* fetchMovieDetailsHandler(id) {
  try {
    const movieDetails = yield axios.get(
      `${APIUrl}movie/${id.payload}?api_key=${APIKey}`
    );
    yield fetchMovieCastAndCrewHandler(id);
    yield put(setMovieDetails(movieDetails.data));
  } catch {
    yield put(fetchErrorMovieDetails("error"));
  }
}

function* fetchMovieCastAndCrewHandler(id) {
  try {
    const movieCastAndCrew = yield axios.get(
      `${APIUrl}movie/${id.payload}/credits?api_key=${APIKey}&language=en-US`
    );
    yield put(setMovieCastAndCrew(movieCastAndCrew.data));
  } catch {
    yield put(fetchMovieCastAndCrew("error"));
  }
}

export function* moviesSaga() {
  yield takeEvery(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeEvery(fetchGenres.type, fetchGenresHandler);
  yield takeEvery(fetchMovieDetails.type, fetchMovieDetailsHandler);
}
