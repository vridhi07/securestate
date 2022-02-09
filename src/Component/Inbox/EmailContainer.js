import StarIcon from "@mui/icons-material/Star";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

const DoubleCircle = ({ isSelected }) => {
  return (
    <div className="relative">
      <CircleOutlinedIcon sx={{ fontSize: "1.1rem", color: "#FA9C2E" }} />
      <span className="absolute  left-1 top-0">
        {isSelected && (
          <CircleIcon sx={{ fontSize: "0.6rem", color: "#0C74FA" }} />
        )}
      </span>
    </div>
  );
};

const EmailContainer = ({ email = [], HandleOpenMail, selectedEmail }) => {
  const { _id, from, to, subject, text, read, attachments } = email;
  const getDateAndTime = (emailDetail) => {
    let data = {
      date: "",
      time: "",
    };
    if (emailDetail?.reply?.length > 0) {
      let dateAndTimeDetail =
        emailDetail.reply[emailDetail.reply.length - 1].repliedAt;
      data["date"] = new Date(dateAndTimeDetail).toLocaleDateString();
      data["time"] = new Date(dateAndTimeDetail).toLocaleTimeString("en-US");
    } else {
      let dateAndTimeDetail = email?.createdAt;
      data["date"] = new Date(dateAndTimeDetail).toLocaleDateString();
      data["time"] = new Date(dateAndTimeDetail).toLocaleTimeString("en-US");
    }
    return data;
  };

  return (
    <article
      className={` cursor-pointer pt-2 ${!read && "bg-blue-cus-1"}`}
      onClick={() => HandleOpenMail(email)}
    >
      <header className="flex justify-between items-center">
        <section className="flex justify-start items-center">
          <DoubleCircle isSelected={selectedEmail?.id === _id} />
          <h2 className="ml-1 font-bold text-lg-cus ">{from}</h2>
         
        </section>
        <section className="flex justify-start items-center md:mr-10  ">
          <span className="text-gray-cus-6 text-base ">
            {`${getDateAndTime(email).date} ${getDateAndTime(email).time}`}
          </span>
          <span>
            <ChevronRightOutlinedIcon sx={{ color: "#9C8E96" }} />
          </span>
        </section>
      </header>
      <section className="md:mr-14 mt-1  pb-3 md:ml-04 ">
        <span className="flex">
       {attachments?.length>0 && <AttachFileIcon/> } 
        <h3 className="text-xs-cus font-bold ">{subject}</h3>
        </span>
       
        <p className="text-justify max-w-md text-xs-cus font-normal text-gray-cus-6">
          {text.substring(0, 105)}
        </p>
      </section>
      <hr />
    </article>
  );
};

export default EmailContainer;
