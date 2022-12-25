import { all } from "redux-saga/effects";
import { moviesSaga } from "../services/MoviesSaga";
import { popularPeopleSaga } from "../services/PeopleSaga";

function* rootSaga() {
  yield all([moviesSaga(), popularPeopleSaga()]);
}

export default rootSaga;
