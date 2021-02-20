import Button from "../base/Button";
import blackLogo from "../images/blackLogo.png";
import peace from "../images/peace.webp";
import { SectionWrapper } from "../layout/SectionWrapper";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";

const EndSection = () => {
  return (
    <div style={{ backgroundColor: "#fff9f3" }}>
      <SectionWrapper>
        <div className="mt-16">
          <div className=" px-12 py-10 text-center lg:text-left lg:flex lg:flex-row-reverse">
            <section>
              <p className="text-3xl font-bold leading-10 lg:text-5xl lg:mt-28 lg:max-w-lg">
                Achieve peace of mind with Todoist
              </p>
              <div className="m-4">
                <Button content="Get it from Microsoft" />
              </div>
            </section>
            <section className="hidden lg:block lg:w-1/3 lg:-mt-28">
              <img src={peace} alt="peace" />
            </section>
          </div>

          <hr />

          <div className="lg:flex">
            <section
              className="mt-16 mx-4 lg:mr-64"
              style={{ color: "fff9f3" }}
            >
              <div className="flex items-center">
                <img
                  src={blackLogo}
                  alt="blacklogo"
                  className="w-8 h-8 mr-8 lg:hidden"
                />
                <p className="max-w-xs" style={{ maxWidth: "18rem" }}>
                  Join millions of people who organize work and life with
                  Todoist.
                </p>
              </div>

              <section
                className="flex text-2xl mt-8 ml-16 lg:ml-0"
                style={{ color: "#8b8884" }}
              >
                <FaFacebook className="mr-4" />
                <AiOutlineTwitter className="mr-4" />
                <AiFillYoutube className="mr-4" />
                <FaInstagram className="mr-4" />
              </section>
            </section>

            <section className="ml-20 mt-10 lg:flex">
              <div className="lg:mr-12">
                <ul className="text-base">
                  <li className="uppercase text-sm mb-4 lg:mt-8">Features</li>
                  <li className="mb-2">How it Works</li>
                  <li className="mb-2">Premium</li>
                  <li className="mb-2">For Teams</li>
                  <li className="mb-2">Pricing</li>
                  <li className="mb-2">Templates</li>
                </ul>
              </div>

              <div className="lg:mr-12">
                <ul>
                  <li className="uppercase text-sm mt-8 mb-4">Resources</li>
                  <li className="mb-2">Download Apps</li>
                  <li className="mb-2">Help Center</li>
                  <li className="mb-2">Productivity Methods</li>
                  <li className="mb-2">Refer a friend</li>
                  <li className="mb-2">Integrations</li>
                  <li className="mb-2">Channel Partners</li>
                  <li>Developer API</li>
                </ul>
              </div>

              <div className="lg:mr-12">
                <ul>
                  <li className="uppercase text-sm mt-8 mb-4">Company</li>
                  <li className="mb-2">About Us</li>
                  <li className="mb-2">We are hiring!</li>
                  <li className="mb-2">Blog</li>
                  <li className="mb-2">Press</li>
                  <li className="mb-2">Twist</li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </SectionWrapper>

      <footer
        className="flex p-4 lg:mt-12 lg:pl-16"
        style={{ backgroundColor: "#f2ece7" }}
      >
        <p className="text-sm mr-8">Security|Privacy|Terms</p>
        <p className="text-sm">© Doist Inc.</p>
      </footer>
    </div>
  );
};

export default EndSection;
