import { Link } from "react-router-dom";
import flyer from "../../../assets/bg/flyer.jpg";
import CommonButton from "../../../Components/CommonButton/CommonButton";

const FlyerSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${flyer})` }}
    >
      <div className="text-center font-bold p-4">
        <h3 className="text-white text-xl md:text-3xl lg:text-5xl uppercase">
          Whatever Your Mood Is
        </h3>
        <h3 className="text-white text-xl md:text-4xl lg:text-6xl mb-6">
          ... We&lsquo;ve got a Dance Class for it!
        </h3>
        <Link to="/classes">
          <CommonButton name={"See All Classes"}></CommonButton>
        </Link>
      </div>
    </div>
  );
};

export default FlyerSection;
