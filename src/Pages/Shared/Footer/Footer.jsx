import logo from "../../../../public/logo.png";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegClock,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="px-4 pt-10 pb-4 xl:px-10 bg-[#F19797] text-white">
        {/* logo */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <img className="rounded-full w-16 h-16" src={logo} alt="" />
          <p>
            <span className="font-semibold">Melody Dance Studio</span>
            <br />
            <i>Providing joyful moments through dance!</i>
          </p>
        </div>

        {/* info cards */}
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          <div className="w-full h-44 bg-[#F19797] text-white shadow-xl p-8 flex flex-col items-center">
            <FaRegClock className="text-3xl mb-4" />
            <p className="text-center">SUNDAY TO THURSDAY</p>
            <p className="text-center">10:00 AM - 09:00 PM</p>
          </div>

          <div className="w-full h-44 bg-[#F19797] text-white shadow-xl p-8 flex flex-col items-center">
            <FaMapMarkerAlt className="text-4xl mb-4" />
            <p className="text-center">
              123, ABC Tower, <br /> Dhanmondi, Dhaka-1214, <br /> Bangladesh.
            </p>
          </div>

          <div className="w-full h-44 bg-[#F19797] text-white shadow-xl p-8 flex flex-col items-center">
            <FaEnvelope className="text-3xl mb-4" />
            <p className="text-center">E-MAIL</p>
            <p className="text-center">info@example.com</p>
          </div>

          <div className="w-full h-44 bg-[#F19797] text-white shadow-xl p-8 flex flex-col items-center">
            <FaPhoneAlt className="text-3xl mb-4" />
            <p className="text-center">CALL US</p>
            <p>+8801234567890</p>
          </div>
        </div>

        {/* social icons */}
        <div className="flex justify-center mt-10 mb-6 gap-4">
          <a className="link link-hover">
            <FaFacebookSquare className="text-3xl rounded-xl" />
          </a>
          <a className="link link-hover">
            <FaInstagram className="text-3xl rounded-xl" />
          </a>
          <a className="link link-hover">
            <FaTwitter className="text-3xl rounded-xl" />
          </a>
          <a className="link link-hover">
            <FaYoutube className="text-3xl rounded-xl" />
          </a>
        </div>

        {/* links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a className="link link-hover" href="#">
            Dance Classes
          </a>
          <a className="link link-hover" href="#">
            Choreography
          </a>
          <a className="link link-hover" href="#">
            Performance
          </a>
          <a className="link link-hover" href="#">
            Workshops
          </a>
          <a className="link link-hover" href="#">
            About us
          </a>
          <a className="link link-hover" href="#">
            Contact
          </a>
          <a className="link link-hover" href="#">
            Events
          </a>
          <a className="link link-hover" href="#">
            Testimonials
          </a>
        </div>

        {/*  copyright part */}
        <hr className="max-w-screen-2xl mx-auto m-4" />

        <div className="max-w-screen-2xl mx-auto footer flex flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="text-center mb-4 md:mb-0">
            <p>© {currentYear} Melody Dance Studio - All rights reserved</p>
          </div>
          <div className="md:place-self-center md:justify-self-end">
            <a
              href="https://mahmud-bhuiyan.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Designed & Developed By: Mahmud
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
