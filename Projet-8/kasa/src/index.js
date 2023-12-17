import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//CSS
import "./styles/index.css";

//Pages
import Home from "./pages/Home";
import Apropos from "./pages/Apropos";
import Error from "./pages/Error";
import Logements from "./pages/Logements";

//Component
import Header from "./components/Header";
import Footer from "./components/Footer";

//Data
import data from "./datas/logements.json";

//Routing
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: (
            <>
                <Header /> <Error /> <Footer />
            </>
        ),
        children: [
            {
                index: true,
                element: <Home />,
                loader: () => data,
            },
            {
                path: "apropos",
                element: <Apropos />,
            },
            {
                path: "logements/:id",
                element: <Logements />,
                loader: ({ params }) => {
                    const logementId = params.id;
                    const logementData = data.find(
                        (logement) => logement.id === logementId
                    );
                    return logementData;
                },
            },
        ],
    },
]);

function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
