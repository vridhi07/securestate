const DarkButton = ({ children, onClick, type, className ,...rest}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-300 text-gray-500 px-8 py-2 cursor-pointer tracking-wider ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default DarkButton;
