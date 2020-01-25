import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "./_helpers";
import { App } from "./App";

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
