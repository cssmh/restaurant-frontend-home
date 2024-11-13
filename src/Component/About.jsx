import { useState } from "react";
import aboutImage from "../assets/about.jpeg";
import { FiPhoneCall } from "react-icons/fi";
import { FaMedal } from "react-icons/fa";
import plate from "../assets/plate.png";
import { BsBoxSeam } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return {
          title: "Exceptional culinary experience and delicious food",
          text: (
            <p>
              We provide an exceptional culinary experience with delicious food
              crafted to perfection. Our commitment is to deliver quality and
              taste in every dish. Our commitment is to deliver quality and
              taste in every dish. Our commitment is to deliver quality and
              taste in every dish.Our commitment is to deliver quality and taste
              in every dish.
            </p>
          ),
        };
      case "experience":
        return {
          title: "Years of experience in delivering quality food",
          text: (
            <p>
              With over 50 years of market experience, we have perfected our
              recipes and services to provide you with the best dining
              experience.Our commitment is to deliver quality and taste in every
              dish.Our commitment is to deliver quality and taste in every
              dish.Our commitment is to deliver quality and taste in every dish.
              dish.Our commitment is to deliver.
            </p>
          ),
        };
      case "contact":
        return {
          title: "Contact us for an extraordinary dining experience",
          text: (
            <p>
              Reach out to us at (+123) 456-7890 or visit us at our main
              location to experience our amazing dishes and hospitality.Our
              commitment is to deliver quality and taste in every dish.Our
              commitment is to deliver quality and taste in every dish.Our
              commitment is to deliver quality and taste in every dish.Our
              commitment is to deliver quality and taste in every dish.
            </p>
          ),
        };
      default:
        return null;
    }
  };

  const { title, text } = renderContent();

  return (
    <div className="relative bg-[#f9f9f9] py-6 lg:py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-5 md:gap-10 px-5 lg:px-0 py-4 md:py-8 relative">
        <div className="relative md:w-1/2">
          <img
            src={aboutImage}
            alt="About Experience"
            className="w-full h-auto"
          />
          <div className="absolute rounded-xl top-0 p-2 left-0 flex items-center justify-center bg-white m-3 lg:m-5">
            <div className="w-12 lg:w-20 h-12 lg:h-20 flex items-center justify-center border-4 border-yellow-400 rounded-full lg:text-2xl font-bold">
              50+
            </div>
            <span className="p-1 lg:p-2">
              Market <br /> Experience
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center md:w-1/2 mb-auto">
          <div className="space-x-6 pb-3">
            <button
              onClick={() => setActiveTab("about")}
              className={`py-2 px-3 ${
                activeTab === "about"
                  ? "bg-[#b52b1d] text-white"
                  : "text-gray-700"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`py-2 px-3 ${
                activeTab === "experience"
                  ? "bg-[#b52b1d] text-white"
                  : "text-gray-700"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`py-2 px-3 ${
                activeTab === "contact"
                  ? "bg-[#b52b1d] text-white"
                  : "text-gray-700"
              }`}
            >
              Contact
            </button>
          </div>
          <h1 className="text-3xl font-semibold mb-2 uppercase">{title}</h1>
          <div className="mb-4 text-gray-600">{text}</div>
          <div className="flex items-center">
            <button className="bg-[#febf00] text-black font-medium px-4 py-2 rounded mr-4">
              About More
            </button>
            <span className="flex items-center text-lg font-semibold">
              <FiPhoneCall className="mr-2 text-[#bd1f17]" />
              <span>(+123) 456-7890</span>
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <div className="flex gap-3 justify-center items-center">
          <div className="p-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <BsBoxSeam className="text-3xl text-[#c4342b]" />
          </div>
          <div>
            <h3 className="font-semibold text-xl lg:text-2xl uppercase">
              Fast Delivery
            </h3>
            <p className="text-sm">Within 30 minutes</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <div className="p-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <FaMedal className="text-3xl text-[#c4342b]" />
          </div>
          <div>
            <h3 className="font-semibold text-xl lg:text-2xl uppercase">
              Absolute Dining
            </h3>
            <p className="text-sm">Best Buffet Restaurant</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <div className="p-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <IoBagHandleOutline className="text-3xl text-[#c4342b]" />
          </div>
          <div>
            <h3 className="font-semibold text-xl lg:text-2xl uppercase">
              Pickup Delivery
            </h3>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:block absolute -rotate-[28deg] -right-36 top-[55%]">
        <img
          src={plate}
          alt="Plate of Food"
          className="w-[225px] object-cover"
        />
      </div>
    </div>
  );
};

export default About;
