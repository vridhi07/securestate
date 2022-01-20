import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import MenuItem from "@mui/material/MenuItem";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Select from "@mui/material/Select";
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
export default function AlertDialog({
  open,
  handleClose,
  formInput,
  handleFormInput,
  getDate,
}) {
  const { invoice, totalAmount, dueDate, status, attachData } = formInput;
  return (
    <div>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="Invoice-Form-Modal"
        aria-describedby="alert-dialog-description"
        sx={{ height: 500 }}
      >
        <form
          autoComplete="off"
          className="flex flex-col justify-center items-center px-5 sm:px-20 py-10"
        >
          <h2 className="text-xl font-semibold mb-9">Add Invoice</h2>
          <div className="w-full mb-3  ">
            <FormControl fullWidth>
              <TextField
                id="invoice"
                label="Invoice"
                variant="outlined"
                inputProps={{ maxLength: 50 }}
                name="invoice"
                value={invoice}
                onChange={handleFormInput}
              />
            </FormControl>
          </div>
          <div className="w-full mb-3  ">
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
              />
            </FormControl>
          </div>

          <div className="w-full mb-3">
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              sx={{ width: "100%" }}
            >
              <DesktopDatePicker
                label="Due Date"
                value={dueDate}
                onChange={getDate}
                renderInput={(params) => <TextField {...params} />}
                sx={{ width: "100%" }}
              />
            </LocalizationProvider>
          </div>
          <div className="w-full mb-3">
            <FormControl fullWidth>
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                id="status"
                name="status"
                value={status}
                label="Status"
                onChange={handleFormInput}
              >
                <MenuItem value={"Paid"}>Paid</MenuItem>
                <MenuItem value={"Due Soon"}>Due Soon</MenuItem>
                <MenuItem value={"Past Due"}>Past Due</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="flex items-start justify-between w-full mt-5">
            <div className="flex flex-col">
              <button
                onClick={handleClose}
                className="px-5 py-2 bg-orange-cus-1 text-white mb-3 "
              >
                Add Invoice
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="px-5 py-2 bg-orange-cus-1 text-white mb-3 "
              >
                Cancel
              </button>
            </div>
            <div className="ml-2">
              <label
                htmlFor="file"
                className="flex  px-5 py-2 bg-orange-cus-1 text-white mb-3 hover:cursor-pointer "
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
              />
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
