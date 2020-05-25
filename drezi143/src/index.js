import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { AppContainer } from "./App";
import * as serviceWorker from "./serviceWorker";
//import { store } from "./store";
import { Provider } from "react-redux";
import { reducers } from "./reducers";
import { createStore } from "redux";
import "bootstrap/dist/css/bootstrap.css";

const store = createStore(reducers, {});
ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById("root")
);
//serviceWorker();

serviceWorker.register();
