import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MessageForm from "../../../Component/Inbox/MessageForm";
import MessageContainer from "../../../Component/Inbox/MessageContainer";
import EmailContainer from "../../../Component/Inbox/EmailContainer";
import { useEffect, useState } from "react";
import * as action from "../../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
const Inbox = () => {
  const dispatch = useDispatch();
  const [openMail, setOpenMail] = useState([]);
  const [search, setSearch] = useState("");
  const { email } = useSelector((state) => state?.emails);
  const [emailData, setEmailData] = useState([]);
  const [selectData, setSelecData] = useState({
    sendEmail: "",
    id: "",
  });

  // console.log(selectData);
  const HandleOpenMail = (item) => {
    setOpenMail(item);
    setSelecData({ sendEMail: item.to, id: item._id });
  };

  useEffect(() => {
    dispatch(action.getEmailRequest());
  }, []);

  useEffect(() => {
    if (email) {
      setEmailData([...email]);
    }
  }, [email]);

  const getFilter = (data, search) => {
    let tempData = [...data];
    if (search) {
      tempData = tempData.filter((item) =>
        item.from.toLowerCase().startsWith(search)
      );
    }
    return tempData;
  };

  let filterData;
  if (emailData) {
    filterData = getFilter(emailData, search);
  }
  // console.log(filterData);
  return (
    <div className="flex flex-col">
      <div className="mt-3 flex justify-between">
        <div className="border px-1 border-gray-600  h-11 w-52  rounded-3xl flex items-center justify-start">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-1 pl-2  rounded-3xl border-0 focus:bg-none focus:outline-none focus:ring-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
        <div className="col-span-3 ">
          <div className=" h-screen overflow-y-auto">
            <div className="messageWrapper flex flex-col  px-3">
              {filterData.length > 0 &&
                filterData.map((item) => {
                  // console.log(item);
                  return (
                    <EmailContainer
                      key={item._id}
                      email={item}
                      HandleOpenMail={HandleOpenMail}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        {openMail.length !== 0 && (
          <div className="col-span-3 border w-full relative  shadow-xl h-screen rounded-md bg-blue-cus-1">
            <MessageContainer openMail={openMail} />
            <MessageForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Inbox;
