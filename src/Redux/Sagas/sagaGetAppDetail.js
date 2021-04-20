import axios from "axios";
import { call, put } from "redux-saga/effects";
import { fetchSuccessDetail, getValue } from "../Actions/ActionCreator";

function requestGetAppDetail(id) {
  return axios.get(`https://api.npoint.io/d734975d2aee62d197ef/${id}`);
}

export function* handleGetAppDetail(action) {
  try {
    const response = yield call(requestGetAppDetail, action.index);
    const detail = response.data;
    yield put(fetchSuccessDetail(detail));
  } catch (error) {
    console.log(error);
  }
}
