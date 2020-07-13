import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducer from "./budget/budgetReducer";

const store = createStore(reducer, applyMiddleware(logger));

export default store;
