const Headers = ({ backgroundImage, imageStyle, pageTitle, titleStyle }) => {
  return (
    <>
      <div
        className={`h-screen bg-cover bg-center flex items-center justify-center ${imageStyle}`}
        style={{ backgroundImage: `url(${backgroundImage})`, height: "250px" }}
      >
        <div className={`font-bold p-4 ${titleStyle}`}>
          <h3 className="text-white text-xl md:text-3xl lg:text-5xl uppercase">
            {pageTitle}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Headers;
