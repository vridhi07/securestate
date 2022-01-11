const DarkGrayButton = ({ children, onClick, type, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-cus  text-gray-300 py-2 px-14 capitalize rounded-sm tracking-wider ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default DarkGrayButton;
