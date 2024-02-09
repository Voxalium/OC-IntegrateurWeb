import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    useNavigate,
} from "react-router-dom";

//pages
import Home from "../../pages/Home/Home.jsx";
import Signin from "../../pages/Signin/Signin.jsx";
import Logged from "../../pages/Logged/Logged.jsx";
import Error from "../../pages/Error/Error.jsx";

//component
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";

//Routing
function Router() {
    const isConnected = useSelector((state) => state.loginReducer.isConnected);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root />,
            errorElement: (
                <>
                    <Nav />
                    <Error />
                    <Footer />
                </>
            ),
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "signin",
                    element: <Signin />,
                },
                {
                    path: "profile",
                    element: isConnected ? <Logged /> : <Unauthorized />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

//Prevent navigation to Logged if we're not connected
function Unauthorized() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/signin");
    }, [navigate]);
    return null;
}

//Template
function Root() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Router;
