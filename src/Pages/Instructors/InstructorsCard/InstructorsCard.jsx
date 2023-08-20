import CommonButton from "../../../Components/CommonButton/CommonButton";

const InstructorsCard = ({ instructor }) => {
  const { instructorName, instructorEmail, instructorImage, className } =
    instructor;
  return (
    <>
      <div
        key={instructor._id}
        className="card md:card-side bg-base-100 shadow-lg m-2 sm:m-4 flex items-center"
      >
        <figure className="sm:pl-10 pt-8 md:pt-0">
          <img
            src={instructorImage}
            alt={instructorName}
            className="h-48 w-48 rounded-full mx-auto"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{instructorName}</h2>
          <p>
            <span className="font-bold">Email:</span> {instructorEmail}
          </p>
          {/* <p>
            <span className="font-bold">Classes taken:</span>
          </p> */}
          <p>
            <span className="font-bold">Classes Name: </span>
            {className}
          </p>
          <div className="card-actions">
            <CommonButton name={"See Classes"}></CommonButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstructorsCard;
