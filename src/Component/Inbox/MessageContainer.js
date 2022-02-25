// import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
const MessageContainer = ({ openMail }) => {
  const usersList = useSelector((state) => state.users);
  const {
    userDetails: { email },
  } = useSelector((state) => state?.user);
  // console.log(openMail);
  const getTime = (time) => {
    return new Date(time).toLocaleTimeString("en-US");
  };

  const getSenderName = (useremail) => {
    return (
      usersList?.users?.filter((val) => val.email === useremail)[0]?.name ||
      "Unknown"
    );
  };
  //  {/* height: calc(100vh - 150px);
  // overflow-y: auto; */}
  return (
    <div className=" mt-5 h-[calc(100vh-15rem)] px-4 ">
      <div className="messageWrapper flex flex-col justify-start">
        <div>
          {/* <p>{openMail?.text}</p> */}
          {openMail.attachments.map((val, i) => {
            return (
              <a key={val} className="px-2 hover:underline" href={val}>{`Link ${
                i + 1
              }`}</a>
            );
          })}
        </div>
        {openMail?.reply.map((val, i) => {
          return (
            <div key={i} className="">
              {val?.from === email ? (
                <div className=" my-2 grid grid-cols-6 items-center ">
                  <div className=" col-span-1 pl-3 text-xs">
                    {/* <p className="test  h-[3.5rem] w-[3.5rem] rounded-full "></p> */}
                    <p className="-ml-3 flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-blue-500 text-lg text-white">
                      <span className="capitalize">
                        {getSenderName(val?.from).charAt(0)}
                      </span>
                    </p>
                  </div>
                  <div className=" col-span-5 rounded-md bg-sky-100 px-3 py-2">
                    <div>
                      <h4 className="text-right capitalize">
                        {getSenderName(val?.from)}
                      </h4>
                      <p className="py-3">{val.text}</p>
                      <p className=" text-xs">
                        {val?.repliedAt && getTime(val.repliedAt)}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="  my-2 grid grid-cols-6 items-center  ">
                  <div className=" col-span-5 rounded-md bg-pink-100 px-3 py-2">
                    <div>
                      <h4 className="text-right capitalize">
                        {getSenderName(val?.from)}
                      </h4>
                      <p className="py-3">{val.text}</p>
                      <p className=" text-xs">
                        {val?.repliedAt && getTime(val.repliedAt)}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 mr-2.5 pl-3 text-xs">
                    {/* <p className="test  h-[3.5rem] w-[3.5rem] rounded-full "></p> */}
                    <p className="flex h-[3.5rem] w-[3.5rem] items-center justify-center rounded-full bg-purple-400 text-lg text-white">
                      <span className="capitalize">
                        {getSenderName(val?.from).charAt(0)}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageContainer;
//  <div>
//   <span className="pl-3 text-xs">{getSenderName(val?.from)}</span>
//   <p className="pl-3">{val.text}</p>
// </div>

// <span className="pr-3 text-xs">
//   {val?.repliedAt && getTime(val.repliedAt)}
// </span>
