import Headers from "../../Components/Headers/Headers";
import SectionHeader from "../../Components/sectionHeader/sectionHeader";
import about from "../../assets/bg/about.png";
import Reviews from "../Shared/Reviews/Reviews";
const AboutPage = () => {
  return (
    <>
      <Headers backgroundImage={`${about}`} pageTitle={"About Us"}></Headers>

      <div className=" max-w-screen-2xl mx-auto bg-pink-50 p-0 md:p-10">
        <div className="card-body">
          <h2>
            <SectionHeader
              firstPart={
                "Learn more about the best dancing studio in the town!"
              }
              styles={"text-xl md:text-4xl text-center mb-8"}
            ></SectionHeader>
          </h2>
          <p>
            In the recent years as one of the oldest dancing studio, we’ve grown
            to diversify the dancing styles lineup we have to the widest
            extents. The changes volatility that our studio has faced is
            especially drastic, considering that we’ve been established in the
            mid-’80s, which had whole different fashion trends going on then in
            the dancing styles regard.
          </p>
          <p>
            That was the reason why we’ve expanded our Latin dances dramatically
            over the last 10 years, just as well as why we’ve added a Hip Hop &
            Contemporary as well as Jazz, Swing & Jive dancing Classes.
            Nevertheless, we always wanted to comply with which exact dancing
            routines were in the biggest demand among our attendees at any given
            time.
          </p>
        </div>
      </div>

      <Reviews></Reviews>
    </>
  );
};

export default AboutPage;
