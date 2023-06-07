import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "singUp",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);

export default router;
