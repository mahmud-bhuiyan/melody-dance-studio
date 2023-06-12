import Banner from "../Banner/Banner";
import JoinUs from "../JoinUs/JoinUs";
import PopularClasses from "../PopularClasses/PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors/PopularInstructors";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JoinUs></JoinUs>
      <div className="bg-[url('https://i.ibb.co/vm17RBk/bg-27.png')] bg-cover bg-center bg-fixed text-center">
        <PopularClasses></PopularClasses>
        <PopularInstructors></PopularInstructors>
      </div>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
