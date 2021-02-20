import Rating from "../base/Rating";

const Review = ({ name, company, award }) => {
  return (
    <div>
      <p className="text-base mb-4 lg:text-lg">{name}</p>
      <Rating />
      <p className="text-xl font-bold lg:text-2xl">{company}</p>
      <p className="text-xl font-bold lg:text-2xl">{award}</p>
    </div>
  );
};

export default Review;
