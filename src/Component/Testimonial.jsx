import { useState } from "react";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import user from "../assets/user.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const testimonials = [
  {
    text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
    image: user,
    name: "John Doe",
  },
  {
    text: "The flavors were amazing, and I loved the atmosphere. Definitely a must-try if you're in town!",
    image: user,
    name: "Jane Smith",
  },
  {
    text: "Incredible experience! The food was delicious, and the staff was extremely friendly.",
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
    <div className="relative flex flex-col items-center bg-gray-100 py-16 px-6 overflow-hidden">
      <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2/4 w-1/2 lg:w-1/4">
        <img
          src={img1}
          alt="Left Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2/4 w-1/2 rotate-45 lg:w-1/3">
        <img
          src={img2}
          alt="Right Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <p className="text-lg text-gray-500 font-semibold mb-2">
          Crispy, Every Bite Taste
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          What Some of My Testimonials Say
        </h2>
        <div className="relative bg-yellow-400 p-6 rounded-md shadow-lg space-y-6 text-center">
          <p className="text-gray-800 max-w-md mx-auto">{text}</p>
          <div className="flex justify-center items-center space-x-4">
            <img
              src={image}
              alt={name}
              className="w-16 h-16 rounded-full border-2 border-gray-800"
            />
            <p className="font-semibold">{name}</p>
          </div>
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4">
            <button
              className="p-2 bg-gray-800 text-white rounded-full"
              onClick={handlePrev}
            >
              <FaArrowLeft />
            </button>
            <button
              className="p-2 bg-gray-800 text-white rounded-full"
              onClick={handleNext}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-8 md:mt-0 md:ml-12 flex items-center">
        <img
          src={img3}
          alt="Video Thumbnail"
          className="w-56 h-56 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <FaPlay className="text-white text-3xl bg-black bg-opacity-75 p-4 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
