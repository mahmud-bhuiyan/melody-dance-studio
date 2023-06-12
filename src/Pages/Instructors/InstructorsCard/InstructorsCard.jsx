const InstructorsCard = ({ instructor }) => {
  return (
    <>
      <div
        key={instructor._id}
        className="card md:card-side bg-base-100 shadow-xl m-2 sm:m-4 flex items-center"
      >
        <figure className="sm:pl-10 pt-8 md:pt-0">
          <img
            src={instructor.instructor.image}
            alt={instructor.instructor.name}
            className="h-48 w-48 rounded-full mx-auto"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{instructor.instructor.name}</h2>
          <p>
            <span className="font-bold">Email:</span>{" "}
            {instructor.instructor.email}
          </p>
          <p>
            <span className="font-bold">Classes taken:</span>{" "}
            {instructor.instructor.no_of_classes}
          </p>
          <p>
            <span className="font-bold">Classes Name:</span>{" "}
            {instructor.instructor.class_info
              .map((classData) => classData.class_name)
              .join(", ")}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary btn-sm md:btn-md w-full sm:w-auto">
              See Classes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorsCard;
