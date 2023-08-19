import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/logo.png";
import { FaUser } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogOut = () => {
    logout()
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink exact="true" to="/" activeclassname="active-link">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/instructors"
          activeclassname="active-link"
          className="nav-link"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          activeclassname="active-link"
          className="nav-link"
        >
          Classes
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink
              to={
                isAdmin
                  ? "/dashboard/adminHome"
                  : "dashboard/studentHome" && isInstructor
                  ? "/dashboard/instructorHome"
                  : "dashboard/studentHome"
              }
              activeclassname="active-link"
              className="nav-link"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut}>Logout</button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/signup" activeclassname="active-link">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeclassname="active-link">
              Login
            </NavLink>
          </li>
        </>
      )}

      {user?.photoURL ? (
        <li>
          <Link to="/" title={user.displayName} className="flex items-center">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-8 h-8 rounded-full"
            />
          </Link>
        </li>
      ) : (
        <li>
          <Link to="/user">
            <FaUser />
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar p-0 md:p-2 fixed z-10 bg-white">
      {/* logo */}
      <NavLink
        to="/"
        className="btn btn-ghost normal-case text-xl"
        activeclassname="active-link"
      >
        <img className="rounded-full w-10 h-10" src={logo} alt="" />
        <span className="hidden md:block">Melody Dance Studio</span>
        <span className="md:hidden">MDS</span>
      </NavLink>

      {/* regular links */}
      <div className="ml-auto hidden lg:flex items-center space-x-2">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* hamburger */}
      <div className="dropdown ml-auto lg:hidden">
        <button tabIndex={0} className="btn btn-ghost" onClick={toggleDropdown}>
          {isDropdownOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <ul
          tabIndex={0}
          className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-44 absolute top-full right-0 ${
            isDropdownOpen ? "block" : "hidden"
          }`}
        >
          {navLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
