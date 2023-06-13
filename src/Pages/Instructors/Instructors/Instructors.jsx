import { Helmet } from "react-helmet-async";
import InstructorsCard from "../InstructorsCard/InstructorsCard";
import useData from "../../../Hooks/useData";

const Instructors = () => {
  const [data] = useData();
  const [instructors] = [data];

  return (
    <div>
      <Helmet>
        <title>Instructors | Melody Dance Studio</title>
      </Helmet>

      <div
        className="bg-[url('https://i.ibb.co/fGMBFjr/bg-banner-2.png')] bg-cover bg-center text-center"
        style={{ height: "220px" }}
      >
        <h3 className="text-4xl font-bold pt-32 text-white">Instructors</h3>
      </div>

      <div className="p-2 md:px-0 md:py-4">
        {instructors.map((instructor) => (
          <InstructorsCard
            key={instructor._id}
            instructor={instructor}
          ></InstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
