import Button from "../base/Button";
import { SectionWrapper } from "../layout/SectionWrapper";
import screenshot from "./../images/screenshot.webp";
import banner from "../images/banner.webp";
import ashbg from "../images/ashbg.webp";
import chat from "./../images/chat.webp";

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
          <img src={banner} alt="banner" className="" />
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
    </SectionWrapper>
  );
};

export default Banner;
