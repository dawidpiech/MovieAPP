import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieDetails: [],
    movieCastAndCrew: [],
    popularMovies: [],
    genres: [],
    loading: "",
  },
  reducers: {
    fetchPopularMovies: (state) => {
      state.loading = "loading";
    },
    fetchErrorPopularMovies: (state) => {
      state.loading = "error";
    },
    setPopularMovies: (state, { payload: popularMovies }) => {
      state.popularMovies = popularMovies;
      state.loading = "success";
    },
    fetchGenres: (state) => {
      state.loading = "loading";
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
    fetchErrorGenres: (state) => {
      state.loading = "error";
    },
    fetchMovieDetails: (state) => {
      state.loading = "loading";
    },
    fetchErrorMovieDetails: (state) => {
      state.loading = "error";
    },
    fetchMovieCastAndCrew: (state) => {
      state.loading = "error";
    },
    setMovieDetails: (state, { payload: details }) => {
      state.movieDetails = details;
      state.loading = "success";
    },
    setMovieCastAndCrew: (state, { payload: movieCastAndCrew }) => {
      state.movieCastAndCrew = movieCastAndCrew;
      state.loading = "success";
    },
  },
});

const selectPopularMoviesState = (state) => state.popularMovies;
const selectGenresState = (state) => state.genres;
const selectMovieSetailsState = (state) => state.movieDetails;
const selectCastAndCrewState = (state) => state.movieCastAndCrew;

export const selectPopularMovies = (state) =>
  selectPopularMoviesState(state).popularMovies;
export const selectGenres = (state) => selectGenresState(state).genres;
export const selectLoadingPopularMovies = (state) =>
  selectPopularMoviesState(state).loading;

export const selectMovieDetails = (state) =>
  selectMovieSetailsState(state).movieDetails;
export const selectCastAndCrew = (state) =>
  selectCastAndCrewState(state).movieCastAndCrew;
export const selectLoadingMovieDetails = (state) =>
  selectPopularMoviesState(state).loading;

export const {
  setPopularMovies,
  fetchPopularMovies,
  fetchErrorPopularMovies,
  setGenres,
  fetchGenres,
  fetchErrorGenres,
  fetchMovieDetails,
  fetchErrorMovieDetails,
  setMovieDetails,
  fetchMovieCastAndCrew,
  fetchErrorMovieCastAndCrew,
  setMovieCastAndCrew,
} = moviesSlice.actions;

export default moviesSlice.reducer;
