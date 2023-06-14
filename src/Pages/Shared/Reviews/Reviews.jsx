import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://melody-dance-studio-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="text-center m-16 mx-auto">
      <h3 className="my-8 py-6 font-bold text-3xl">
        CLIENTS <br /> <span className="text-[#6DA9E4]">TESTIMONIALS</span>
      </h3>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-12 px-6">
              <div className="col-span-12">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-36 w-36 rounded-lg mx-auto"
                />
                <h4 className="my-4">{review.name}</h4>
                <div className="flex justify-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
                <div className="flex flex-col justify-center items-center my-6 px-4 md:px-24">
                  <p className="flex items-center pb-8">
                    <FaQuoteLeft className="text-4xl" />{" "}
                    <span className="md:px-4">{review.review}</span>
                    <FaQuoteRight className="text-4xl" />
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
