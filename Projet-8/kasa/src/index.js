//React
import React from "react";
import ReactDOM from "react-dom/client";

//CSS
import "./styles/index.css";

//Router
import Router from "./components/Router/Router.jsx";

//React Root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
