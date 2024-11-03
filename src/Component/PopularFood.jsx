import plate from "../assets/plate.png";
import img1 from "../assets/burger.jpeg";
import img2 from "../assets/pizza.png";
import img3 from "../assets/fries.jpeg";
import img4 from "../assets/chicken.jpeg";
import img5 from "../assets/burger.jpeg";
import img6 from "../assets/pizza.png";
import img7 from "../assets/fries.jpeg";
import img8 from "../assets/chicken.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PopularFood = () => {
  return (
    <div className="bg-[#f5f5f5] py-16 relative">
      <div className="max-w-7xl mx-auto flex items-center px-6 relative">
        {/* Plate Image on Left */}
        <div className="w-1/3 hidden md:block">
          <img src={plate} alt="Plate" className="w-full opacity-50" />
        </div>

        {/* Middle Content */}
        <div className="w-full md:w-1/3 text-center px-6">
          <h3 className="text-3xl font-semibold mb-4 text-[#c4342b]">
            Crispy, Every Bite Taste
          </h3>
          <h1 className="text-5xl font-bold uppercase mb-6 text-[#333]">
            Popular Food Items
          </h1>
        </div>

        {/* Carousel Navigation on Right */}
        <div className="hidden md:flex justify-end items-center space-x-4 w-1/3 pr-6">
          <button className="p-2 bg-gray-200 rounded-full">
            <FaArrowLeft />
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="max-w-7xl mx-auto mt-8 px-6">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 2500 }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {[img1, img2, img3, img4, img5, img6, img7, img8].map(
            (image, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                  <img
                    src={image}
                    alt={`Food ${index + 1}`}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    Food Item {index + 1}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Delicious taste that you&lsquo;ll love.
                  </p>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularFood;
