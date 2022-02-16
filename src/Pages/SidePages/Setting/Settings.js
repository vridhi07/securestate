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
        <h2 className="mt-4 text-2xl font-bold tracking-widest text-gray-700">
          Settings
        </h2>
        <div className="Test mt-20 ml-[10%] text-left">
          <h2 className="mt-4 text-xl font-bold tracking-widest  text-gray-700 underline ">
            Notification
          </h2>
          {/* Container */}
          <section className="mt-3">
            <div className="relative w-[11rem] bg-orange-500">
              {/* dropdown Header */}
              <div
                className=" bg-orange-cus-1 mb-0 flex items-center   justify-between py-[0.2em] pl-8 pr-4 text-white hover:cursor-pointer"
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
                <div className="absolute top-[2.4rem] left-0 right-0 m-0 p-0 transition-all ">
                  <ul className="bg-orange-cus-1 m-0  w-full border p-0 text-white ">
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
        <div className="Test mt-20 ml-[10%] text-left">
          <h2 className="mt-4 text-xl font-bold tracking-widest  text-gray-700 underline ">
            Chat Notification
          </h2>
          {/* Container */}
          <section className="mt-3 ">
            <div className="relative w-[11rem] bg-orange-500 ">
              {/* dropdown Header */}
              <div
                className=" bg-orange-cus-1 mb-0 flex items-center   justify-between py-[0.2em] pl-8 pr-4  text-white hover:cursor-pointer"
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
                <div className="absolute top-[2.4rem]  left-0 right-0 m-0 p-0">
                  <ul className="bg-orange-cus-1 m-0  w-full border p-0 text-white ">
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
