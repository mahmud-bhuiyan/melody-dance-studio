import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useData from "../../../Hooks/useData";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";

const Classes = () => {
  const [data] = useData();

  const { user } = useContext(AuthContext);
  const [enrolled, refetch] = useCart();

  const approvedClasses = data.filter(
    (classItem) => classItem.status === "approved"
  );

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

      const isEnrolled = enrolled.some(
        (enrolledClass) => enrolledClass.classId === classId
      );

      if (isEnrolled) {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Already enrolled for the class.",
          showConfirmButton: false,
          timer: 1000,
        });
        return;
      }

      fetch("https://melody-dance-studio-server.vercel.app/enrolled", {
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
  const isInstructor = user && user.isInstructor;

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
          (Enrolled: {enrolled?.length || 0})
        </h5>
      </div>

      <div>
        {approvedClasses.map((classItem, index) => {
          const {
            _id,
            className,
            classImage,
            instructorName,
            price,
            availableSeats,
          } = classItem;
          const remainingSeats =
            availableSeats -
            enrolled.filter(
              (enrolledClass) => enrolledClass.classId === classItem.classId
            ).length;
          const isEnrolled = enrolled.some(
            (enrolledClass) => enrolledClass.classId === classItem.classId
          );

          return (
            <div
              className={`card ${
                availableSeats === 0 ? "bg-red-500 text-white" : "bg-[#f2f2f2]"
              } `}
              key={_id}
            >
              <div className="card-body p-0 ">
                <div
                  className={`flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2">
                    <img
                      src={classImage}
                      alt={className}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-4 flex flex-col justify-center">
                    <h2 className="card-title text-xl mb-2">{className}</h2>
                    <p className="mb-2">Instructor: {instructorName}</p>
                    <p className="mb-2">Available Seats: {remainingSeats}</p>
                    <p className="">Price: {price}</p>
                    <div className="card-actions">
                      <button
                        className={`btn btn-sm btn-primary ${
                          availableSeats === 0 ||
                          (isAdmin && isLoggedIn) ||
                          (isInstructor && isLoggedIn) ||
                          !isLoggedIn ||
                          isEnrolled
                            ? "btn-disabled"
                            : ""
                        }`}
                        onClick={() => handleJoinClass(classItem)}
                        disabled={
                          availableSeats === 0 ||
                          isAdmin ||
                          isInstructor ||
                          isEnrolled
                        }
                      >
                        {isEnrolled
                          ? "Enrolled"
                          : isLoggedIn
                          ? "Enroll"
                          : "Log in to Select"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Classes;
