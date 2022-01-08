import GrayButton from "../Common/GrayButton";
const MessageForm = () => {
  return (
    <form className="absolute bottom-0 left-0 w-full bg-white rounded-lg py-2">
      <textarea
        name="inboxMessage"
        id="inboxMessage"
        className="resize-none h-20 w-full focus:outline-none px-2 py-2"
        placeholder="Message user"
      ></textarea>
      <div className="w-full flex justify-between">
        <div></div>
        <GrayButton className="mr-3 " text={"Send"} />
      </div>
    </form>
  );
};

export default MessageForm;
