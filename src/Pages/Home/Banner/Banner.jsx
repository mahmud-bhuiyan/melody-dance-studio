import { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import anime from "animejs";

const Banner = () => {
  const images = [
    {
      url: "https://i.ibb.co/xY08QZp/dance-b-5.png",
      text: "Indian freestyle",
      subtext: "Explore the art of Indian freestyle dance",
    },
    {
      url: "https://i.ibb.co/NtSzypN/dance-b-9.png",
      text: "Kathak",
      subtext: "Discover the grace and elegance of Kathak",
    },
    {
      url: "https://i.ibb.co/Qvvy0dJ/dance-b-6.png",
      text: "Kuchipudi",
      subtext: "Experience the vibrant traditions of Kuchipudi",
    },
    {
      url: "https://i.ibb.co/NWVdFGg/dance-b-7.png",
      text: "Odissi",
      subtext: "Immerse yourself in the classical art of Odissi",
    },
    {
      url: "https://i.ibb.co/4SJ9rY8/dance-b-8.png",
      text: "Manipuri",
      subtext: "Explore the enchanting world of Manipuri dance",
    },
    {
      url: "https://i.ibb.co/1ZpvDX4/dance-b-3.png",
      text: "Mohiniyattam",
      subtext: "Witness the beauty and grace of Mohiniyattam",
    },
    {
      url: "https://i.ibb.co/RCx4qQz/dance-b-4.png",
      text: "Balled",
      subtext: "Experience the ancient art of Balled",
    },
  ];

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
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.url} alt="" />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white "
              ref={(el) => (textRef.current[index] = el)}
            >
              <div className="text-2xl font-bold p-4">{image.text}</div>
              <div
                className="text-lg p-4 hidden sm:flex"
                ref={(el) => (subtextRef.current[index] = el)}
              >
                {image.subtext}
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
