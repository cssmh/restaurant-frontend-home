import About from "./Component/About";
import Banner from "./Component/Banner";
import BookNow from "./Component/BookNow";
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
    </div>
  );
};

export default Home;
