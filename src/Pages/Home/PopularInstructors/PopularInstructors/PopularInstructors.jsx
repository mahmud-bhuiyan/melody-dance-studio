import { useEffect, useState } from "react";
import PopularInstructorsCard from "../PopularInstructorsCard/PopularInstructorsCard";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("instructor.json")
      .then((res) => res.json())
      .then((data) => {
        const popularInstructors = data.sort((a, b) => {
          let totalStudentsA = a.instructor.class_info.reduce(
            (sum, classData) => sum + classData.no_students,
            0
          );
          let totalStudentsB = b.instructor.class_info.reduce(
            (sum, classData) => sum + classData.no_students,
            0
          );
          return totalStudentsB - totalStudentsA;
        });
        setInstructors(popularInstructors);
      });
  }, []);

  return (
    <>
      <div className="pb-16">
        <div className="mx-auto w-9/12 sm:w-1/2 md:w-1/3 text-center my-8">
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl uppercase border-y-4 border-dashed border-[#46458C] py-4">
            Popular <span className="text-[#6DA9E4]">Instructors</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {instructors.slice(0, 6).map((instructor) => (
            <PopularInstructorsCard
              key={instructor._id}
              instructor={instructor}
            ></PopularInstructorsCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularInstructors;
