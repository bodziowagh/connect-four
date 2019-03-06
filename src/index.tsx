import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./styles/main.scss";

import { App } from "./script/App";
import { store } from "./redux/store";

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById("app")
);
