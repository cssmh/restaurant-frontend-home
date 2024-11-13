import banner from "../assets/meat.jpeg";
import vector from "../assets/Vector.png";
import todayOffer from "../assets/todayOffer.png";

const Banner = () => {
  return (
    <div className="relative bg-[#c4342b] py-5 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <div className="text-white lg:w-4/5 lg:relative mx-5 lg:mx-0 z-10">
          <h1 className="text-3xl lg:text-7xl uppercase font-semibold mb-4 inline-block">
            <span className="lg:bg-[#c4342b] lg:bg-opacity-50 inline-block">
              Taste the authentic <br /> Saudi cuisine
            </span>
          </h1>
          <p className="text-base mb-2 lg:mb-6">
            Among the best Saudi chefs in the world, serving <br /> you
            something beyond flavor.
          </p>
          <button className="bg-[#febf00] text-black font-medium px-4 py-2 rounded">
            Explore Menu
          </button>
        </div>
        <div>
          <div className="z-50 lg:z-0 lg:absolute relative lg:top-16 lg:right-40 2xl:right-56 mt-3 lg:mt-0 p-5">
            <img
              src={banner}
              alt="Delicious Saudi Cuisine"
              className="lg:w-[470px] lg:h-[380px] object-cover transform scale-x-[-1]"
            />
            {/* <div className="absolute bottom-8 lg:bottom-5 lg:w-[72px] mx-auto font-bold uppercase right-7 lg:-right-2 bg-[#febf00] lg:bg-yellow-400 text-black py-3 px-3 text-center lg:px-4 rounded-full">
            Today <br /> Offer
          </div> */}
            <div className="absolute bottom-8 p-1 lg:bottom-5 right-7 lg:-right-3 bg-[#febf00] lg:bg-yellow-400 rounded-full">
              <img
                src={todayOffer}
                alt="offer img"
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full"
              />
            </div>
          </div>
          <div className="absolute top-[218px] lg:top-[59px] right-5 lg:right-36 text-white z-0 lg:z-20">
            <img src={vector} className="w-4/5 lg:w-2/3" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
