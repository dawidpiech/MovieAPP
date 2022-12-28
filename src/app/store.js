import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import moviesReducer from "../reducers/MovieSlice";
import peopleReducer from "../reducers/PeopleSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    popularMovies: moviesReducer,
    popularPeople: peopleReducer,
    genres: moviesReducer,
    personDetails: peopleReducer,
    personCastCrew: peopleReducer,
    movieDetails: moviesReducer,
    movieCastAndCrew: moviesReducer,
  },

  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
