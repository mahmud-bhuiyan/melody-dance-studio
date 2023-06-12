import { useEffect, useState } from "react";
import PopularClassesCard from "../PopularClassesCard/PopularClassesCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("danceClasses.json")
      .then((res) => res.json())
      .then((data) => {
        const popularClasses = data.sort(
          (a, b) => b.no_students - a.no_students
        );
        setClasses(popularClasses);
      });
  }, []);

  return (
    <div className="">
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
