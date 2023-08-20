import { Helmet } from "react-helmet-async";
import InstructorsCard from "../InstructorsCard/InstructorsCard";
import useData from "../../../Hooks/useData";
import Headers from "../../../Components/Headers/Headers";
import header from "../../../assets/bg/header.png";

const Instructors = () => {
  const [data] = useData();
  const [instructors] = [data];

  return (
    <div>
      <Helmet>
        <title>Instructors | Melody Dance Studio</title>
      </Helmet>
      <Headers
        backgroundImage={`${header}`}
        pageTitle={"Instructors"}
      ></Headers>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
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
