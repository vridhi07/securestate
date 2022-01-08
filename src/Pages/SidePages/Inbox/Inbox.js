import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MessageForm from "../../../Component/Inbox/MessageForm";
import MessageContainer from "../../../Component/Inbox/MessageContainer";
const Inbox = () => {
  return (
    <div className="flex flex-col">
      <div className="mt-3 flex justify-between">
        <div className="border px-1 border-gray-600  h-11 w-52  rounded-3xl flex items-center justify-start">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-1 pl-2 focus:outline-none rounded-3xl "
          />
        </div>
        <div className="md:mr-8 mr-2">
          <button className="w-12 h-12 ease-in duration-300 border-none rounded-full bg-orange-cus-1 grid place-content-center shadow-lg  cursor-pointer hover:shadow-xl">
            <div className="hover:rotate-90 ease-in duration-300 ">
              <AddIcon sx={{ color: "white" }} />
            </div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-6 mt-3">
        <div className="col-span-3 "></div>
        <div className="col-span-3 border w-full relative  shadow-xl h-screen rounded-md bg-blue-cus-1">
          <MessageContainer />
          <MessageForm />
        </div>
      </div>
    </div>
  );
};

export default Inbox;
