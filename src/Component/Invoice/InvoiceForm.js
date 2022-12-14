import { useDispatch, useSelector } from "react-redux";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Select from "@mui/material/Select";
import Alert from "@mui/material/Alert";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useEffect } from "react";
const Alerts = ({ alert, setAlert }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert({ ...alert, msg: "", status: false });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert.msg]);

  return (
    <Alert severity="error" size="small">
      {alert.msg}
    </Alert>
  );
};
export default function AlertDialog({
  open,
  handleClose,
  formInput,
  handleFormInput,
  getDate,
  removeAttachData,
  handleSubmit,
  users = [],
  alert,
  setAlert,
}) {
  const { invoice, totalAmount, dueDate, status, attachData, client } =
    formInput;
  // console.log(users);
  const newUser = users.filter((item) => item.role === "client");

  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="Invoice-Form-Modal"
        aria-describedby="alert-dialog-description"
      >
        <form
          autoComplete="off"
          className="bg-primary-clr"
          onSubmit={handleSubmit}
        >
          <header className="flex items-center justify-between bg-orange-cus-1 py-3 px-3 text-white">
            <h2 className=" text-xl font-semibold">Add Invoice</h2>
            <button
              type="button"
              onClick={handleClose}
              // className="absolute top-4 right-4"
            >
              <CloseIcon />
            </button>
          </header>
          <div className="px-10 py-6">
            {alert.status && <Alerts alert={alert} setAlert={setAlert} />}

            <section className="mt-2 mb-3 grid grid-cols-4 gap-8 ">
              <div className="col-span-4 ">
                <FormControl fullWidth>
                  <InputLabel id="client">Select client</InputLabel>
                  <Select
                    labelId="client"
                    id="client"
                    name="client"
                    value={client}
                    label="Select client"
                    onChange={handleFormInput}
                    required
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                        outline: "none !important",
                      },
                      "&:hover": {
                        "&& fieldset": {
                          border: "none",
                          outline: "none",
                        },
                      },
                    }}
                  >
                    {newUser &&
                      newUser.map((item) => (
                        <MenuItem key={item._id} value={item._id}>
                          {item.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>
            </section>
            <section className="my-3 grid grid-cols-4 gap-8 ">
              <div className="col-span-4 md:col-span-2">
                <FormControl fullWidth>
                  <TextField
                    id="invoice"
                    label="Invoice"
                    variant="outlined"
                    inputProps={{ maxLength: 50 }}
                    name="invoice"
                    value={invoice}
                    onChange={handleFormInput}
                    required
                    sx={{ backgroundColor: "white" }}
                  />
                </FormControl>
              </div>
              <div className="col-span-4 md:col-span-2">
                <div className="bg-white">
                  <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    sx={{ width: "100%" }}
                  >
                    <DesktopDatePicker
                      label="Due Date"
                      value={dueDate}
                      minDate={new Date()}
                      onChange={getDate}
                      renderInput={(params) => <TextField {...params} />}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </section>
            {/* <div className="w-full mb-3  "></div>
          <div className="w-full mb-3  "></div> */}
            <section className="my-3 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <FormControl fullWidth>
                  <InputLabel htmlFor="Total-amount">Total</InputLabel>
                  <OutlinedInput
                    id="Total-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Amount"
                    inputProps={{ maxLength: 10 }}
                    name="totalAmount"
                    value={totalAmount}
                    onChange={handleFormInput}
                    required
                    sx={{ backgroundColor: "white" }}
                  />
                </FormControl>
              </div>
              <div className="col-span-4 md:col-span-2">
                <FormControl fullWidth>
                  <InputLabel id="status">Status</InputLabel>
                  <Select
                    labelId="status"
                    id="status"
                    name="status"
                    value={status}
                    label="Status"
                    onChange={handleFormInput}
                    required
                    sx={{
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                        outline: "none !important",
                      },
                      "&:hover": {
                        "&& fieldset": {
                          border: "none",
                          outline: "none",
                        },
                      },
                    }}
                  >
                    <MenuItem value={"Paid"}>Paid</MenuItem>
                    <MenuItem value={"Due Soon"}>Due Soon</MenuItem>
                    <MenuItem value={"Past Due"}>Past Due</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </section>
            {/* <div className="w-full mb-3"></div>
          <div className="w-full mb-3"></div> */}
            <div className="mt-5 flex w-full items-start justify-between">
              <div className="flex flex-col">
                <button
                  // onClick={handleClose}
                  type="submit"
                  className="mb-3 bg-orange-cus-1 px-5 py-2 text-white "
                >
                  Add Invoice
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mb-3 bg-orange-cus-1 px-5 py-2 text-white "
                >
                  Cancel
                </button>
              </div>
              <div className="ml-2">
                <label
                  htmlFor="file"
                  className="mb-3  flex bg-orange-cus-1 px-5 py-2 text-white hover:cursor-pointer "
                >
                  <AttachFileIcon />
                  Attach file
                </label>
                <input
                  type="file"
                  id="file"
                  name="attachData"
                  onChange={handleFormInput}
                  className="hidden"
                  accept="application/pdf"
                  // required
                />
              </div>
            </div>
            {attachData && (
              <div className="mt-3 flex w-full justify-between">
                <p>{attachData.name}</p>

                <button type="button" onClick={removeAttachData}>
                  <CloseIcon />
                </button>
              </div>
            )}
          </div>
        </form>
      </Dialog>
    </div>
  );
}
