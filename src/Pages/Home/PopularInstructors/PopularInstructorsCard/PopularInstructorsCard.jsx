const PopularInstructorsCard = ({ instructor }) => {
  const { instructorName, instructorEmail, instructorImage, enrolled } =
    instructor;
  return (
    <>
      <div key={instructor._id} className="bg-white p-4 shadow rounded-lg">
        <img
          src={instructorImage}
          alt={instructorName}
          className="h-36 w-36 rounded-full mx-auto"
        />
        <h4 className="text-lg font-semibold my-2">{instructorName}</h4>
        <p className="text-sm text-gray-500">Email: {instructorEmail}</p>
        <p className="text-sm text-gray-500">Total Students: {enrolled}</p>
      </div>
    </>
  );
};

export default PopularInstructorsCard;
