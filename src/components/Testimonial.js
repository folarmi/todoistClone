import { FaQuoteLeft } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Testimonial = ({ name, testimonial, jobDesc, title }) => {
  return (
    <section>
      <div className="p-8 shadow-2xl mr-36 rounded-xl w-full">
        <FaQuoteLeft className="mb-4" />
        <p className="italic font-medium text-lg leading-8">{testimonial}</p>
        <p className="mt-4 text-base">{name}</p>
        <p className="mt-4 text-sm">{title}</p>
        <hr className="mt-4" />

        <div className="flex items-center mt-8">
          <BsArrowRight className="text-blue-500 mr-2" />
          <a
            href="https://todoist.com/home"
            className="text-blue-500 hover:underline"
          >
            Read More
          </a>
        </div>
      </div>

      <hr className="w-12" />
      {/* <div>
        <p>{jobDesc}</p>
      </div> */}
    </section>
  );
};

export default Testimonial;
