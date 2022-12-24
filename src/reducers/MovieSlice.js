import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    people: [],
    popularMovies: [],
    genres: [],
    loading: "",
  },
  reducers: {
    fetchMovies: (state) => {
      state.loading = "loading";
    },
    setMovies: (state, { payload: movies }) => {
      state.movies = movies;
      state.loading = "success";
    },
    fetchErrorMovies: (state) => {
      state.loading = "error";
    },
    fetchPeople: () => {},
    setPeople: (state, { payload: people }) => {
      state.people = people;
    },
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
    fetchGenres: () => {},
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectPeopleState = (state) => state.people;
export const selectPopularMoviesState = (state) => state.popularMovies;
export const selectGenresState = (state) => state.genres;

export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectPeople = (state) => selectPeopleState(state).people;
export const selectPopularMovies = (state) =>
  selectPopularMoviesState(state).popularMovies;
export const selectPopularMoviesTotalPages = (state) =>
  selectPopularMovies(state).total_pages;
export const selectGenres = (state) => selectGenresState(state).genres;
export const selectLoadingPopularMovies = (state) =>
  selectPopularMoviesState(state).loading;
export const selectLoadingMovie = (state) => selectMoviesState(state).loading;

export const {
  setMovies,
  fetchMovies,
  fetchErrorMovies,
  setPeople,
  fetchPeople,
  setPopularMovies,
  fetchPopularMovies,
  fetchErrorPopularMovies,
  setGenres,
  fetchGenres,
} = moviesSlice.actions;

export default moviesSlice.reducer;
