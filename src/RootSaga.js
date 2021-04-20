import { all, takeLatest } from "redux-saga/effects";
import {
  GET_APP_DETAIL,
  GET_APP_NAME,
  GET_VALUE,
} from "./Redux/Actions/ActionTypes";
import { handleGetAppDetail } from "./Redux/Sagas/sagaGetAppDetail";
import { handleGetAppName } from "./Redux/Sagas/sagaGetName";
import { handleGetValue } from "./Redux/Sagas/sagaGetValues";

export function* watcherSaga() {
  yield all([
    takeLatest(GET_APP_NAME, handleGetAppName),
    takeLatest(GET_APP_DETAIL, handleGetAppDetail),
    takeLatest(GET_VALUE, handleGetValue),
  ]);
}
