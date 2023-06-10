import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingCart,
  FaWallet,
  FaCalendarAlt,
  FaHome,
  FaUtensils,
  FaUsers,
  FaBook,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineMenu,
  HiOutlineMenuAlt2,
  HiShoppingBag,
} from "react-icons/hi";
import useSelected from "../hooks/useSelected";
import useAdmin from "../hooks/useAdmin";
import useStudent from "../hooks/useStudent";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [selectCourse] = useSelected();

  // TODO: load data from the server to have dynamic isAdmin based on data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  const [isStudent] = useStudent();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-sm drawer-button lg:hidden ml-72  mt-20 mb-4"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side  top-0 left-0 h-screen w-80  text-base-content">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80  text-base-content h-screen">
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additem">
                  <FaUtensils /> Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageClasses">
                  <HiOutlineMenu />
                  Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/managebooking">
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers />
                  All User
                </NavLink>
              </li>
            </>
          )}

          {isInstructor && (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome />
                  Instructor Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additem">
                  <FaUtensils /> Add Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitems">
                  <HiOutlineMenu />
                  Manage Item
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/managebooking">
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allusers">
                  <FaUsers />
                  All User
                </NavLink>
              </li>
            </>
          )}

          {isStudent && (
            <>
              <li>
                <NavLink to="/dashboard/history">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendarAlt />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history">
                  <FaWallet />
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClasses">
                  <FaShoppingCart />
                  My Cart
                  {selectCourse?.length > 0 && (
                    <span className="badge">+{selectCourse.length}</span>
                  )}
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <HiOutlineMenuAlt2 />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/Salad">
              <HiShoppingBag />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/Salad">
              <HiOutlineMail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
