import { AiOutlinePlayCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Mental = () => {
  return (
    <div className="bg-white p-4 lg:py-16 lg:px-24">
      <section className="lg:text-center">
        <p
          className="text-4xl font-bold leading-10 lg:text-6xl"
          // style={{ maxWidth: "80%" }}
        >
          Free up your mental space
        </p>
        <p className="leading-6 text-lg mt-4 lg:text-2xl max-w-4xl lg:ml-32">
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
    </div>
  );
};

export default Mental;
