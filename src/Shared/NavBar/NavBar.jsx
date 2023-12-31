import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useSelected from "../../hooks/useSelected";
import DarkMode from "./DarkMode/DarkMode";
import image from "../../assets/Color-feathers.svg";
const NavBar = () => {
  const [selectCourse] = useSelected();
  //   const user = false;
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        let timerInterval;
        Swal.fire({
          icon: "success",
          title: "User logged out successfully",
          html: " will Sign out in <b></b> milliseconds.",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-opacity-30 bg-black text-white">
      <div className="py-2 mx-auto md:px-24 lg:px-8  Kalam-text text-xl ">
        <div className="relative flex items-center justify-between ">
          {/* Logo Section */}
          <Link to="/" className="inline-flex items-center">
            <img src={image} className="w-20" />
            <div>
              <span className="text-3xl font-bold tracking-wide text-indigo-700 Caveat-text">
                Arts Adventure
              </span>
              <p className="text-center text-sm Kalam-text">
                adventures in creativity
              </p>
            </div>
          </Link>

          {/* Nav Items Section */}
          <ul className="items-center hidden space-x-8 lg:flex mx-auto uppercase">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/instructors"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Instructors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classes"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Classes
              </NavLink>
            </li>
            <li className="text-red-300 hover:text-accent-focus">
              <DarkMode></DarkMode>
            </li>
          </ul>
          <ul className="items-center hidden space-x-8 lg:flex mr-10">
            {!user ? (
              <NavLink
                to="/SignUp"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Sign Up
              </NavLink>
            ) : (
              <NavLink
                to="/dashboard/home"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <div className="flex">
                  <p>Dashboard</p>
                  {selectCourse?.length > 0 && (
                    <span className="badge -mt-1 kalam-text text-white border-transparent bg-error-content">
                      +{selectCourse.length}
                    </span>
                  )}
                </div>
              </NavLink>
            )}

            <li className="flex items-center gap-8">
              {user && (
                <div
                  className="avatar tooltip tooltip-bottom tooltip-secondary"
                  data-tip={user.displayName}
                >
                  <div className="w-9 rounded-full ring ring-error-content  ">
                    <img src={user.photoURL} />
                  </div>
                </div>
              )}

              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn btn-xs btn-outline border-0 border-b-2 hover:bg-error-content  border-red-900  text-white  py-2 px-6 rounded-full"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/SignIn"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Sign In
                </NavLink>
              )}
            </li>
          </ul>
          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            {/* Dropdown Open Button */}
            <button
              className="mr-5"
              aria-label="Open Menu"
              title="Open Menu"
              onClick={() => setIsMenuOpen(true)}
            >
              <HiBars3BottomRight className="w-7 text-gray-200" />
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-20">
                <div className="p-5 bg-white border rounded shadow-lg w-auto">
                  {/* Logo & Button section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link to="/" className="inline-flex items-center">
                        <img
                          src="../../../public/Color-feathers.svg"
                          className="w-20"
                        />
                        <div>
                          <span className="text-3xl font-bold tracking-wide text-indigo-700 Caveat-text">
                            Arts Adventure
                          </span>
                          <p className="text-center text-black text-sm Kalam-text">
                            adventures in creativity
                          </p>
                        </div>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <HiOutlineXMark className="w-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className="space-y-4 uppercase">
                      <li>
                        <NavLink
                          to="/"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Home
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/instructors"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          instructors
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/classes"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          Classes
                        </NavLink>
                      </li>
                      <li className="text-red-300 hover:text-accent-focus">
                        <DarkMode></DarkMode>
                      </li>
                      <li>
                        {!user ? (
                          <NavLink
                            to="/SignUp"
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                          >
                            Sign Up
                          </NavLink>
                        ) : (
                          <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                          >
                            <div className="flex">
                              <p>Dashboard</p>
                              {selectCourse?.length > 0 && (
                                <span className="badge -mt-1 kalam-text text-white border-transparent bg-error-content">
                                  +{selectCourse.length}
                                </span>
                              )}
                            </div>
                          </NavLink>
                        )}
                      </li>

                      <li className="flex items-center gap-8">
                        {user && (
                          <div
                            className="avatar tooltip tooltip-bottom tooltip-secondary"
                            data-tip={user.displayName}
                          >
                            <div className="w-9 rounded-full ring ring-error-content">
                              <img src={user.photoURL} />
                            </div>
                          </div>
                        )}

                        {user ? (
                          <button
                            onClick={handleLogOut}
                            className="btn btn-xs btn-outline border-0 border-b-2 hover:bg-error-content  border-red-900  text-gray-700   py-2 px-6 rounded-full"
                          >
                            Logout
                          </button>
                        ) : (
                          <NavLink
                            to="/SignIn"
                            className={({ isActive }) =>
                              isActive ? "active" : "default"
                            }
                          >
                            Sign In
                          </NavLink>
                        )}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
