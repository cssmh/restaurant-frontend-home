import dot from "../assets/dot.png";
import img1 from "../assets/burger.jpeg";
import img2 from "../assets/pizza.png";
import img3 from "../assets/fries.jpeg";
import img4 from "../assets/chicken.jpeg";
import img5 from "../assets/burger.jpeg";
import img6 from "../assets/pizza.png";
import img7 from "../assets/fries.jpeg";
import img8 from "../assets/chicken.jpeg";
import plate from "../assets/plate.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const foodData = [
  {
    image: img1,
    name: "Cheesy Burger",
    description: "Burger with melted cheese and crispy veggies.",
  },
  {
    image: img2,
    name: "Classic Pizza",
    description: "Pizza with fresh toppings and a crispy crust.",
  },
  {
    image: img3,
    name: "Golden Fries",
    description: "Crispy golden fries, perfect as a snack.",
  },
  {
    image: img4,
    name: "Grilled Chicken",
    description: "Tender grilled chicken with a smoky flavor.",
  },
  {
    image: img5,
    name: "Double Cheeseburger",
    description: "Double the cheese, double the deliciousness.",
  },
  {
    image: img6,
    name: "Pepperoni Pizza",
    description: "Classic pepperoni pizza with a savory taste.",
  },
  {
    image: img7,
    name: "Spicy Fries",
    description: "Fries with a spicy kick to spice up your day.",
  },
  {
    image: img8,
    name: "BBQ Chicken",
    description: "Grilled chicken with a tangy BBQ sauce.",
  },
];

const PopularFood = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="relative py-5 lg:py-16 bg-[#fbf7f2]">
      <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-[66%] -rotate-[70deg] w-1/2 lg:w-1/4">
        <img
          src={plate}
          alt="Left Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between px-6 relative">
          <div>
            <div className="flex items-center gap-2">
              <img src={dot} alt="" />
              <h3 className="text-sm lg:text-lg font-semibold text-[#c4342b]">
                Crispy, Every Bite Taste
              </h3>
            </div>
            <h1 className="text-xl lg:text-3xl font-bold uppercase text-[#333]">
              Popular Food Items
            </h1>
          </div>
          <div className="hidden md:flex justify-end items-center space-x-4 w-1/3 pr-6">
            <button
              className="p-2 bg-gray-200 rounded-full"
              onClick={handlePrev}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="p-2 bg-gray-200 text-rose-600 rounded-full"
              onClick={handleNext}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto lg:mt-7">
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 1500 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {foodData.map((food, index) => (
              <SwiperSlide key={index}>
                <div className="m-5 lg:m-0 bg-white rounded-lg shadow-lg p-4 lg:p-4 text-center">
                  <img
                    src={food.image}
                    alt={`Food ${index + 1}`}
                    className="mx-auto lg:w-full h-28 lg:h-40 object-cover rounded-md mb-2 lg:mb-4"
                  />
                  <h3 className="text-xl font-semibold lg:mb-2">{food.name}</h3>
                  <p className="text-sm text-gray-500">{food.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="lg:hidden flex justify-center my-1 space-x-4">
            <button
              className="p-2 bg-gray-200 rounded-full"
              onClick={handlePrev}
            >
              <IoIosArrowBack />
            </button>
            <button
              className="p-2 bg-gray-200 text-rose-600 rounded-full"
              onClick={handleNext}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularFood;
