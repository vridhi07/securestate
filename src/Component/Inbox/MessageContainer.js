const MessageContainer = () => {
  const array = Array.from({ length: 50 }, (_, index) => index);

  return (
    <div className="messageHeights border px-4">
      {array.map((item, key) => {
        return <div key={key}>hello</div>;
      })}
    </div>
  );
};

export default MessageContainer;
