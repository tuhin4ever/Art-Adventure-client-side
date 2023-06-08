import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SingUp/SignUp";
import SignIn from "../Pages/SingIn/SignIn";
import { Classes } from "../Pages/Classes/Classes";
import Dashboard from "../LayOut/Dashboard";
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../Pages/DashBoard/MyClasses";

import AllUsers from "../Pages/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../Pages/DashBoard/Admin/ManageClasses";

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
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      // admin routes
      {
        path: "allUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default router;
