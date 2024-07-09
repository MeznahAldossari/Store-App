import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home'
import DisheInfo from "./components/DisheInfo";


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
      ]);
    return(
        
        <RouterProvider router={router} />
    );
}
export default Router