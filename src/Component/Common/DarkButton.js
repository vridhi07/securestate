const DarkButton = ({ text, onClick, type }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className=" bg-gray-500 text-white px-3 py-3 cursor-pointer"
    >
      {text}
    </button>
  );
};

export default DarkButton;
