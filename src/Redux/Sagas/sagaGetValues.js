import axios from "axios";
import { call, put } from "redux-saga/effects";
import { fetchSuccessValue } from "../Actions/ActionCreator";

function requestGetValue() {
  return axios.get(
    "https://run.mocky.io/v3/ccdd16fa-17ed-43c3-a05b-74a528b49f07"
  );
}

export function* handleGetValue() {
  try {
    const response = yield call(requestGetValue);
    const values = response.data;
    yield put(fetchSuccessValue(values));
  } catch (error) {
    console.log(error);
  }
}
