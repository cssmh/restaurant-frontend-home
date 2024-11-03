import { FaStar } from "react-icons/fa";
import banner from "../assets/meat.webp";

const Banner = () => {
  return (
    <div className="bg-[#c4342b] py-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-8 relative">
        <div className="text-white w-1/2 relative z-10">
          <h1 className="text-7xl uppercase font-semibold mb-4">
            Taste the authentic Saudi cuisine
          </h1>
          <p className="mb-6">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="bg-[#febf00] text-black font-medium px-4 py-2 rounded">
            Explore Menu
          </button>
        </div>
        <div className="relative w-1/2">
          <img
            src={banner}
            alt="Delicious Saudi Cuisine"
            className="md:w-[600px] md:h-[400px] ml-auto h-auto rounded-lg"
          />
          <div className="absolute -bottom-3 w-[72px] mx-auto font-bold uppercase -right-10 bg-yellow-400 text-black py-2 px-4 rounded-full">
            Today Offer
          </div>
          <div className="absolute -top-6 -right-4 text-white z-20">
            <FaStar size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
