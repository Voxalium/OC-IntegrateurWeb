import React from "react";
import ReactDOM from "react-dom/client";
//CSS
import "./styles/index.css";

//Pages

//Component
import Routing from "./components/Routing.jsx";
//Image
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Routing />
    </React.StrictMode>
);
