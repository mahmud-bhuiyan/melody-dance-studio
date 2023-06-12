import { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import anime from "animejs";

const Banner = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

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
          <div key={index}>
            <img src={cls.classImage} alt="" />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white "
              ref={(el) => (textRef.current[index] = el)}
            >
              <div className="text-2xl font-bold p-4">{cls.className}</div>
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
