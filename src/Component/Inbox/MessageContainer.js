import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
const MessageContainer = ({ openMail }) => {
  const usersList = useSelector((state) => state.users);

  const getTime = (time) => {
    return new Date(time).toLocaleTimeString("en-US");
  };

  const getSenderName = (useremail) => {
    return (
      usersList?.users?.filter((val) => val.email === useremail)[0]?.name ||
      "Unknown"
    );
  };

  return (
    <div className="messageHeights px-4  mt-5 ">
      <div className="flex-col flex justify-start messageWrapper">
        <div>
          <p>{openMail?.text}</p>
          {
            openMail.attachments.map((val,i)=>{
              return <a key={val} className="px-2 hover:underline" href={val}>{`Link ${i+1}`}</a>
            })
          }
        </div>
        {openMail?.reply.map((val, i) => {
          return (
            <div
              key={i}
              className="py-4 flex items-center justify-between my-4 bg-white rounded-md"
            >
              <div>
                <span className="pl-3 text-xs">{getSenderName(val?.from)}</span>
                <p className="pl-3">{val.text}</p>
              </div>

              <span className="text-xs pr-3">
                {val?.repliedAt && getTime(val.repliedAt)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageContainer;
