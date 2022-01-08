const MessageForm = () => {
  return (
    <form className="absolute bottom-0 ">
      <textarea
        name="inboxMessage"
        id="inboxMessage"
        className="resize-none h-20 w-full border rounded-lg"
      ></textarea>
      <button>Send</button>
    </form>
  );
};

export default MessageForm;
