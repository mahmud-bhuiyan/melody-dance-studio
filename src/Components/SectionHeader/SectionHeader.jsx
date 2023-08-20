const SectionHeader = ({
  firstPart,
  secondPart,
  styles,
  firstPartStyle,
  secondPartStyle,
}) => {
  return (
    <div className={styles}>
      <h1 className={`uppercase font-bold ${firstPartStyle}`}>{firstPart}</h1>
      <h2 className={`uppercase font-bold text-[#F19797] ${secondPartStyle}`}>
        {secondPart}
      </h2>
    </div>
  );
};

export default SectionHeader;
