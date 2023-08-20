import { FaPhoneAlt } from "react-icons/fa";

const JoinUs = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/vm17RBk/bg-27.png')] bg-cover bg-center bg-fixed text-center px-10 py-8 ">
      <div className="md:flex flex-wrap gap-2 justify-center">
        <h3 className="text-slate-500 text-xl lg:text-3xl">
          Join us today for
        </h3>

        <h3 className="text-[#242E4D] font-bold text-xl lg:text-3xl">
          Your first dance
        </h3>

        <h3 className="font-bold text-black text-lg lg:text-3xl">
          <FaPhoneAlt className="inline-block ml-2 border-4 border-[#BBBABA] rounded-full p-1 bg-slate-500 text-white text-4xl" />{" "}
          +880 1234 567 890
        </h3>
      </div>
    </div>
  );
};

export default JoinUs;
