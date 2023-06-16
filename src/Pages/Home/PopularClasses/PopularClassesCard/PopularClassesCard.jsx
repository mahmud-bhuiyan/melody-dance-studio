import { FaStopwatch, FaUserTie } from "react-icons/fa";

const PopularClassesCard = ({ danceClass }) => {
  const { className, classImage, enrolled, instructorName, duration } =
    danceClass;

  return (
    <div className="p-4 border rounded-lg">
      <div className="relative">
        <img
          src={classImage}
          alt={className}
          className="h-40 w-full object-cover rounded-lg mb-4 transition-opacity duration-300 hover:opacity-100"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <p className="text-white text-lg font-bold bg-sky-500 rounded-lg p-2">
            Enrolled: {enrolled}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <h3 className="text-xl font-bold mb-2">{className}</h3>
        <p className="text-gray-600 mb-2 ">Enrolled: {enrolled}</p>
      </div>
      <div className="flex items-center gap-2 justify-between">
        <p className="text-gray-600 flex items-center gap-2">
          <FaUserTie /> : {instructorName}
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <FaStopwatch /> : {duration ? duration : "1 month"}
        </p>
      </div>
    </div>
  );
};

export default PopularClassesCard;
