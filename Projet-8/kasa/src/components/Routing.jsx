import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Error from "../pages/Error";
import Apropos from "../pages/Apropos";
import Header from "./Header";
import Footer from "./Footer";
import Logements from "../pages/Logements";
function Routing() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<Home />} />
                <Route path="/apropos" element={<Apropos />} />
                <Route path="/logements" element={<Logements />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default Routing;
