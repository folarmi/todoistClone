import { useContext } from "react";
// import { Link } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import Banner from "./Banner";
import Details from "./Details";
import EndSection from "./EndSection";
import Mental from "./Mental";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      {currentUser ? (
        <div>
          <Banner />
          <Mental />
          <Details />
          <EndSection />
        </div>
      ) : (
        <div>
          <Banner />
          <Mental />
          <Details />
          <EndSection />
        </div>
      )}
    </>
  );
};

export default Home;
