import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import App from "./components/App";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import promise from "redux-promise";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import "./index.css";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(promise, thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
