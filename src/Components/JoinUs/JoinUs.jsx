import { FaPhoneAlt } from "react-icons/fa";

const JoinUs = () => {
  const gradientStyle = {
    background: "linear-gradient(to right, #ff7f50, #ff6f61)",
  };

  return (
    <div
      style={gradientStyle}
      className="flex items-center justify-center px-10 py-4"
    >
      <h3 className="text-white">
        Join us today for{" "}
        <span className="text-slate-600 font-bold">Your first dance</span>{" "}
        <FaPhoneAlt className="inline-block ml-2" />
        <span className="font-bold">+880 1234 567 890</span>
      </h3>
    </div>
  );
};

export default JoinUs;
