import { useEffect, useRef } from "react";
import Headers from "../../Components/Headers/Headers";
import SectionHeader from "../../Components/sectionHeader/sectionHeader";
import about from "../../assets/bg/about.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaComment,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
  FaUser,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
import "aos/dist/aos.css";
import AOS from "aos";

const ContactUsPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9owsuev",
        "template_81ua4dw",
        form.current,
        "gOC336l7OVnfwQdyD"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message");
        }
      );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Melody Dance Studio</title>
      </Helmet>
      <Headers backgroundImage={`${about}`} pageTitle={"About Us"}></Headers>

      <div className="bg-pink-50">
        <div className=" max-w-screen-2xl mx-auto p-0 md:p-10">
          <div className="card-body">
            <h2>
              <SectionHeader
                firstPart={"GET IN TOUCH"}
                firstPartStyle={"text-xl md:text-4xl mb-2"}
                secondPart={
                  "Its this founding principle that has helped our organizations as well as our clients become a defining force in the industry."
                }
                secondPartStyle={"text-black text-xl capitalize"}
                styles={"text-center mb-8"}
              ></SectionHeader>
            </h2>

            <div>
              <div className="flex flex-col md:flex-row justify-center gap-8 pt-8">
                <div
                  className="w-full lg:w-1/2 px-4 sm:px-8 md:pr-0 md:pl-12 xl:px-0"
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                >
                  <div className="card card-compact bg-base-100 shadow-2xl p-4">
                    <div className="card-body">
                      <LoadScript
                        googleMapsApiKey={
                          "AIzaSyBAjx8pOLHLUbykQQcdBfbsYCzTRDCjcpY"
                        }
                      >
                        <GoogleMap
                          mapContainerStyle={{
                            width: "100%",
                            height: "440px",
                          }}
                          zoom={14}
                          center={{
                            lat: 23.7465,
                            lng: 90.375,
                          }}
                        >
                          <Marker
                            position={{
                              lat: 23.7465,
                              lng: 90.375,
                            }}
                          />
                        </GoogleMap>
                      </LoadScript>
                    </div>
                  </div>
                </div>

                <div
                  className="w-full lg:w-1/2 px-4 sm:px-8 md:pl-0 xl:px-0"
                  data-aos="zoom-in-left"
                  data-aos-duration="1000"
                >
                  <div className="card shadow-2xl bg-base-100">
                    <h2 className="pl-10 pt-8 text-2xl font-bold capitalize mb-4">
                      Connect with Us!
                    </h2>
                    <div className="card-body">
                      <form ref={form} onSubmit={sendEmail}>
                        <div className="md:flex md:gap-4">
                          <div className="form-control md:w-1/2 relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                              <FaUser className="text-gray-500" />
                            </span>
                            <input
                              type="text"
                              name="from_name"
                              placeholder="Your Name"
                              className="border border-gray-300 pl-10 py-2 rounded-md w-full"
                              required
                            />
                          </div>

                          <div className="form-control md:w-1/2 relative mt-3 md:mt-0">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                              <FaPhoneAlt className="text-gray-500" />
                            </span>
                            <input
                              type="text"
                              name="phone"
                              placeholder="Phone"
                              className="border border-gray-300 pl-10 py-2 rounded-md w-full"
                            />
                          </div>
                        </div>

                        <div className="form-control relative mt-3">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <FaEnvelope className="text-gray-500" />
                          </span>
                          <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            className="border border-gray-300 pl-10 py-2 rounded-md w-full"
                            required
                          />
                        </div>

                        <div className="form-control relative mt-3">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                            <FaTag className="text-gray-500" />
                          </span>
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="border border-gray-300 pl-10 py-2 rounded-md w-full"
                          />
                        </div>

                        <div className="form-control relative mt-3">
                          <span className="absolute left-3 top-6 transform -translate-y-1/2">
                            <FaComment className="text-gray-500" />
                          </span>
                          <textarea
                            name="message"
                            placeholder="Message"
                            className="border border-gray-300 pl-10 h-40 py-2 rounded-md w-full"
                            required
                          ></textarea>
                        </div>

                        <div className="form-control mt-3">
                          <input
                            className="btn btn-sm bg-[#F19797]"
                            type="submit"
                            value="Send Message"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
