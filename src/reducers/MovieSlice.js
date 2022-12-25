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
  },
});

export const selectPopularMoviesState = (state) => state.popularMovies;
export const selectGenresState = (state) => state.genres;

export const selectPopularMovies = (state) =>
  selectPopularMoviesState(state).popularMovies;
export const selectGenres = (state) => selectGenresState(state).genres;
export const selectLoadingPopularMovies = (state) =>
  selectPopularMoviesState(state).loading;

export const {
  setPopularMovies,
  fetchPopularMovies,
  fetchErrorPopularMovies,
  setGenres,
  fetchGenres,
} = moviesSlice.actions;

export default moviesSlice.reducer;
