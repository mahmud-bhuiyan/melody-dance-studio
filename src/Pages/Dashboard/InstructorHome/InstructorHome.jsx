import { Helmet } from "react-helmet-async";

const InstructorHome = () => {
  return (
    <div>
      <Helmet>
        <title>Admin Dashboard | Melody Dance Studio</title>
      </Helmet>
      <div className="shadow-lg p-4 sm:p-6 rounded-lg">
        <div>
          <h2 className="text-xl font-bold text-center">
            {/* Admin: {user.displayName} */}
          </h2>
        </div>
        <div className="mt-6"></div>
      </div>
    </div>
  );
};

export default InstructorHome;
