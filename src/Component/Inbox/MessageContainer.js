import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
const MessageContainer = ({ openMail }) => {
  const usersList = useSelector((state) => state.users);

  const getTime = (time) => {
    return new Date(time).toLocaleTimeString("en-US");
  };

  const getSenderName=(useremail)=>{
  return usersList?.users?.filter(val=>val.email===useremail).name || 'Unknown'
  }
  return (
    <div className="messageHeights px-4  mt-5 ">
      <div className="flex-col flex justify-start messageWrapper">
        <div>
          <p>{openMail?.text}</p>
        </div>
        {openMail?.reply.map((val, i) => {
          return (
            <div key={i} className="py-4 flex items-center justify-between my-4 bg-white rounded-md">
            <div>
            <span className="pl-3 text-xs">{getSenderName(val?.from)}</span>
              <p className="pl-3">{val.text}</p>
            </div>
          
              <span className="text-xs pr-3" >{val?.repliedAt && getTime(val.repliedAt)}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageContainer;
