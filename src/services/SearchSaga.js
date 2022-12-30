import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import {
  fetchErrorSearch,
  fetchSearch,
  setSearch,
} from "../reducers/SearchSlice";

const APIKey = process.env.REACT_APP_API_KEY;
const APIUrl = process.env.REACT_APP_API_URL;

function* fetchSearchHandler({ payload: dataSearch }) {
  try {
    const search = yield axios.get(
      `${APIUrl}search/${dataSearch.type}?api_key=${APIKey}&language=en-US&query=${dataSearch.query}&page=${dataSearch.page}`
    );
    yield put(setSearch(search.data));
  } catch (error) {
    yield put(fetchErrorSearch("error"));
  }
}

export function* searchSaga() {
  yield takeLatest(fetchSearch.type, fetchSearchHandler);
}
