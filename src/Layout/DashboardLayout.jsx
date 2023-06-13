import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaBook,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-6 bg-green-300">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-sm mb-6 drawer-button lg:hidden"
          >
            <FaBars />
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side bg-slate-200">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 text-base-content">
            {/* Student Dashboard */}
            <li>
              <NavLink
                exact
                to="/selected-classes"
                activeClassName="active-link"
                className="flex items-center"
              >
                <FaShoppingCart className="mr-2" />
                My Selected Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/enrolled-classes"
                activeClassName="active-link"
                className="flex items-center"
              >
                <FaShoppingCart className="mr-2" />
                My Enrolled Classes
              </NavLink>
            </li>

            {/* Instructor Dashboard */}
            <li>
              <NavLink
                exact
                to="/add-class"
                activeClassName="active-link"
                className="flex items-center"
              >
                <FaBook className="mr-2" />
                Add a Class
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/my-classes"
                activeClassName="active-link"
                className="flex items-center"
              >
                <FaUsers className="mr-2" />
                My Classes
              </NavLink>
            </li>

            {/* Admin Dashboard */}
            <li>
              <NavLink
                exact
                to="/manage-classes"
                activeClassName="active-link"
                className="flex items-center"
              >
                <FaShoppingBag className="mr-2" />
                Manage Classes
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/manage-users"
                activeClassName="active-link"
                className="flex items-center"
              >
                <FaUsers className="mr-2" />
                Manage Users
              </NavLink>
            </li>

            <div className="divider"></div>

            <li className="mb-2">
              <NavLink
                exact
                to="/"
                activeClassName="active-link"
                className="flex items-center"
              >
                <FaBook className="mr-2" />
                Home
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                exact
                to="/instructors"
                activeClassName="active-link"
                className="flex items-center"
              >
                <FaBook className="mr-2" />
                Instructors
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
