import { NavLink, Outlet } from "react-router-dom";
import {
  FaBars,
  FaBook,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import logo from "../../public/logo.png";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-6">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-sm mb-6 drawer-button lg:hidden"
          >
            <FaBars />
          </label>
          <Outlet />
        </div>
        <div className="drawer-side bg-slate-200">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 text-base-content">
            {/* website logo */}
            <li className="mb-2 sm:mb-6 ">
              <NavLink to="/" className="btn btn-ghost normal-case text-xl">
                <img className="rounded-full w-10 h-10" src={logo} alt="" />
                <span className="hidden md:block">Melody Dance Studio</span>
                <span className="md:hidden">MDS</span>
              </NavLink>
            </li>

            <div className="divider"></div>

            {isAdmin && (
              <>
                <li>
                  <NavLink
                    exact="true"
                    to="/dashboard/home"
                    className="flex items-center"
                  >
                    <FaHome className="mr-2" />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact="true"
                    to="/dashboard/allusers"
                    className="flex items-center"
                  >
                    <FaHome className="mr-2" />
                    All Users
                  </NavLink>
                </li>
              </>
            )}
            {isInstructor && (
              <>
                <li>
                  <NavLink
                    exact="true"
                    to="/manage-classes"
                    className="flex items-center"
                  >
                    <FaShoppingBag className="mr-2" />
                    Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact="true"
                    to="/manage-users"
                    className="flex items-center"
                  >
                    <FaUsers className="mr-2" />
                    Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact="true"
                    to="/dashboard/addclass"
                    className="flex items-center"
                  >
                    <FaBook className="mr-2" />
                    Add a Class
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact="true"
                    to="/my-classes"
                    className="flex items-center"
                  >
                    <FaUsers className="mr-2" />
                    My Classes
                  </NavLink>
                </li>
              </>
            )}
            {!isAdmin && !isInstructor && (
              <>
                <li>
                  <NavLink
                    exact="true"
                    to="/selected-classes"
                    className="flex items-center"
                  >
                    <FaShoppingCart className="mr-2" />
                    My Selected Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact="true"
                    to="/dashboard/enrolled"
                    className="flex items-center"
                  >
                    <FaShoppingCart className="mr-2" />
                    My Enrolled Classes
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>

            <li className="mb-2">
              <NavLink exact="true" to="/" className="flex items-center">
                <FaBook className="mr-2" />
                Home
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                exact="true"
                to="/instructors"
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
