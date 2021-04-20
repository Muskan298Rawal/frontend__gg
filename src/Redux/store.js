import { applyMiddleware, createStore } from "redux";
import allreducers from "./Reducer/combineReducer";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../RootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allreducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export default store;
