const PopularInstructorsCard = ({ instructor }) => {
  return (
    <>
      <div key={instructor._id} className="bg-white p-4 shadow rounded-lg">
        <img
          src={instructor.instructor.image}
          alt={instructor.instructor.name}
          className="h-36 w-36 rounded-full mx-auto"
        />
        <h4 className="text-lg font-semibold my-2">
          {instructor.instructor.name}
        </h4>
        <p className="text-sm text-gray-500">
          Email: {instructor.instructor.email}
        </p>
        <p className="text-sm text-gray-500">
          Total Students:{" "}
          {instructor.instructor.class_info.reduce(
            (sum, classData) => sum + classData.no_students,
            0
          )}
        </p>
      </div>
    </>
  );
};

export default PopularInstructorsCard;
