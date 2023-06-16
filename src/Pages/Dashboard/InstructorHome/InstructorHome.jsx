import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";

const InstructorHome = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <Helmet>
        <title>Student Dashboard | Melody Dance Studio</title>
      </Helmet>
      <div className="shadow-lg p-4 sm:p-6 rounded-lg">
        <div>
          <h2 className="text-xl  text-center">
            Hi, <span className="font-bold">{user.displayName}</span>
          </h2>
        </div>
        <img src={user.photoURL} className="w-36 mx-auto mt-6" alt="" />
        <div className="mt-6 text-center">
          <h2 className="mt-2">Name: {user.displayName}</h2>
          <h2 className="mt-2">Email: {user.email}</h2>
        </div>
      </div>
    </div>
  );
};

export default InstructorHome;
