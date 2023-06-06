import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
const NavBar = () => {
  const user = true;
  // const { user, logOut } = useContext(AuthContext);

  //   const handleLogOut = () => {
  //     logOut()
  //       .then(() => {
  //         toast.success("Logout Successfully 😀", { autoClose: 1000 });
  //       })
  //       .catch((error) => {
  //         console.log("error", error);
  //       });
  //   };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="py-2 mx-auto md:px-24 lg:px-8 z-10 bg-opacity-30 bg-black Kalam-text text-xl ">
      <div className="relative flex items-center justify-between ">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <img src="../../../public/Color-feathers.svg" className="w-20" />
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
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              more
            </NavLink>
          </li>
        </ul>
        <ul className="items-center hidden space-x-8 lg:flex">
          {!user ? (
            <NavLink
              to="/singUp"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Sing Up
            </NavLink>
          ) : (
            <NavLink
              to="/dashboard"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              <p className="flex items-center gap-2">
                Dashboard
              </p>
            </NavLink>
          )}

          <li className="flex items-center gap-8">
            {user && (
              <div
                className="avatar tooltip tooltip-bottom tooltip-primary"
                data-tip={user.displayName}
              >
                <div className="w-9 rounded-full ring ring-primary   ">
                  <img src={user.photoURL} />
                </div>
              </div>
            )}

            {user ? (
              <button
                /* onClick={handleLogOut} */ className="btn btn-xs btn-outline"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/singIn"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Sing In
              </NavLink>
            )}
          </li>
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiBars3BottomRight className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-20">
              <div className="p-5 bg-white border rounded shadow-xl">
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
                        <p className="text-center text-sm Kalam-text">
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
                      <Link
                        to="/"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400"
                      >
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      {!user ? (
                        <Link
                          to="/singUp"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400"
                        >
                          Sing Up
                        </Link>
                      ) : (
                        <Link
                          to="/dashboard"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400"
                        >
                          <p className="flex items-center gap-2">Dashboard</p>
                        </Link>
                      )}
                    </li>

                    <li className="flex items-center gap-8">
                      {user && (
                        <div
                          className="avatar tooltip tooltip-bottom tooltip-primary"
                          data-tip={user.displayName}
                        >
                          <div className="w-9 rounded-full  ring-1 ring-primary">
                            <img src={user.photoURL} />
                          </div>
                        </div>
                      )}

                      {user ? (
                        <button
                          /* onClick={handleLogOut} */ className="btn btn-xs  btn-outline"
                        >
                          Logout
                        </button>
                      ) : (
                        <Link
                          to="/singIn"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-400"
                        >
                          Sing In
                        </Link>
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
  );
};

export default NavBar;
