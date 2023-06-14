import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SingUp/SignUp";
import SignIn from "../Pages/SingIn/SignIn";
import { Classes } from "../Pages/Classes/Classes";
import Dashboard from "../LayOut/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import ManageClasses from "../Pages/DashBoard/Admin/ManageClasses";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Instructors from "../Pages/Instructors/Instructors";
import AddClass from "../Pages/DashBoard/Instructor/AddClass";
import SelectedClasses from "../Pages/DashBoard/Student/SelectedClasses";
import EnrolledClasses from "../Pages/DashBoard/Student/EnrolledClasses";
import PaymentHistory from "../Pages/DashBoard/Student/PaymentHistory";
import MyClasses from "../Pages/DashBoard/Instructor/MyClasses";
import DashHome from "../Pages/DashBoard/DashHome/DashHome";
import InstructorRoute from "./InstructorRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "instructors",
        element: <Instructors></Instructors>,
        loader: () =>
          fetch("https://arts-adventure-server.vercel.app/instructors"),
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
        path: "home",
        element: <DashHome></DashHome>,
      },
      {
        path: "selectedClasses",
        element: <SelectedClasses />,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "enrolledClasses",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
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
      // instructor routes
      {
        path: "addItem",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;
