import { useState } from "react";
import aboutImage from "../assets/about.jpeg";
import { FaMedal, FaPhone } from "react-icons/fa";
import plate from "../assets/plater.png";
import { BsBoxSeam } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <p>
            We provide an exceptional culinary experience with delicious food
            crafted to perfection. Our commitment is to deliver quality and
            taste in every dish. Our commitment is to deliver quality and taste
            in every dish. Our commitment is to deliver quality and taste in
            every dish.Our commitment is to deliver quality and taste in every
            dish.
          </p>
        );
      case "experience":
        return (
          <p>
            With over 50 years of market experience, we have perfected our
            recipes and services to provide you with the best dining
            experience.Our commitment is to deliver quality and taste in every
            dish.Our commitment is to deliver quality and taste in every
            dish.Our commitment is to deliver quality and taste in every dish.
            dish.Our commitment is to deliver quality and taste in every dish.
          </p>
        );
      case "contact":
        return (
          <p>
            Reach out to us at (+123) 456-7890 or visit us at our main location
            to experience our amazing dishes and hospitality.Our commitment is
            to deliver quality and taste in every dish.Our commitment is to
            deliver quality and taste in every dish.Our commitment is to deliver
            quality and taste in every dish.Our commitment is to deliver quality
            and taste in every dish.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#f9f9f9] py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-5 md:gap-10 p-4 md:p-8 relative">
        <div className="relative md:w-1/2">
          <img
            src={aboutImage}
            alt="About Experience"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 p-2 left-0 flex items-center justify-center bg-white m-5">
            <div className="w-20 h-20 flex items-center justify-center border-4 border-yellow-400 rounded-full text-2xl font-bold">
              50+
            </div>
            <span className="p-2">
              Market <br /> Experience
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center md:w-1/2">
          <div className="space-x-6 pb-5">
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
          <h1 className="text-4xl font-semibold mb-4 uppercase">
            Exceptional culinary experience and delicious food
          </h1>
          <div className="mb-6">{renderContent()}</div>
          <div className="flex items-center">
            <button className="bg-[#febf00] text-black font-medium px-4 py-2 rounded mr-4">
              About More
            </button>
            <span className="flex items-center text-lg">
              <FaPhone className="mr-2" />
              <span>(+123) 456-7890</span>
            </span>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative">
        <img
          src={plate}
          alt="Plate of Food"
          className="absolute -right-0 -top-20 w-[100px] object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <div className="flex gap-3 justify-center items-center">
          <div className="p-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <BsBoxSeam className="text-3xl text-[#c4342b]" />
          </div>
          <div>
            <h3 className="font-semibold text-2xl uppercase">Fast Delivery</h3>
            <p className="text-sm">Within 30 minutes</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <div className="p-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <FaMedal className="text-3xl text-[#c4342b]" />
          </div>
          <div>
            <h3 className="font-semibold text-2xl uppercase">
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
            <h3 className="font-semibold text-2xl uppercase">
              Pickup Delivery
            </h3>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
