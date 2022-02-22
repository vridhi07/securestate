import { useEffect, useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import MessageForm from "../../../Component/Inbox/MessageForm";
import MessageContainer from "../../../Component/Inbox/MessageContainer";
import EmailContainer from "../../../Component/Inbox/EmailContainer";
import TablePagination from "@mui/material/TablePagination";
import CircularProgress from "@mui/material/CircularProgress";
import * as action from "../../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Loader from "../../../Component/Common/Loader";
import MultipleSelectCheckmarks from "../../../Component/Inbox/ToInfo";

const Inbox = () => {
  const dispatch = useDispatch();
  const [openMail, setOpenMail] = useState([]);
  const [search, setSearch] = useState("");
  const [emailContent, setEmailContent] = useState({
    subject: "",
    message: "",
    file: "",
  });
  const { email, isLoading } = useSelector((state) => state?.emails);
  const emailStatus = useSelector((state) => state.emails);
  const usersList = useSelector((state) => state.users);
  const [emailData, setEmailData] = useState([]);
  const [selectData, setSelectData] = useState({
    sendEmail: "",
    id: "",
  });
  // console.log(selectData);
  const currentUser = useSelector((state) => state.user?.userDetails);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openNewEmail, setOpenNewEmail] = useState(false);
  const [emailReply, sendEmailReply] = useState("");
  // console.log(emailReply);
  useEffect(() => {
    if (emailStatus?.sendEmailStatus) {
      setOpenNewEmail(false);
      setEmailContent({
        subject: "",
        message: "",
        file: "",
      });
    }
  }, [emailStatus]);

  useEffect(() => {
    if (openMail._id) {
      setOpenMail(
        emailStatus.email.filter((val) => val._id === openMail._id)[0]
      );
    }
  }, [emailStatus.emailReplyStatus]);

  const handleModalClickOpen = () => {
    setOpenNewEmail(true);
  };

  const handleModalClose = () => {
    setOpenNewEmail(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const HandleOpenMail = (item) => {
    setOpenMail(item);
    setSelectData({ sendEMail: item.to, id: item._id });
    dispatch(action.readEmailRequest({ id: item._id }));
    sendEmailReply();
  };

  useEffect(() => {
    dispatch(action.getUsersRequest());
    dispatch(
      action.getEmailRequest({ perPage: page, pageNumber: rowsPerPage })
    );
    sendEmailReply();
  }, [rowsPerPage, page]);

  useEffect(() => {
    if (email) {
      setEmailData([...email]);
    }
  }, [email]);

  const getFilter = (data, search) => {
    let tempData = [...data];
    if (search) {
      tempData = tempData.filter((item) =>
        item.from.toLowerCase().startsWith(search)
      );
    }
    return tempData;
  };

  let filterData;
  if (emailData) {
    filterData = getFilter(emailData, search);
  }

  const handleEmailSubjectChange = (event) => {
    const {
      target: { value },
    } = event;
    setEmailContent((val) => {
      return { ...val, subject: value };
    });
  };

  const handleEmailMessageChange = (event) => {
    const {
      target: { value },
    } = event;
    setEmailContent((val) => {
      return { ...val, message: value };
    });
  };

  const _handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setEmailContent((val) => {
        return {
          ...val,
          file: file,
        };
      });
    };
    reader.readAsDataURL(file);
  };
  const getSelectedEmail = () => {
    return usersList?.users
      ?.filter((val) => selectedEmails.includes(val._id))
      .map((val) => val.email);
  };
  // console.log(getSelectedEmail());
  const formData = new FormData();
  formData.append("file", emailContent.file);
  formData.append("to", getSelectedEmail());
  formData.append("subject", emailContent.subject);
  formData.append("text", emailContent.message);
  const _handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSendEmail = () => {
    dispatch(action.sendEmailRequest(formData));
  };
  const sendReply = (e) => {
    e.preventDefault();
    dispatch(
      action.sendEmailReplyRequest({
        id: selectData.id,
        data: {
          text: emailReply,
        },

        email: currentUser.email,
      })
    );
    sendEmailReply("");
  };
  // console.log(emailStatus.emailreplyLoader,'=========')
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col">
      <div className="mt-3 flex justify-between">
        <div className="flex h-11 w-60 items-center  justify-start rounded-lg bg-white pr-1 pl-4">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-3xl border-0  py-1 pl-2 focus:bg-none focus:outline-none focus:ring-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <TablePagination
            component="div"
            count={100}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
        <div className="mr-2 md:mr-8">
          <button className="grid h-12 w-12 cursor-pointer place-content-center rounded-full border-none bg-orange-cus-1 shadow-lg duration-300  ease-in hover:shadow-xl">
            <div className="duration-300 ease-in hover:rotate-90 ">
              <AddIcon onClick={handleModalClickOpen} sx={{ color: "white" }} />
            </div>
          </button>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-6 ">
        <div className="col-span-3 bg-white ">
          <div className=" h-screen overflow-y-auto">
            <div className="messageWrapper flex flex-col  px-3">
              {filterData.length > 0 &&
                filterData.map((item) => {
                  return (
                    <EmailContainer
                      key={item._id}
                      email={item}
                      HandleOpenMail={HandleOpenMail}
                      selectedEmail={selectData}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        {openMail.length !== 0 && (
          <div className="relative col-span-3 h-screen w-full rounded-md border bg-blue-cus-1 shadow-xl">
            <MessageContainer openMail={openMail} />
            <MessageForm
              emailReply={emailReply}
              sendEmailReply={sendEmailReply}
              sendReply={sendReply}
              isReplying={emailStatus?.emailreplyLoader}
            />
          </div>
        )}
      </div>

      <div>
        <Dialog open={openNewEmail} onClose={handleModalClose}>
          <DialogTitle>New Email </DialogTitle>
          <DialogContent>
            <MultipleSelectCheckmarks
              setSelectedEmails={setSelectedEmails}
              selectedEmails={selectedEmails}
            />
            <TextField
              margin="dense"
              id="subject"
              label="Subject"
              type="text"
              fullWidth
              variant="standard"
              value={emailContent.subject}
              onChange={handleEmailSubjectChange}
            />
            <TextField
              margin="dense"
              id="outlined-multiline-static"
              label="Message"
              multiline
              type="text"
              rows={8}
              fullWidth
              variant="standard"
              value={emailContent.message}
              onChange={handleEmailMessageChange}
            />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" component="label">
              {/* Upload File */}
              <form onSubmit={(e) => _handleSubmit(e)}>
                <input
                  className="fileInput"
                  type="file"
                  onChange={(e) => _handleImageChange(e)}
                />
              </form>
            </Button>
            <Button onClick={handleModalClose}>Cancel</Button>
            <Button onClick={handleSendEmail}>Send</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Inbox;
