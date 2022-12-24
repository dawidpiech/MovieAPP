import { all } from "redux-saga/effects";
import { moviesSaga } from "../services/MoviesSaga";

function* rootSaga() {
  yield all([moviesSaga()]);
}

export default rootSaga;
