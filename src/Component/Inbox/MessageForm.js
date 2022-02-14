import GrayButton from "../Common/GrayButton";
const MessageForm = ({
  emailReply,
  sendReply,
  sendEmailReply,
  isReplying = false,
}) => {
  return (
    <form
      className="absolute bottom-0 left-0 w-full rounded-bl-lg rounded-br-lg bg-white py-2"
      onSubmit={(e) => sendReply(e)}
    >
      <textarea
        name="inboxMessage"
        id="inboxMessage"
        className="h-20 w-full resize-none px-2 py-2 focus:outline-none"
        placeholder="Message user"
        value={emailReply}
        required
        onChange={(e) => sendEmailReply(e.target.value)}
      ></textarea>
      <div className="flex w-full justify-between">
        <GrayButton className="mr-3" type="submit">
          {isReplying ? "Loading..." : "Send"}
        </GrayButton>
      </div>
    </form>
  );
};

export default MessageForm;
