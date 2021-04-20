import axios from "axios";
import { call, put } from "redux-saga/effects";
import { fetchSuccessName } from "../Actions/ActionCreator";

function requestGetAppName() {
  return axios.get(
    "https://run.mocky.io/v3/4b2fad49-282d-44ab-a4b5-11ba1e638847"
  );
}

export function* handleGetAppName() {
  try {
    const response = yield call(requestGetAppName);
    const names = response.data;
    yield put(fetchSuccessName(names));
  } catch (error) {
    console.log(error);
  }
}
