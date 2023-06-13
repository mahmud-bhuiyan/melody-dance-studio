import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useData from "../../../Hooks/useData";

const Classes = () => {
  const [data] = useData();
  const [classes] = [data];
  const { user } = useContext(AuthContext);

  const handleSelectClass = (classId) => {
    console.log(classId);
  };

  const isLoggedIn = !!user;
  const isAdmin = user && user.isAdmin;

  return (
    <div>
      <Helmet>
        <title>Classes | Melody Dance Studio</title>
      </Helmet>

      <div
        className="bg-cover bg-center text-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/fGMBFjr/bg-banner-2.png')",
          height: "220px",
          borderBottom: "5px solid #EA906C",
        }}
      >
        <h3 className="text-4xl font-bold pt-32 text-white">Classes</h3>
      </div>

      <div>
        {classes.map((classItem, index) => (
          <div
            className={`card ${
              classItem.availableSeats === 0 ? "bg-red-500" : ""
            } `}
            key={classItem._id}
          >
            <div className="card-body p-0 bg-[#f2f2f2]">
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src={classItem.classImage}
                    alt={classItem.className}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-4 flex flex-col justify-center">
                  <h2 className="card-title text-xl mb-2">
                    {classItem.className}
                  </h2>
                  <p className="mb-2">Instructor: {classItem.instructorName}</p>
                  <p className="mb-2">
                    Available Seats: {classItem.availableSeats}
                  </p>
                  <p className="">Price: {classItem.price}</p>
                  <div className="card-actions">
                    <button
                      className={`btn btn-primary ${
                        classItem.availableSeats === 0 ||
                        (isAdmin && isLoggedIn) ||
                        !isLoggedIn
                          ? "btn-disabled"
                          : ""
                      }`}
                      onClick={() => handleSelectClass(classItem.classId)}
                      disabled={
                        classItem.availableSeats === 0 ||
                        (isAdmin && isLoggedIn) ||
                        !isLoggedIn
                      }
                    >
                      {isLoggedIn ? "Select" : "Log in to Select"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
