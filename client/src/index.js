import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import logger from "redux-logger";
import combineReducers from "./reducers/index";
import dotenv from "dotenv";

dotenv.config();

const store = createStore(combineReducers, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
