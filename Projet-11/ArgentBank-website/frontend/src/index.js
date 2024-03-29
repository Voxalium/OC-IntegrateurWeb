import React from "react";
import ReactDOM from "react-dom/client";

//REDUX
import { Provider } from "react-redux";
import store from "./redux/store.js";

import App from "./components/App/App.jsx";

import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
