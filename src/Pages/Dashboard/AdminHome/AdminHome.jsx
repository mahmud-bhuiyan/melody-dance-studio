import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import { FaUsers, FaStackExchange, FaListUl } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch("https://melody-dance-studio-server.vercel.app/admin-stats")
      .then((response) => response.json())
      .then((data) => setStats(data))
      .catch((error) => console.log(error));
  }, []);

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
        <div className="divider"></div>
        <div className="mt-6 flex justify-center">
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">TotalRevenue</div>
              <div className="stat-value m-3">
                ${stats?.revenue ? stats?.revenue : "0"}
              </div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Users</div>
              <div className="stat-value text-secondary flex gap-2 m-3">
                <FaUsers /> {stats?.users}
              </div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Total Classes</div>
              <div className="stat-value flex gap-2 m-3">
                <FaStackExchange /> {stats?.classes}
              </div>
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Total Orders</div>
              <div className="stat-value text-secondary  flex gap-2 m-3">
                <FaListUl /> {stats?.orders}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
