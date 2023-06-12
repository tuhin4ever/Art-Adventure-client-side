import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaWallet,
  FaHome,
  FaUsers,
  FaUserShield,
  FaUserCheck,
  FaUserTie,
  FaEdit,
} from "react-icons/fa";
import {
  HiOutlineMenu,
  HiOutlineMenuAlt2,
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
          className="btn btn-sm drawer-button lg:hidden ml-72  mt-20 mb-4 "
        >
          Open
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side  top-0 left-0 h-screen w-80  text-base-content">
        <div className="m-2 z-10">
          <Link to="/" className="inline-flex items-center">
            <img src="../../../public/Color-feathers.svg" className="w-20" />
            <div>
              <span className="text-3xl font-bold tracking-wide text-indigo-700 Caveat-text">
                Arts Adventure
              </span>
              <p className="text-center dark:white text-sm Kalam-text">
                adventures in creativity
              </p>
            </div>
          </Link>
        </div>

        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu mt-12 w-80 text-base-content h-screen">
          {isAdmin && (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome />
                  Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageClasses">
                  <HiOutlineMenu />
                  Manage Classes
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allUsers">
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
                <NavLink to="/dashboard/addItem">
                  <FaEdit /> Add Class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClasses">
                  <HiOutlineMenu />
                  My Classes
                </NavLink>
              </li>
            </>
          )}

          {isStudent && (
            <>
              <li>
                <NavLink to="/dashboard/home">
                  <FaHome />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/selectedClasses">
                  <FaUserCheck />
                  Selected Classes
                  {selectCourse?.length > 0 && (
                    <span className="badge items-center Kalam-text  text-white border-transparent bg-error-content">
                      +{selectCourse.length}
                    </span>
                  )}
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/enrolledClasses">
                  <FaUserShield />
                  Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet />
                  Payment History
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
            <NavLink to="/instructors">
              <FaUserTie />
              Instructor
            </NavLink>
          </li>
          <li>
            <NavLink to="/classes">
              <HiOutlineMenuAlt2 />
              Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
