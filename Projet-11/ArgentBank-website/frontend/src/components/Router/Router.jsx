import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//pages
import Home from "../../pages/Home/Home.jsx";
import Signin from "../../pages/Signin/Signin.jsx";
import Logged from "../../pages/Logged/Logged.jsx";
import Error from "../../pages/Error/Error.jsx";

//component
import Nav from "../Nav/Nav.jsx";
import Footer from "../Footer/Footer.jsx";

//Routing
function Router() {
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
                    path: "logged",
                    element: <Logged />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
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
