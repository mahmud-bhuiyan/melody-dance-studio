const CommonButton = ({ name, style }) => {
  return (
    <>
      <button className={`btn bg-[#F19797] w-48 ${style}`}>{name}</button>
    </>
  );
};

export default CommonButton;
