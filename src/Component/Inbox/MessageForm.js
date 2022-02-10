import GrayButton from "../Common/GrayButton";
const MessageForm = ({ emailReply, sendReply, sendEmailReply ,isReplying=false}) => {
  return (
    <form
      className="absolute bottom-0 left-0 w-full bg-white rounded-bl-lg rounded-br-lg py-2"
      onSubmit={(e) => sendReply(e)}
    >
      <textarea
        name="inboxMessage"
        id="inboxMessage"
        className="resize-none h-20 w-full focus:outline-none px-2 py-2"
        placeholder="Message user"
        value={emailReply}
        onChange={(e) => sendEmailReply(e.target.value)}
      ></textarea>
      <div className="w-full flex justify-between">
      
        <GrayButton className="mr-3" type="submit">
          send
          { isReplying ?'Loading...':'Send'}
        </GrayButton>
      </div>
    </form>
  );
};

export default MessageForm;
