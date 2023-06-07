import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SingUp/SignUp";
import SignIn from "../Pages/SingIn/SignIn";
import { Classes } from "../Pages/Classes/Classes";

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
      {
        path: "classes",
        element: <Classes></Classes>,
      }
    ],
  },
]);

export default router;
