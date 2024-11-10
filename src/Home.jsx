import About from "./Component/About";
import Banner from "./Component/Banner";
import BookNow from "./Component/BookNow";
import Testimonial from "./Component/Testimonial";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import PopularFood from "./Component/PopularFood";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <PopularFood />
      <BookNow />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
