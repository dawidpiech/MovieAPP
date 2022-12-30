import { all } from "redux-saga/effects";
import { moviesSaga } from "../services/MoviesSaga";
import { popularPeopleSaga } from "../services/PeopleSaga";
import { searchSaga } from "../services/SearchSaga";

function* rootSaga() {
  yield all([moviesSaga(), popularPeopleSaga(), searchSaga()]);
}

export default rootSaga;
