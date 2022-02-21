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
  // isError,
}) {
  const { pentest, award, status } = walletDetail;
  return (
    <div>
      <Dialog open={isWalletOpen}>
        <form
          className="bg-primary-clr"
          onSubmit={onSubmitWallet}
          autoComplete="off"
        >
          <header className="flex justify-between bg-orange-cus-1 py-3  px-4 text-white">
            <h4 className="text-center text-2xl font-bold capitalize tracking-wider">
              Add new Wallet
            </h4>
            <button
              type="button"
              onClick={closeIsWalletOpen}
              className="absolute top-4 right-4"
            >
              <CloseIcon />
            </button>
          </header>

          {/* {isError.formStatus && (
            <p className="text-center text-red-500">{isError.msg}</p>
          )} */}

          <div className="px-8 py-4">
            <section className="my-2 grid grid-cols-4 gap-8">
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
                    sx={{ bgcolor: "white" }}
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
            <section className="my-4 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
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
                  sx={{ bgcolor: "white" }}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
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
                    variant="outlined"
                    size="medium"
                    sx={{ bgcolor: "white" }}
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
                className="hover rounded-md bg-primary-btn px-14 py-3 tracking-wide text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
