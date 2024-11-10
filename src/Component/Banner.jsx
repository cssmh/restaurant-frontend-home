import banner from "../assets/meat.jpeg";
import vector from "../assets/Vector.png";

const Banner = () => {
  return (
    <div className="bg-[#c4342b] py-5 md:py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between md:p-8 relative">
        <div className="text-white md:w-1/2 relative mx-5 md:mx-0 z-10">
          <h1 className="text-3xl md:text-7xl uppercase font-semibold mb-4">
            Taste the authentic Saudi cuisine
          </h1>
          <p className="mb-4 md:mb-6">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="bg-[#febf00] text-black font-medium px-4 py-2 rounded">
            Explore Menu
          </button>
        </div>
        <div className="relative m-5 md:m-0 md:w-1/2">
          <img
            src={banner}
            alt="Delicious Saudi Cuisine"
            className="md:w-[600px] md:h-[400px] ml-auto h-auto md:rounded-lg"
          />
          <div className="absolute -bottom-3 w-[72px] mx-auto font-bold uppercase right-3 md:-right-10 bg-yellow-400 text-black py-2 px-4 rounded-full">
            Today Offer
          </div>
          <div className="absolute -top-6 right-3 md:-right-4 text-white z-20">
            <img src={vector} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
