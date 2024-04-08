import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

function reducer(numberState = 1, action) {
  if (action.type === "증가") {
    return ++numberState;
  } else if (action.type === "감소") {
    return --numberState;
  } else {
    return numberState;
  }
}
let store = configureStore({ reducer: reducer });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
