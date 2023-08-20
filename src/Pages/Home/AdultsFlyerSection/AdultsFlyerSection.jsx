import CommonButton from "../../../Components/CommonButton/CommonButton";
import bg from "../../../assets/bg/adult.png";

const AdultsFlyerSection = () => {
  return (
    <div className="bg-pink-50 py-16">
      <div className="flex items-center max-w-screen-2xl mx-auto">
        <div className="hidden lg:flex w-1/2">
          <figure>
            <img src={bg} alt="Album" className="w-full h-full object-cover" />
          </figure>
        </div>
        <div className="lg:w-1/2">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">
                <div>
                  <h3 className="font-bold text-xl md:text-3xl lg:text-5xl uppercase">
                    Dance for Adult?
                  </h3>
                  <h3 className="text-xl md:text-4xl">
                    WHY NOT! THESE PEOPLE FOUND IT AWESOME!
                  </h3>
                </div>
              </h2>
              <p className="my-6">
                Since the time our fitness salon opened up its doors for the
                very first time, there always was a conventional feeling that
                fitness is more of a girly thing, than a manly one. No one could
                have been more wrong! Just in the last 10 years our fitness
                center’s men/women attendees ration skyrocketed from 10/90 to
                35/65! This means that each third of our fitness club’s
                attendees is a man who just loves keeping up in shape while
                doing fitness!
              </p>
              <CommonButton name={"Read More"}></CommonButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdultsFlyerSection;
