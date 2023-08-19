const SectionHeader = ({ firstPart, secondPart }) => {
  return (
    <div className="xl:flex flex-wrap gap-2">
      <h1 className="text-xl md:text-3xl uppercase font-bold">{firstPart} </h1>
      <h2 className="text-xl md:text-3xl  uppercase font-bold text-[#F19797]">
        {secondPart}
      </h2>
    </div>
  );
};

export default SectionHeader;
