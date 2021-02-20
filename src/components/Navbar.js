import logo from "../images/logo.jfif";
// import logoDesktop from "../images/logoDesktop.png";
import todoist from "../images/Todoist.png";
// import banner from "../images/banner.webp";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { SectionWrapper } from "../layout/SectionWrapper";

const Navbar = () => {
  return (
    <div>
      <section className="">
        <nav className="flex fixed items-center lg:hidden bg-white p-2 z-10">
          <img src={logo} alt="logo" className="w-8 h-8 mr-28" />
          <p className="mr-8">Login</p>
          <p className="mr-12 text-red-600">Signup</p>
          <HiOutlineMenuAlt4 className="text-4xl" />
        </nav>
      </section>

      <SectionWrapper
        className="hidden lg:flex lg:-mt-16"
        style={{ color: "#575757" }}
      >
        <nav className="flex fixed items-center p-2 mt-8 bg-white  z-10">
          <img src={todoist} alt="logoDesktop" className="w-36 mr-12" />
          {/* <div style={{ color: "#575757" }}> */}
          <p className="text-lg mr-10">Features</p>
          <p className="text-lg mr-10">Premium</p>
          <p className="text-lg mr-10">Teams</p>
          <p className="text-lg mr-96">Resources</p>
          <p className="mr-8">Login</p>
          <p className="mr-12 text-red-600">Signup</p>
          {/* </div> */}
        </nav>
      </SectionWrapper>
    </div>
  );
};

export default Navbar;
