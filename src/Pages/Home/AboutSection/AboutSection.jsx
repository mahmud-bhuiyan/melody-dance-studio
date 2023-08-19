import SectionHeader from "../../../Components/sectionHeader/sectionHeader";
import bg from "../../../assets/bg/bg.png";

const AboutSection = () => {
  return (
    <div className="flex items-center max-w-screen-2xl mx-auto bg-pink-50 rounded">
      <div className="hidden lg:flex w-1/2">
        <figure>
          <img
            src={bg}
            alt="Album"
            className="w-full h-full object-cover rounded"
          />
        </figure>
      </div>
      <div className="lg:w-1/2">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">
              <SectionHeader
                firstPart={"welcome to"}
                secondPart={"Melody dance studio"}
              ></SectionHeader>
            </h2>
            <p>
              Tina Ahmed, who was born and raised in Khulna, is happy to now
              call Dhaka her home. She is a graduate of the National College of
              Performance Art in Dhaka, Bangladesh. Tina majored in Dance and
              Performance with a concentration in Modern Dance. She has over 10
              years of teaching experience and has worked as a dance instructor
              for both adults and children. Having taught young children for
              many years, Tina is thrilled to open her first dance studio,
              called Melody Dance Studio and is excited to bring her expertise
              to Dhanmondi, Dhaka.
            </p>
            <button className="btn bg-[#F19797] w-36">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
