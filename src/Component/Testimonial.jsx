import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import user from "../assets/user.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import star from "../assets/star.svg";

const testimonials = [
  {
    text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
    image: user,
    name: "John Doe",
  },
  {
    text: "The flavors were amazing, and I loved the atmosphere. Definitely a must-try if you're in town! You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
    image: user,
    name: "Jane Smith",
  },
  {
    text: "Incredible experience! The food was delicious, and the staff was extremely friendly.Incredible experience! The food was delicious, and the staff was extremely friendly.Incredible experience! The food was delicious, and the staff was extremely friendly.",
    image: user,
    name: "Alex Johnson",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { text, image, name } = testimonials[currentIndex];

  return (
    <div className="relative flex flex-col items-center py-8 md:py-10 px-6 overflow-hidden">
      <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-3/4 w-1/2 lg:w-1/4">
        <img
          src={img1}
          alt="Left Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="hidden lg:block absolute right-0 top-2/3 transform -translate-y-1/2 translate-x-2/4 w-1/2 rotate-45 lg:w-1/3">
        <img
          src={img2}
          alt="Right Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <div className="flex justify-between">
          <div>
            <p className="text-lg text-gray-500 font-semibold mb-2">
              Crispy, Every Bite Taste
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
              What Some of My Testimonials Say
            </h2>
          </div>
          <div className="flex justify-center gap-4">
            <button className="text-xl" onClick={handlePrev}>
              <IoIosArrowBack />
            </button>
            <button className="text-xl" onClick={handleNext}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row max-w-5xl 2xl:max-w-[100%] mx-auto">
          <div className="relative md:w-[40%] md:h-80 z-10 text-center">
            <div className="relative flex flex-col bg-yellow-400 p-6 space-y-6 text-center h-full">
              <div className="flex-grow flex items-center justify-center text-gray-800 space-x-2">
                <span className="font-bold text-3xl">{"<<"}</span>
                <p className="text-gray-800 max-w-md mx-auto">{text}</p>
              </div>
              <div className="flex justify-between items-center border-b-2 border-gray-800 m-6 pb-3">
                <div>
                  <p className="text-left font-semibold">{name}</p>
                  <p className="text-sm text-gray-500">Jeddah, Saudi</p>
                </div>
                <img
                  src={image}
                  alt={name}
                  className="w-12 h-12 object-cover rounded-full border border-gray-500"
                />
              </div>
              <div className="absolute -left-0 top-52 flex items-center space-x-4">
                <img src={star} alt="" className="w-[80%]" />
              </div>
            </div>
          </div>
          <div className="relative md:w-[60%] md:h-80 flex items-center justify-center">
            <img
              src={img3}
              alt="Video Thumbnail"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <FaPlay className="text-black text-4xl bg-yellow-400 p-3 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
