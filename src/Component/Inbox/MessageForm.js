import GrayButton from "../Common/GrayButton";
const MessageForm = ({
  emailReply,
  sendReply,
  sendEmailReply,
  isReplying = false,
}) => {
  return (
    <form
      className="absolute bottom-0 left-0 w-full rounded-bl-lg rounded-br-lg py-2 px-4"
      onSubmit={(e) => sendReply(e)}
    >
      <textarea
        name="inboxMessage"
        id="inboxMessage"
        className="h-20 w-full  resize-none bg-primary-clr px-2 py-2 focus:outline-none"
        placeholder="Message user"
        value={emailReply}
        required
        onChange={(e) => sendEmailReply(e.target.value)}
      ></textarea>
      <div className="flex w-full justify-between">
        <button
          className="rounded-md bg-orange-cus-1 px-6 py-2 text-white hover:bg-orange-500"
          type="submit"
        >
          {isReplying ? "Loading..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default MessageForm;
