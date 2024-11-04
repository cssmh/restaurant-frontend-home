import About from "./Component/About";
import Banner from "./Component/Banner";
import BookNow from "./Component/BookNow";
import Customer from "./Component/Customer";
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
      <Customer />
      <Footer />
    </div>
  );
};

export default Home;
