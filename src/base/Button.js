const Button = ({ content }) => {
  return (
    <div>
      <button class="mr-5 bg-red-600 text-white border font-bold py-2 px-6 rounded-lg">
        {content}
      </button>
    </div>
  );
};

export default Button;
