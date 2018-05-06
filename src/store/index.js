import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import Auth from "./reducer/auth";

const reducer = combineReducers({
  auth: Auth
})

const middleware = applyMiddleware(logger, thunk);
const store = createStore(reducer, middleware);
