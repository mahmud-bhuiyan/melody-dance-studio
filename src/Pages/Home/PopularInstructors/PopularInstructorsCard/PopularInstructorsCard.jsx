const PopularInstructorsCard = ({ instructor }) => {
  const { instructorName, instructorImage, speech } = instructor;
  return (
    <>
      <div key={instructor._id} className="bg-white shadow">
        <img src={instructorImage} alt={instructorName} />
        <div className="card-body p-4 text-center">
          <h4 className="text-xl font-bold">{instructorName}</h4>
          <h5 className="text-lg text-[#F19797] font-semibold">Instructor</h5>
          <p className="text-gray-500 px-2 md:px-4">{speech}</p>
        </div>
      </div>
    </>
  );
};

export default PopularInstructorsCard;
