const PageHeaders = ({ text }) => {
  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-center underline mb-6">
          {text}
        </h2>
      </div>
    </>
  );
};

export default PageHeaders;
