import Button from "../base/Button";
import { SectionWrapper } from "../layout/SectionWrapper";
import screenshot from "./../images/screenshot.webp";
import banner from "../images/banner.webp";
import ashbg from "../images/ashbg.webp";
import chat from "./../images/chat.webp";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  return (
    <SectionWrapper>
      <div className="pt-24 text-center">
        <p className="text-5xl font-bold lg:text-8xl lg:max-w-full lg:mt-16">
          Organize it all with Todoist
        </p>
        <div className="mt-8">
          <Button content="Get it from Microsoft" />
        </div>
      </div>

      <section className="">
        <div>
          <img src={banner} alt="banner" />
          <img src={ashbg} alt="ashbg" className="hidden lg:block" />
        </div>
        <div className="relative inset-0 -mt-8 chat">
          <img src={chat} alt="chat" className="relative inset-0" />
          <img
            src={screenshot}
            alt="screenshot"
            className="w-2/5 absolute position"
          />
        </div>
      </section>

      <section className="lg:text-center bg-white lg:-mt-16">
        <p
          className="text-4xl font-bold leading-10 lg:text-6xl"
          // style={{ maxWidth: "80%" }}
        >
          Free up your mental space
        </p>
        <p className="leading-6 text-lg mt-4 lg:text-2xl max-w-4xl lg:ml-44">
          Regain clarity and calmness by getting all those tasks out of your
          head and onto your to-do list (no matter where you are or what device
          you use).
        </p>
      </section>

      <section className="lg:flex justify-center lg:flex-row-reverse">
        <div className="flex items-center mt-8">
          <AiOutlinePlayCircle className="text-blue-500 mr-2" />
          <a
            href="https://todoist.com/home"
            className="text-blue-500 hover:underline"
          >
            See Todoist in action
          </a>
        </div>

        <div className="flex items-center mt-8">
          <BsArrowRight className="text-blue-500" />
          <a
            href="https://todoist.com/home"
            className="text-blue-500 hover:underline lg:mr-8"
          >
            Browse Todoist’s features
          </a>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default Banner;
