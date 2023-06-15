import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";

const AdminHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <Helmet>
        <title>Admin Dashboard | Melody Dance Studio</title>
      </Helmet>
      <div className="shadow-lg p-4 sm:p-6 rounded-lg">
        <div>
          <h2 className="text-xl  text-center">
            Hi, <span className="font-bold">{user.displayName}</span>
          </h2>
        </div>
        <div className="mt-6"></div>
      </div>
    </div>
  );
};

export default AdminHome;
