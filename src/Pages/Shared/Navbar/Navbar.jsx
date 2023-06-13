import { Link, NavLink } from "react-router-dom";
import logo from "../../../../public/logo.png";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

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
        <NavLink exact to="/" activeClassName="active-link">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/contact" activeClassName="active-link">
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/instructors"
          activeClassName="active-link"
          className="nav-link"
        >
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/classes"
          activeClassName="active-link"
          className="nav-link"
        >
          Classes
        </NavLink>
      </li>

      {user ? (
        <>
          <li>
            <NavLink
              to="dashboard/instructor"
              activeClassName="active-link"
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
            <NavLink to="/signup" activeClassName="active-link">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" activeClassName="active-link">
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
    <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-30 bg-black text-white">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-44"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-xl"
          activeClassName="active-link"
        >
          <img className="rounded-full w-10 h-10" src={logo} alt="" />
          <span className="hidden md:block">Melody Dance Studio</span>
          <span className="md:hidden">MDS</span>
        </NavLink>
      </div>
      <div className="ml-auto hidden lg:flex items-center space-x-2">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
