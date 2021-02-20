import { useState } from "react";
import testimonial from "./data";
import Testimonial from "./Testimonial";

const Testimonials = () => {
  const [testimonal] = useState(testimonial);
  return (
    <div className="flex">
      {testimonal.map((testimony) => {
        return <Testimonial key={testimony.id} {...testimony} />;
      })}
    </div>
  );
};

export default Testimonials;
