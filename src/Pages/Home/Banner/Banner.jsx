import { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import anime from "animejs";
import useData from "../../../Hooks/useData";

const Banner = () => {
  const [classes] = useData();

  const [activeSlide, setActiveSlide] = useState(null);
  const textRef = useRef([]);
  const subtextRef = useRef([]);
  const buttonRef = useRef([]);

  const setupAnimations = (index) => {
    const textElement = textRef.current[index];
    const subtextElement = subtextRef.current[index];
    const buttonElement = buttonRef.current[index];

    anime({
      targets: textElement,
      translateY: [-30, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 500,
      easing: "easeOutExpo",
    });

    anime({
      targets: subtextElement,
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 800,
      easing: "easeOutExpo",
    });

    anime({
      targets: buttonElement,
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: 1100,
      easing: "easeOutExpo",
    });
  };

  useEffect(() => {
    if (activeSlide !== null) {
      setupAnimations(activeSlide);
    }
  }, [activeSlide]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative">
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        showThumbs={false}
        onChange={handleSlideChange}
      >
        {classes.slice(0, 6).map((cls, index) => (
          <div key={index} className="h-screen lg:h-auto">
            <img
              className="h-full w-full object-cover lg:h-screen"
              src={cls.classImage}
              alt="banner-image"
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-white"
              ref={(el) => (textRef.current[index] = el)}
            >
              <div className="text-2xl lg:text-4xl font-bold p-4">
                {cls.className}
              </div>
              <div
                className="text-lg p-4 hidden sm:flex"
                ref={(el) => (subtextRef.current[index] = el)}
              >
                {cls.subtext}
              </div>
              <button
                className="text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hidden sm:flex"
                ref={(el) => (buttonRef.current[index] = el)}
              >
                Join Us
              </button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
