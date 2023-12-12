import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import Apropos from "../pages/Apropos";
import Header from "./Header";
import Footer from "./Footer";

function Routing() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Routing;
