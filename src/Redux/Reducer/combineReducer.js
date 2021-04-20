import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import detailReducer from "./detailReducer";
import valueReducer from "./valueReducer";

const allreducers = combineReducers({
  apps: dataReducer,
  detail: detailReducer,
  value: valueReducer,
});

export default allreducers;
