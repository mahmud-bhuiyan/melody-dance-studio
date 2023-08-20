const SectionHeader = ({ firstPart, secondPart, styles }) => {
  return (
    <div className={styles}>
      <h1 className="uppercase font-bold">{firstPart} </h1>
      <h2 className="uppercase font-bold text-[#F19797]">{secondPart}</h2>
    </div>
  );
};

export default SectionHeader;
