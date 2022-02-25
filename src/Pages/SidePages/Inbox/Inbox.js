import { useEffect, useState, useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
// import AddIcon from "@mui/icons-material/Add";
import MessageForm from "../../../Component/Inbox/MessageForm";
import MessageContainer from "../../../Component/Inbox/MessageContainer";
import EmailContainer from "../../../Component/Inbox/EmailContainer";
// import TablePagination from "@mui/material/TablePagination";
// import CircularProgress from "@mui/material/CircularProgress";
import EditIcon from "@mui/icons-material/Edit";
import * as action from "../../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Loader from "../../../Component/Common/Loader";
import MultipleSelectCheckmarks from "../../../Component/Inbox/ToInfo";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const Inbox = () => {
  const dispatch = useDispatch();
  const [openMail, setOpenMail] = useState([]);
  const [search, setSearch] = useState("");
  const [emailContent, setEmailContent] = useState({
    subject: "",
    message: "",
    file: "",
  });
  const { email, isLoading, pageCount } = useSelector((state) => state?.emails);
  const emailStatus = useSelector((state) => state.emails);
  const usersList = useSelector((state) => state.users);
  const [emailData, setEmailData] = useState([]);
  const [selectData, setSelectData] = useState({
    sendEmail: "",
    id: "",
  });
  // console.log(email);
  const currentUser = useSelector((state) => state.user?.userDetails);
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [page, setPage] = useState(1);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openNewEmail, setOpenNewEmail] = useState(false);
  const [emailReply, sendEmailReply] = useState("");
  // const [assetPageNumber, setAssetPageNumber] = useState(1);
  // console.log(emailReply);
  // console.log(emailData);

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

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(parseInt(event.target.value, 10));
  //   setPage(0);
  // };

  const HandleOpenMail = (item) => {
    // console.log(item, "------");
    setOpenMail(item);
    setSelectData({ sendEMail: item.to, id: item._id });
    dispatch(action.readEmailRequest({ id: item._id }));
    sendEmailReply();
  };

  useEffect(() => {
    dispatch(action.getUsersRequest());
  }, []);

  useEffect(() => {
    dispatch(action.getEmailRequest({ page }));
    sendEmailReply();
  }, [page]);

  useEffect(() => {
    if (email) {
      setEmailData([...email]);
    }
  }, [email]);

  const getFilter = (data, searchOption) => {
    let tempData = [...data];
    try {
      if (searchOption) {
        tempData = tempData.filter((item) =>
          item?.name?.startsWith(searchOption)
        );
        // console.log(tempData);
      }
      return tempData;
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(emailData);
  let filterData;
  if (emailData) {
    filterData = getFilter(emailData, search);
  }
  // console.log(filterData, "=====123");
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
  // console.log(filterData, "=========");
  if (isLoading) {
    return <Loader />;
  }
  // console.log(filterData);
  return (
    <div>
      <div className="mt-3 flex items-end justify-between">
        <h4 className="text-2xl font-bold tracking-wider text-orange-cus-1">
          Inbox
        </h4>
        <section className="flex gap-3">
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

          <button
            onClick={handleModalClickOpen}
            className="rounded-md bg-orange-cus-1 px-4 py-2 text-white"
          >
            <EditIcon sx={{ color: "white", mr: 1 }} />
            Compose
          </button>
        </section>
      </div>
      {/* Parent */}
      <div className="mt-3 grid grid-cols-6 gap-4 ">
        <div className="col-span-3 ">
          <div className=" h-[calc(100vh-5rem)] overflow-y-auto rounded-md bg-white ">
            <div className="messageWrapper flex flex-col    px-3">
              {filterData &&
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
          <div className=" mt-4 w-full">
            <div className="mr-auto">
              {pageCount && (
                <Stack spacing={2}>
                  <Pagination
                    count={pageCount}
                    onChange={handleChangePage}
                    sx={{
                      "& .Mui-selected": {
                        backgroundColor: "#F27931 !important",
                        color: "white",
                        border: "none",
                      },
                      "& .MuiPaginationItem-page ": {
                        bgcolor: "#B4AFAF",
                        color: "white",
                        border: "none",
                      },
                      "& .MuiPaginationItem-previousNext": {
                        border: "none",
                      },
                      "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root":
                        {
                          "&:hover": {
                            backgroundColor: "none",
                          },
                        },
                    }}
                    page={page}
                  />
                </Stack>
              )}
            </div>
          </div>
        </div>
        {openMail.length !== 0 && (
          <div className=" relative col-span-3 h-[calc(100vh-5rem)] w-full   rounded-md border bg-white  shadow-xl">
            <div className="overflow-y-auto ">
              <MessageContainer openMail={openMail} />
            </div>

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
