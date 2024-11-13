import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
import { FaPlay } from "react-icons/fa";
import user from "../assets/momin.jpeg";
import user2 from "../assets/user.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import dot from "../assets/dot.png";
import star from "../assets/star.svg";

const testimonials = [
  {
    text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
    image: user,
    name: "Md. Momin Hossain",
  },
  {
    text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
    image: user2,
    name: "John Doe",
  },
  {
    text: "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
    image: user,
    name: "Alex Johnson",
  },
];

const Testimonial = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="relative flex flex-col items-center pt-5 md:pt-10 px-6 overflow-hidden">
      <div className="hidden lg:block absolute left-0 top-[22%] -rotate-[77deg] transform -translate-y-1/2 -translate-x-[45%] w-1/2 lg:w-1/4">
        <img
          src={img1}
          alt="Left Background"
          className="object-cover w-[60%] h-full"
        />
      </div>
      <div className="hidden lg:block absolute right-0 top-[80%] transform -translate-y-1/2 translate-x-2/4 w-1/2 rotate-45 lg:w-1/3">
        <img
          src={img2}
          alt="Right Background"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex justify-between flex-col lg:flex-row mb-8">
          <div>
            <p className="flex items-center gap-2 text-lg text-[#bd1f17] font-semibold mb-2">
              <img src={dot} alt="" />
              <span>Crispy, Every Bite Taste</span>
            </p>
            <h2 className="text-3xl uppercase md:text-4xl font-bold text-gray-800">
              What Some of My Testimonials Say
            </h2>
          </div>
          <div className="hidden lg:flex justify-center gap-4 mt-6 lg:mt-0">
            <button className="text-xl" onClick={handlePrev}>
              <IoIosArrowBack />
            </button>
            <button className="text-xl text-rose-600" onClick={handleNext}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
        <Swiper
          ref={swiperRef}
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col-reverse lg:flex-row bg-[#febf00] text-center rounded-lg shadow-md">
                <div className="relative md:w-[40%] flex flex-col items-center space-y-3 p-6 lg:p-12">
                  <div className="flex-grow flex items-center justify-center text-gray-800 space-x-2">
                    <span className="font-bold text-3xl">{"<<"}</span>
                    <p className="text-gray-800">{testimonial.text}</p>
                  </div>
                  <div className="w-full flex justify-between items-center border-b-2 pb-2 border-gray-800">
                    <div>
                      <p className="text-left font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="text-left text-sm text-gray-500">
                        Jeddah, Saudi
                      </p>
                    </div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full border border-gray-500"
                    />
                  </div>
                  <div className="absolute -left-0 top-[233px] lg:top-[277px] flex items-center space-x-4">
                    <img src={star} alt="" className="w-1/2 lg:w-[70%]" />
                  </div>
                </div>
                <div className="relative md:w-[60%] flex items-center justify-center">
                  <img
                    src={img3}
                    alt="Video Thumbnail"
                    className="w-full h-[170px] lg:h-[370px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black opacity-40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaPlay className="text-black text-4xl bg-yellow-400 p-3 rounded-full" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-4 lg:hidden flex justify-center gap-4">
          <button className="text-xl" onClick={handlePrev}>
            <IoIosArrowBack />
          </button>
          <button className="text-xl text-rose-600" onClick={handleNext}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
