import PopularInstructorsCard from "../PopularInstructorsCard/PopularInstructorsCard";
import useData from "../../../../Hooks/useData";
import { Link } from "react-router-dom";
import SectionHeader from "../../../../Components/sectionHeader/sectionHeader";
import CommonButton from "../../../../Components/CommonButton/CommonButton";

const PopularInstructors = () => {
  const [instructors] = useData();

  return (
    <>
      <div className="pt-10 pb-16 bg-[#F9F9F7]">
        <SectionHeader
          firstPart={"Popular"}
          secondPart={"Coaches"}
          styles={
            "flex flex-wrap gap-4 justify-center p-10 text-xl md:text-4xl"
          }
        ></SectionHeader>

        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {instructors.slice(0, 4).map((instructor) => (
            <PopularInstructorsCard
              key={instructor._id}
              instructor={instructor}
            ></PopularInstructorsCard>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/instructors">
            <CommonButton name={"See All Instructors"}></CommonButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PopularInstructors;
