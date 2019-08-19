import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import store from "./redux/store";
import { saveState } from "./localStorage";

const mainStore = createStore(store);

mainStore.subscribe(() => {
  saveState(mainStore.getState());
});

ReactDOM.render(
  <Provider store={mainStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
