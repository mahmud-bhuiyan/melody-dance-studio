import logo from "../../../../public/logo.png";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <img className="rounded-full w-10 h-10" src={logo} alt="" />
          <p>
            Melody Dance Studio
            <br />
            Providing joyful moments through dance!
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
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
        </div>
        <div>
          <span className="footer-title">Links</span>
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
        <div>
          <span className="footer-title">Contact Us</span>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <p>
              ABC Tower, Dhaka, <br className="hidden md:flex" /> Bangladesh.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <p>+8801234567890</p>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <p>info@example.com</p>
          </div>
        </div>
        <div>
          <span className="footer-title">Social Links</span>
          <div className="flex gap-4">
            <a className="link link-hover">
              <FaFacebookSquare />
            </a>
            <a className="link link-hover">
              <FaInstagram />
            </a>
            <a className="link link-hover">
              <FaTwitter />
            </a>
            <a className="link link-hover">
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
      <hr />
      <footer className="footer items-center p-4 bg-neutral text-neutral-content">
        <div className="items-center grid-flow-col">
          <p>© {currentYear} Melody Dance Studio - All rights reserved</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <p>Designed & Developed By: Mahmud</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
