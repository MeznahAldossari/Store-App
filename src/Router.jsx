import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home'
import DisheInfo from "./components/DisheInfo";
import Cart from "./pages/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Checkout from "./pages/Checkout";
import PreviousOrders from './components/PreviousOrders'
import ErrorPage from "./pages/ErrorPage";


function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
          errorElement:<ErrorPage/>
        },
        {
          path: "/DisheInfo/:id",
          element: <DisheInfo />,
        },
        {
          path: "/SignUp",
          element: <SignUp />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
            path: "/Cart",
            element: <Cart />,
        },
        {
            path: "/Order",
            element: <Checkout />,

        },
        {
            path: "/PreviousOrders",
            element: <PreviousOrders />,

        }
      ]);
    return(
        
        <RouterProvider router={router} />
    );
}
export default Router