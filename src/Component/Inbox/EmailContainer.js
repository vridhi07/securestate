// import StarIcon from "@mui/icons-material/Star";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useSelector } from "react-redux";
// import CircleIcon from "@mui/icons-material/Circle";
// import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
// import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";

// const DoubleCircle = ({ isSelected }) => {
//   return (
//     <div className="relative">
//       <CircleOutlinedIcon sx={{ fontSize: "1.1rem", color: "#FA9C2E" }} />
//       <span className="absolute  left-1 top-0">
//         {isSelected && (
//           <CircleIcon sx={{ fontSize: "0.6rem", color: "#0C74FA" }} />
//         )}
//       </span>
//     </div>
//   );
// };

const EmailContainer = ({ email = [], HandleOpenMail, selectedEmail }) => {
  const { _id, from, to, subject, text, read, attachments, name } = email;

  // console.log(email);
  const { userDetails } = useSelector((state) => state?.user);
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

  // console.log(email);
  return (
    <article
      className={`cursor-pointer items-center border-b border-gray-400 py-2 pt-2 first:mt-3 last:border-b-0  ${
        !email?.read && "bg-primary-clr"
      }`}
      onClick={() => HandleOpenMail(email)}
    >
      {/* {email} */}
      <section className="grid grid-cols-10 items-center">
        <div className=" col-span-2">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-full ${
              userDetails?.email === from ? "bg-blue-500 " : "bg-green-400"
            } uppercase text-white`}
          >
            <p className="text-xl">{name?.charAt(0)}</p>
          </div>
        </div>
        <div className="col-span-6">
          <section className="md:ml-04 mt-1  pb-3 md:mr-14 ">
            <span className="flex">
              {attachments?.length > 0 && <AttachFileIcon />}
              <h3 className="text-xs-cus font-bold ">{name}</h3>
            </span>
            <p className="max-w-md text-justify text-xs-cus font-normal text-gray-cus-6">
              {text.substring(0, 105)}
            </p>
          </section>
        </div>
        <div className=" col-span-2">{`${getDateAndTime(email).time}`}</div>
      </section>
    </article>
  );
};

export default EmailContainer;

// <header className=" test flex items-center justify-between">
//   <section className="flex items-center justify-start">
//     {/* <DoubleCircle isSelected={selectedEmail?.id === _id} />
//     <h2 className="ml-1 font-bold text-lg-cus ">{from}</h2> */}
//   </section>
//   <section className="flex items-center justify-start md:mr-10  ">
//     <span className="text-base text-gray-cus-6 ">
//       {`${getDateAndTime(email).date} ${getDateAndTime(email).time}`}
//     </span>
//     <span>
//       <ChevronRightOutlinedIcon sx={{ color: "#9C8E96" }} />
//     </span>
//   </section>
// </header>
// <section className="md:ml-04 mt-1  pb-3 md:mr-14 ">
//   <span className="flex">
//     {attachments?.length > 0 && <AttachFileIcon />}
//     <h3 className="text-xs-cus font-bold ">{subject}</h3>
//   </span>

//   <p className="max-w-md text-justify text-xs-cus font-normal text-gray-cus-6">
//     {text.substring(0, 105)}
//   </p>
// </section>
// <hr />
