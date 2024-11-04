import bg from "../assets/footer.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTimes,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20 mt-16"
      style={{ backgroundImage: `url(${bg})`, opacity: 1 }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative max-w-6xl mx-auto px-6 text-white text-center">
        <h2 className="text-xl md:text-3xl uppercase font-semibold mb-8">
          We are ready to give you the best dining experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Grid Items */}
          <div className="flex flex-col items-center">
            <FaTimes className="text-2xl mb-2" />
            <h4 className="text-xl font-bold uppercase">Opening Hours</h4>
            <p className="text-sm">Mon - Sun</p>
            <p className="text-sm">9:00 AM to 11:30 PM</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTimes className="text-2xl mb-2" />
            <h4 className="text-xl font-bold uppercase">Let&lsquo;s talk</h4>
            <p className="text-sm">Phone: 1-800-222-4545</p>
            <p className="text-sm">Fax: 1-800-222-4545</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTimes className="text-2xl mb-2" />
            <h4 className="text-xl font-bold">BOOK A TABLE</h4>
            <p className="text-sm">Email: demo@website.com</p>
            <p className="text-sm">Support: support@website.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaTimes className="text-2xl mb-2" />
            <h4 className="text-xl font-bold uppercase">Our Address</h4>
            <p className="text-sm">123 Stree New York City , United</p>
            <p className="text-sm">States Of America.</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTimes className="text-xl" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm">© 2023 Niomax All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
