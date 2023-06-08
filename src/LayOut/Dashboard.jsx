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

// import useCart from "../hooks/useCart";
// import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
//   const [cart] = useCart();

  // TODO: load data from the server to have dynamic isAdmin based on data
  const isAdmin = false;
//   const [isAdmin] = useAdmin();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* <!-- Page content here --> */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-sm drawer-button lg:hidden mt-20 mb-4"
        >
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content h-screen">
          {isAdmin ? (
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
          ) : (
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
                  {/* <span className="badge">+{cart?.length || 0}</span> */}
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
