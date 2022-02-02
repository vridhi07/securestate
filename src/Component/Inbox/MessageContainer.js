import { useRef, useEffect } from "react";
const MessageContainer = ({ openMail = [] }) => {
  // const array = Array.from({ length: 50 }, (_, index) => index);
  // const scrollRef = useRef();

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [array]);
  return (
    <div className="messageHeights   px-4  ">
      <div className="flex-col flex justify-end messageWrapper">
        <div
        //  ref={scrollRef}
        // key={openMail._id}
        >
          <p>{openMail?.text}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageContainer;
