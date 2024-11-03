import img from "../assets/booknow.jpeg";

const BookNow = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-white">
        <div className="mb-8">
          <h5 className="text-lg font-semibold mb-2 text-[#9f1e18]">
            Book Now
          </h5>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 uppercase">
            Book Your Table
          </h2>
          <p className="text-sm lg:text-base max-w-md">
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
        <div className="rounded-lg shadow-lg max-w-lg">
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 bg-black"
                  placeholder="Your Name *"
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border bg-black rounded focus:outline-none focus:ring-2"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="relative flex-1">
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black text-white"
                />
              </div>
              <div className="flex-1 mt-4 md:mt-0">
                <input
                  type="number"
                  id="people"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 bg-black"
                  placeholder="Total People"
                />
              </div>
            </div>
            <div>
              <textarea
                id="message"
                className="w-full px-4 py-2 border bg-black rounded focus:outline-none focus:ring-2"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="bg-[#febf00] text-black font-medium px-4 py-2 rounded">
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
