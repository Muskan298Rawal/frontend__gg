import {
  FETCH_SUCCESS_NAME,
  GET_APP_DETAIL,
  FETCH_SUCCESS_VALUE,
  GET_APP_NAME,
  FETCH_SUCCESS_DETAIL,
  GET_VALUE,
} from "./ActionTypes";

export const getAppName = () => {
  return {
    type: GET_APP_NAME,
  };
};

export const fetchSuccessName = (data) => {
  return {
    type: FETCH_SUCCESS_NAME,
    payload: data,
  };
};

export const getAppDetail = (id) => {
  return {
    type: GET_APP_DETAIL,
    index: id,
  };
};

export const fetchSuccessDetail = (data) => {
  return {
    type: FETCH_SUCCESS_DETAIL,
    payload: data,
  };
};

export const getValue = () => {
  return {
    type: GET_VALUE,
  };
};

export const fetchSuccessValue = (data) => {
  return {
    type: FETCH_SUCCESS_VALUE,
    payload: data,
  };
};
