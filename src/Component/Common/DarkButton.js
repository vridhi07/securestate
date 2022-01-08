const DarkButton = ({text, onClick}) => {
    return (
      <div onClick={onClick} className="flex justify-center items-center bg-gray-500 text-white px-5 py-3 cursor-pointer">
        {text}
      </div>
    );
  };
  
  export default DarkButton;
  