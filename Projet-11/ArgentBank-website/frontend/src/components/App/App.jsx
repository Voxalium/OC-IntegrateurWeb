import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
//pages
import Home from "../../pages/Home/Home.jsx";
import Login from "../../pages/Login/Login.jsx";
import Profile from "../../pages/Profile/Profile.jsx";
import Error from "../../pages/Error/Error.jsx";
//component
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import { loginSuccess } from "../../redux/actions/login.actions.js";
//Routing
function App() {
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");
    if (token) dispatch(loginSuccess(token));
    const isConnected = useSelector((state) => state.loginReducer.isConnected);

    return (
        <div className="background">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route
                    path="profile"
                    element={
                        isConnected ? <Profile /> : <Navigate to="/login" />
                    }
                />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
