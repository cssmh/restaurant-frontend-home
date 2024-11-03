import About from "./Component/About";
import Banner from "./Component/Banner";
import Navbar from "./Component/Navbar";
import PopularFood from "./Component/PopularFood";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <PopularFood />
    </div>
  );
};

export default Home;
