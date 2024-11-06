import user from "../assets/user.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { FaPlay } from "react-icons/fa";

const Customer = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center bg-gray-100 py-16 px-6">
      <div className="absolute left-0 top-0 md:-ml-40 w-1/2 md:w-1/3">
        <img
          src={img1}
          alt="Left Background"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="absolute right-0 top-0 md:-mr-40 w-1/2 md:w-1/3">
        <img
          src={img2}
          alt="Right Background"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <p className="text-lg text-gray-500 font-semibold mb-2">
          Crispy, Every Bite Taste
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          What Some of My Customers Say
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between bg-yellow-400 p-6 rounded-md shadow-lg space-y-6 md:space-y-0 md:space-x-6">
          <p className="text-gray-800 max-w-md">
            "You can't go wrong with Chicken Mandi, I had it twice. The chicken
            was cooked perfectly, juicy & soft (usually mandi chicken is a bit
            dry). I would definitely recommend it."
          </p>
          <div className="flex-shrink-0">
            <img
              src={user}
              alt="User"
              className="w-16 h-16 rounded-full border-2 border-gray-800"
            />
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

export default Customer;
