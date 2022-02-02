import { useRef, useEffect } from "react";
const MessageContainer = () => {
  const array = Array.from({ length: 50 }, (_, index) => index);
  // const scrollRef = useRef();

  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [array]);
  return (
    <div className="messageHeights   px-4  ">
      <div className="flex-col flex justify-end messageWrapper">
        {array.map((item, key) => {
          return (
            <div
              //  ref={scrollRef}
              key={key}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageContainer;
