import * as React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
export default function AddTotal({
  isWalletOpen,
  walletDetail,
  closeIsWalletOpen,
  handleWalletChange,
  onSubmitWallet,
  AllPentest = [],
  isError,
}) {
  const { pentest, award, status, hackerId } = walletDetail;
  return (
    <div>
      <Dialog open={isWalletOpen}>
        <form
          className="px-16 py-8 relative"
          onSubmit={onSubmitWallet}
          autoComplete="off"
        >
          <button
            type="button"
            onClick={closeIsWalletOpen}
            className="absolute top-4 right-4"
          >
            <CloseIcon />
          </button>
          {isError.formStatus && (
            <p className="text-center text-red-500">{isError.msg}</p>
          )}
          <section className="grid grid-cols-4 gap-8 my-2">
            <div className=" col-span-4">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Pentest</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={pentest}
                  label="Pentest"
                  name="pentest"
                  onChange={handleWalletChange}
                >
                  {AllPentest &&
                    AllPentest.map((item) => {
                      return (
                        <MenuItem key={item._id} value={item._id}>
                          {item.title}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </div>
          </section>
          <section className="grid grid-cols-4 gap-8 my-4">
            <div className="md:col-span-2 col-span-4">
              <TextField
                name="award"
                id="award"
                label="Award"
                variant="outlined"
                size="medium"
                inputProps={{ maxLength: 80 }}
                value={award}
                onChange={handleWalletChange}
                required
              />
            </div>
            <div className="md:col-span-2 col-span-4">
              {/* <TextField
                name="status"
                id="status"
                label="Status"
                variant="outlined"
                size="medium"
                inputProps={{ maxLength: 80 }}
                value={status}
                onChange={handleWalletChange}
                required
              /> */}
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Status
                </InputLabel>
                <Select
                  labelId="status"
                  value={status}
                  onChange={handleWalletChange}
                  autoWidth
                  label="Status"
                  name="status"
                  id="status"
                  label="Status"
                  variant="outlined"
                  size="medium"
                >
                  <MenuItem value={"paid"}>paid</MenuItem>
                  <MenuItem value={"pending"}>pending</MenuItem>
                </Select>
              </FormControl>
            </div>
          </section>
          <div className="w-full ">
            <button
              type="submit"
              className="px-14 py-3 bg-primary-btn tracking-wide rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
