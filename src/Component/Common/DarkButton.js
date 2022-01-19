const DarkButton = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className="flex justify-center items-center bg-gray-500 text-white px-5 py-3 cursor-pointer"
    >
      {text}
    </button>
  );
};

export default DarkButton;
