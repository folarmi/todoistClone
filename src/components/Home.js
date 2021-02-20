import Banner from "./Banner";
import Navbar from "./Navbar";
import Details from "./Details";
import EndSection from "./EndSection";
import Mental from "./Mental";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Mental />
      <Details />
      <EndSection />
    </div>
  );
};

export default Home;
