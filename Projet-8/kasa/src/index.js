import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//CSS
import "./styles/index.css";

//Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Apropos from "./pages/Apropos";

//Component
import Header from "./components/Header.jsx";
import Footer from "./components/Footer";
//Image
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<Home />} />
                <Route path="/Apropos" element={<Apropos />} />
            </Routes>
            <Footer />
        </Router>
    </React.StrictMode>
);
