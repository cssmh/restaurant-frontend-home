import aboutImage from "../assets/explore.avif";
import { FaPhone } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-[#f9f9f9] py-12">
      <div className="max-w-6xl mx-auto flex p-8 relative">
        <div className="relative w-1/2">
          <img
            src={aboutImage}
            alt="About Experience"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 left-0 bg-[#c4342b] text-white p-4">
            <h2 className="text-3xl font-bold">50+ Market Experiences</h2>
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2 pl-8">
          <div className="space-x-6 pb-5">
            <button className="bg-[#b52b1d] py-2 px-3 text-white">About</button>
            <button>Experience</button>
            <button>Contact</button>
          </div>
          <h1 className="text-4xl font-semibold mb-4">
            Exceptional culinary experience and delicious food
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur
            adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            magna minim veniam nostrud exercitation.
          </p>
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
    </div>
  );
};

export default About;
