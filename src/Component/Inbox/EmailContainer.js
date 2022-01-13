import StarIcon from "@mui/icons-material/Star";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
const AngleAttachFileIcon = () => {
  return (
    <AttachFileIcon sx={{ transform: "rotate(45deg)", color: "#CCCCCC" }} />
  );
};

const DoubleCircle = () => {
  return (
    <div className="relative">
      <CircleOutlinedIcon sx={{ fontSize: "1.1rem", color: "#FA9C2E" }} />
      <span className="absolute  left-1 top-0">
        <CircleIcon sx={{ fontSize: "0.6rem", color: "#0C74FA" }} />
      </span>
    </div>
  );
};
const Text =
  "Lorem ipsum dolor sit amet consectetur adipisicing ipsam saepe eligendi asperiores elit. Omnis laboriosam asperiores elit. Omnis laboriosam";

const EmailContainer = () => {
  const array = Array.from({ length: 10 }, (_, index) => index);
  const email = [
    {
      name: "",
    },
  ];
  return (
    <div className=" h-screen overflow-y-auto">
      <div className="messageWrapper flex flex-col  px-3">
        {array.map((item, index) => {
          return (
            <article className=" cursor-pointer pt-2 " key={index}>
              <header className="flex justify-between items-center">
                <section className="flex justify-start items-center">
                  <DoubleCircle />
                  <h2 className="ml-1 font-bold text-lg-cus ">Email sender</h2>
                </section>
                <section className="flex justify-start items-center md:mr-10  ">
                  <span className="text-gray-cus-6 text-base ">1 min ago</span>
                  <span>
                    <ChevronRightOutlinedIcon sx={{ color: "#9C8E96" }} />
                  </span>
                </section>
              </header>
              <section className="md:mr-14 mt-1  pb-3 md:ml-5 ">
                <h3 className="text-xs-cus font-bold ">Email subject</h3>
                <p className="text-justify max-w-md text-xs-cus font-normal text-gray-cus-6">
                  {Text.substring(0, 105)}
                </p>
              </section>
              <hr />
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default EmailContainer;