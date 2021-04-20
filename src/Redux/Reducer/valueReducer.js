import { FETCH_SUCCESS_VALUE } from "../Actions/ActionTypes";

const valueReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUCCESS_VALUE: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default valueReducer;
