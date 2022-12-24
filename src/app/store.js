import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import moviesReducer from "../reducers/MovieSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: moviesReducer,
    popularMovies: moviesReducer,
    genres: moviesReducer,
  },

  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
