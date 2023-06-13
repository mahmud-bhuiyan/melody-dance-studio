import PopularClassesCard from "../PopularClassesCard/PopularClassesCard";
import useData from "../../../../Hooks/useData";

const PopularClasses = () => {
  const [data] = useData();
  const [classes] = [data];

  return (
    <div className="py-20">
      <div className="mx-auto w-9/12 sm:w-1/2 md:w-1/3 text-center my-8">
        <h3 className="font-bold text-xl sm:text-2xl md:text-3xl uppercase border-y-4 border-dashed border-[#46458C] py-4">
          Popular <span className="text-[#6DA9E4]">Classes</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {classes.slice(0, 6).map((danceClass) => (
          <PopularClassesCard
            key={danceClass._id}
            danceClass={danceClass}
          ></PopularClassesCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
