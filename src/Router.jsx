import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home'
import DisheInfo from "./components/DisheInfo";
import Login from "./components/Login";
import SignUp from "./components/SignUp";


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
          path: "/Login",
          element: <Login/>,
        },
        {
          path: "/SignUp",
          element: <SignUp/>,
        },
      ]);
    return(
        
        <RouterProvider router={router} />
    );
}
export default Router