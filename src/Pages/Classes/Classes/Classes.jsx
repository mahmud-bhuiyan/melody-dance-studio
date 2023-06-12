import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  const handleSelectClass = (classId) => {
    // Handle logic for selecting a class
    // Check if the user is logged in or if the class is full
    // Enable/disable the select button accordingly
  };

  return (
    <div>
      <Helmet>
        <title>Classes | Melody Dance Studio</title>
      </Helmet>

      <div
        className="bg-[url('https://i.ibb.co/fGMBFjr/bg-banner-2.png')] bg-cover bg-center text-center"
        style={{ height: "220px" }}
      >
        <h3 className="text-4xl font-bold pt-32 text-white">Classes</h3>
      </div>

      <div>
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className={`class-card ${
              classItem.availableSeats === 0 ? "bg-red-500" : ""
            }`}
          >
            <img src={classItem.image} alt={classItem.name} />
            <h4>{classItem.name}</h4>
            <p>Instructor: {classItem.instructor}</p>
            <p>Available Seats: {classItem.availableSeats}</p>
            <p>Price: {classItem.price}</p>
            <button onClick={() => handleSelectClass(classItem._id)}>
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
