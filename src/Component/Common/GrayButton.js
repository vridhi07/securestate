const DarkButton = ({ text, onClick, type, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-300 text-gray-500 px-7 py-2 cursor-pointer tracking-wider ${className}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default DarkButton;
