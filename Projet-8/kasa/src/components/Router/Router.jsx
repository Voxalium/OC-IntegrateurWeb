import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

//Pages
import Home from "../../pages/Home";
import Apropos from "../../pages/Apropos";
import Error from "../../pages/Error";
import Logements from "../../pages/Logements";

//Component
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

//Data
import data from "../../datas/logements.json";

//Routing
function Router() {
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
    return <RouterProvider router={router} />;
}
//Routing Template
function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Router;
