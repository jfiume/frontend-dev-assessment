import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
// comment out when not debugging
import logger from "redux-logger";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import RootReducer from './reducers/root_reducer';

const store = createStore(RootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
