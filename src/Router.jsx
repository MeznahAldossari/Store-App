import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home'
import DisheInfo from "./components/DisheInfo";
import Cart from "./pages/Cart";
import Order from "./pages/Checkout";


function Router() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/DisheInfo/:id",
          element: <DisheInfo />,
        },
        {
            path: "/Cart",
            element: <Cart />,
        },
        {
            path: "/Order",
            element: <Order />,
        },
      ]);
    return(
        
        <RouterProvider router={router} />
    );
}
export default Router