import { FETCH_SUCCESS_DETAIL } from "../Actions/ActionTypes";

const detailReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS_DETAIL: {
      return [...action.payload];
    }
    default:
      return state;
  }
};

export default detailReducer;
