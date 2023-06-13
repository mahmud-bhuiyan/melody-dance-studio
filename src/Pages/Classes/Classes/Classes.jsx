import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useData from "../../../Hooks/useData";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";

const Classes = () => {
  const [data] = useData();
  const [classes] = [data];
  const { user } = useContext(AuthContext);
  const [enrolled, refetch] = useCart();

  const handleJoinClass = (classItem) => {
    console.log(classItem);

    const { _id, classId, className, classImage, instructorName, price } =
      classItem;

    if (user && user.email) {
      const enrolledClass = {
        enrolledClassId: _id,
        classId,
        className,
        classImage,
        instructorName,
        price,
        email: user.email,
      };

      fetch("http://localhost:7000/enrolled", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(enrolledClass),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully enrolled for the class.",
              showConfirmButton: false,
              timer: 1000,
            });
          } else {
            console.log("An error occurred");
          }
        });
    }
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
        <h3 className="text-4xl font-bold pt-28 text-white">Classes</h3>
        <h5 className="text-lg font-bold text-white">
          (Enrolled: {enrolled?.length})
        </h5>
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
                      className={`btn btn-sm btn-primary ${
                        classItem.availableSeats === 0 ||
                        (isAdmin && isLoggedIn) ||
                        !isLoggedIn
                          ? "btn-disabled"
                          : ""
                      }`}
                      onClick={() => handleJoinClass(classItem)}
                      disabled={
                        classItem.availableSeats === 0 ||
                        (isAdmin && isLoggedIn) ||
                        !isLoggedIn
                      }
                    >
                      {isLoggedIn ? "Enroll" : "Log in to Select"}
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
