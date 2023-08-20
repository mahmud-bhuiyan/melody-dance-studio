import PopularClassesCard from "../PopularClassesCard/PopularClassesCard";
import useData from "../../../../Hooks/useData";
import { Link } from "react-router-dom";
import SectionHeader from "../../../../Components/sectionHeader/sectionHeader";
import CommonButton from "../../../../Components/CommonButton/CommonButton";

const PopularClasses = () => {
  const [classes] = useData();

  return (
    <div className="pt-10 pb-16 bg-[#F9F9F7]">
      <SectionHeader
        firstPart={"Popular"}
        secondPart={"Classes"}
        styles={"flex flex-wrap gap-4 justify-center p-10 text-xl md:text-4xl"}
      ></SectionHeader>

      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {classes.slice(0, 8).map((danceClass) => (
          <PopularClassesCard
            key={danceClass._id}
            danceClass={danceClass}
          ></PopularClassesCard>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/classes">
          <CommonButton name={"See All Classes"}></CommonButton>
        </Link>
      </div>
    </div>
  );
};

export default PopularClasses;
