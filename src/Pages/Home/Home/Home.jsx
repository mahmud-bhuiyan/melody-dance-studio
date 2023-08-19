import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import JoinUs from "../JoinUs/JoinUs";
import PopularClasses from "../PopularClasses/PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors/PopularInstructors";
import Reviews from "../../Shared/Reviews/Reviews";
import AboutSection from "../AboutSection/AboutSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Melody Dance Studio</title>
      </Helmet>
      <Banner></Banner>
      <JoinUs></JoinUs>
      <AboutSection></AboutSection>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
