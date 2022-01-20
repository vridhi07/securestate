import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const Settings = () => {
  const notificationOptions = ["Never", "Show"];
  const chatNotificationOptions = ["Mentions Only", "Friends Only", "Everyone"];
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isChatNotificationOpen, setIsChatNotificationOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Never");
  const [chatSelected, setChatSelected] = useState("Mention Only");
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsNotificationOpen(false);
  };

  const onChatClick = (value) => {
    setChatSelected(value);
    setIsChatNotificationOpen(false);
  };
  return (
    <div>
      <header className="text-center">
        <h2 className="text-gray-700 font-bold text-2xl tracking-widest mt-4">
          Settings
        </h2>
        <div className="Test mt-20 text-left ml-[10%]">
          <h2 className="underline text-gray-700 font-bold text-xl  tracking-widest mt-4 ">
            Notification
          </h2>
          {/* Container */}
          <section className="mt-3">
            <div className="w-[11rem] bg-orange-500 relative">
              {/* dropdown Header */}
              <div
                className=" pl-8 pr-4 py-[0.2em] mb-0   bg-orange-cus-1 flex items-center justify-between text-white hover:cursor-pointer"
                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
              >
                <p>{selectedOption}</p>
                {isNotificationOpen ? (
                  <ArrowDropUpIcon sx={{ fontSize: "2rem" }} />
                ) : (
                  <ArrowDropDownIcon sx={{ fontSize: "2rem" }} />
                )}
              </div>
              {isNotificationOpen && (
                <div className="m-0 p-0 transition-all absolute top-[2.4rem] left-0 right-0 ">
                  <ul className="p-0 m-0  w-full border bg-orange-cus-1 text-white ">
                    {notificationOptions.map((item) => {
                      return (
                        <li
                          className="mb-[0.5em] pl-8 hover:cursor-pointer hover:bg-orange-400 "
                          key={item}
                          onClick={onOptionClicked(item)}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </div>
        <div className="Test mt-20 text-left ml-[10%]">
          <h2 className="underline text-gray-700 font-bold text-xl  tracking-widest mt-4 ">
            Chat Notification
          </h2>
          {/* Container */}
          <section className="mt-3 ">
            <div className="w-[11rem] bg-orange-500 relative ">
              {/* dropdown Header */}
              <div
                className=" pl-8 pr-4 py-[0.2em] mb-0   bg-orange-cus-1 flex justify-between items-center  text-white hover:cursor-pointer"
                onClick={() =>
                  setIsChatNotificationOpen(!isChatNotificationOpen)
                }
              >
                <p>{chatSelected}</p>
                {isChatNotificationOpen ? (
                  <ArrowDropUpIcon sx={{ fontSize: "2rem" }} />
                ) : (
                  <ArrowDropDownIcon sx={{ fontSize: "2rem" }} />
                )}
              </div>
              {isChatNotificationOpen && (
                <div className="m-0 p-0  absolute top-[2.4rem] left-0 right-0">
                  <ul className="p-0 m-0  w-full border bg-orange-cus-1 text-white ">
                    {chatNotificationOptions.map((item) => {
                      return (
                        <li
                          className="mb-[0.5em] pl-8 hover:cursor-pointer hover:bg-orange-400 "
                          key={item}
                          onClick={() => onChatClick(item)}
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </div>
      </header>
    </div>
  );
};

export default Settings;
