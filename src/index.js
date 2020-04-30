import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import registerServiceWorker from "./registerServiceWorker";


const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
