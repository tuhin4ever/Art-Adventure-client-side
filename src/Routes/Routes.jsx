import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SingUp/SingUp";
import SignIn from "../Pages/SingIn/SingIn";

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
        path: "SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "SignIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
