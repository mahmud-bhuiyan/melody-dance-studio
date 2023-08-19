import { FaPhoneAlt } from "react-icons/fa";

const JoinUs = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/vm17RBk/bg-27.png')] bg-cover bg-center bg-fixed text-center px-10 py-8">
      <h3 className="text-slate-500 text-3xl">
        Join us today for{" "}
        <span className="text-[#242E4D] font-bold">Your first dance</span>{" "}
        <FaPhoneAlt className="inline-block ml-2 border-4 border-[#BBBABA] rounded-full p-1 bg-slate-500 text-white text-4xl" />{" "}
        <span className="font-bold text-black">+880 1234 567 890</span>
      </h3>
    </div>
  );
};

export default JoinUs;
