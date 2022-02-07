import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
const MessageContainer = ({ openMail }) => {
  const usersList = useSelector((state) => state.users);

  const getTime = (time) => {
    return new Date(time).toLocaleTimeString("en-US");
  };
  return (
    <div className="messageHeights   px-4  mt-5 ">
      <div className="flex-col flex justify-start messageWrapper">
        <div>
          <p>{openMail?.text}</p>
        </div>
        {openMail?.reply.map((val, i) => {
          return (
            <div className="py-4  flex items-center justify-between my-4 bg-white rounded-md">
              <p key={i} className="pl-3">{val.text}</p>
              <span className="text-xs pr-3" >{val?.repliedAt && getTime(val.repliedAt)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageContainer;
