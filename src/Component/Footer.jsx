import { LuPhoneCall } from "react-icons/lu";
import bg from "../assets/footer.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaTimes,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="relative bg-cover bg-center py-8 lg:py-20 mt-6 md:mt-16"
      style={{ backgroundImage: `url(${bg})`, opacity: 1 }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative max-w-6xl mx-auto px-6 text-white text-center">
        <h2 className="text-2xl md:text-3xl uppercase font-semibold mb-8">
          We are ready to give you the best dining experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {/* Grid Items */}
          <div className="flex flex-col items-center">
            <FaClock className="text-2xl mb-2 text-yellow-400" />
            <h4 className="text-xl font-bold uppercase">Opening Hours</h4>
            <p className="text-sm">Mon - Sun</p>
            <p className="text-sm">9:00 AM to 11:30 PM</p>
          </div>
          <div className="flex flex-col items-center">
            <LuPhoneCall className="text-2xl mb-2 text-yellow-400" />
            <h4 className="text-xl font-bold uppercase">Let&lsquo;s talk</h4>
            <p className="text-sm">Phone: 1-800-222-4545</p>
            <p className="text-sm">Fax: 1-800-222-4545</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-2xl mb-2 text-yellow-400" />
            <h4 className="text-xl font-bold uppercase">BOOK A TABLE</h4>
            <p className="text-sm">Email: demo@website.com</p>
            <p className="text-sm">Support: support@website.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-2xl mb-2 text-yellow-400" />
            <h4 className="text-xl font-bold uppercase">Our Address</h4>
            <p className="text-sm">123 Street, New York City</p>
            <p className="text-sm">United States Of America.</p>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl border-2 border-white rounded-full p-2"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl border-2 border-white rounded-full p-2"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl border-2 border-white rounded-full p-2"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl border-2 border-white rounded-full p-2"
          >
            <FaTimes />
          </a>
        </div>
        <p className="text-sm">
          © 2023 <span className="text-yellow-400">Niomax</span> All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
