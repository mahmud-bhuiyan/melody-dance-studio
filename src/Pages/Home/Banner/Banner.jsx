import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Banner.css";

const Banner = () => {
  const images = [
    {
      url: "https://i.ibb.co/xY08QZp/dance-b-5.png",
      legend: "Indian free style",
    },
    {
      url: "https://i.ibb.co/NtSzypN/dance-b-9.png",
      legend: "Kathak",
    },
    {
      url: "https://i.ibb.co/Qvvy0dJ/dance-b-6.png",
      legend: "Kuchipudi",
    },
    {
      url: "https://i.ibb.co/NWVdFGg/dance-b-7.png",
      legend: "Odissi",
    },
    {
      url: "https://i.ibb.co/4SJ9rY8/dance-b-8.png",
      legend: "Manipuri",
    },
    {
      url: "https://i.ibb.co/1ZpvDX4/dance-b-3.png",
      legend: "Mohiniyattam",
    },
    {
      url: "https://i.ibb.co/RCx4qQz/dance-b-4.png",
      legend: "Ballade",
    },
  ];

  return (
    <Carousel
      infiniteLoop={true}
      autoPlay={true}
      interval={4000}
      showStatus={false}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt="" />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
