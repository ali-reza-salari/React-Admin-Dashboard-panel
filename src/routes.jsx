import {createBrowserRouter} from "react-router";
import AdminLayout from "./components/layout/AdminLayout.jsx";
import Overview from "./pages/Overview/page.jsx";
import Products from "./pages/Products/page.jsx";
import Orders from "./pages/Orders/page.jsx";
import Customers from "./pages/Customers/page.jsx";
import Analytics from "./pages/Analytics/page.jsx";
import {AiFillSetting} from "react-icons/ai";
import NotFound from "./pages/NotFound/page.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Overview />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "orders",
                element: <Orders />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
])

export default routes;