import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
// import AdapterDateFns from "@mui/lab/AdapterDateFns";
export default function AlertDialog({
  open,
  handleClose,
  formInput,
  handleFormInput,
  getDate,
  removeAttachData,
  handleSubmit,
  // newrole,
  // setNewrole,
  handleSelect,
  users
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
          className="flex flex-col justify-center items-center px-5 sm:px-20 py-10 relative"
          onSubmit={handleSubmit}
        >
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-4 right-4"
          >
            <CloseIcon />
          </button>
          <h2 className="text-xl font-semibold mb-9">Add Invoice</h2>
          <FormControl fullWidth>
            <InputLabel id="status">User</InputLabel>
            <Select
              labelId="status"
              id="role"
              name="role"
              // value={users.name}
              label="Status"
              onChange={()=>{
                handleSelect()}}
              required
            >
              {users &&
                users
                  .filter((newrole) => newrole.role === "Client")
                  .map((newrole, index) => {
                    return <MenuItem
                    value={newrole.name}
                  key={newrole._id}>{newrole?.name}</MenuItem>;
                  })}
            </Select>
          </FormControl>
          <section className="grid grid-cols-4 gap-8 my-2">
            <div className="md:col-span-2 col-span-4">
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
                />
              </FormControl>
            </div>
            <div className="md:col-span-2 col-span-4">
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
                />
              </FormControl>
            </div>
          </section>
          {/* <div className="w-full mb-3  "></div>
          <div className="w-full mb-3  "></div> */}
          <section className="grid grid-cols-4 gap-8 my-2">
            <div className="md:col-span-2 col-span-4">
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
            <div className="md:col-span-2 col-span-4">
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
          <div className="flex items-start justify-between w-full mt-5">
            <div className="flex flex-col">
              <button
                // onClick={handleClose}
                type="submit"
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
                accept="application/pdf"
                // required
              />
            </div>
          </div>
          {attachData && (
            <div className="flex w-full mt-3 justify-between">
              <p>{attachData.name}</p>

              <button type="button" onClick={removeAttachData}>
                <CloseIcon />
              </button>
            </div>
          )}
        </form>
      </Dialog>
    </div>
  );
}
