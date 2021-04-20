import { FETCH_SUCCESS_NAME } from "../Actions/ActionTypes";

const dataReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SUCCESS_NAME: {
      return [...action.payload];
    }
    default:
      return state;
  }
};

export default dataReducer;
