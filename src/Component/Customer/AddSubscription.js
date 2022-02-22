import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
export default function AddSubscription({
  isSubscriptionOpen,
  closeSubscription,
  subscribeForm,
  handleSubscribeForm,
  handleDate,
  submitSubscription,
  allAsset = [],
}) {
  return (
    <div>
      <Dialog open={isSubscriptionOpen}>
        <form
          className="bg-primary-clr"
          onSubmit={submitSubscription}
          autoComplete="off"
        >
          <header className="flex items-center justify-between bg-orange-cus-1 px-4 py-2 text-white">
            <h2 className="mt-3 mb-3 text-center text-lg font-bold  ">
              Add Subscription
            </h2>
            <button
              type="button"
              onClick={closeSubscription}
              // className="absolute top-3 right-3 "
            >
              <CloseIcon />
            </button>
          </header>
          <div className="px-8 py-4">
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <TextField
                  id="subscription"
                  label="Subscription"
                  name="subscription"
                  variant="outlined"
                  value={subscribeForm.subscription}
                  onChange={handleSubscribeForm}
                  fullWidth
                  inputProps={{ maxLength: 50 }}
                  required
                  sx={{ backgroundColor: "white" }}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                {/* <TextField
                id="asset"
                label="Asset"
                name="asset"
                variant="outlined"
                value={subscribeForm.asset}
                onChange={handleSubscribeForm}
                fullWidth
                inputProps={{ maxLength: 50 }}
                required
              /> */}
                <FormControl fullWidth>
                  <InputLabel id="asset">Asset</InputLabel>
                  <Select
                    labelId="asset"
                    id="asset"
                    label="Asset"
                    name="asset"
                    variant="outlined"
                    value={subscribeForm.asset}
                    onChange={handleSubscribeForm}
                    required
                    sx={{ bgcolor: "white" }}
                    // size="small"
                  >
                    {allAsset &&
                      allAsset?.map((item) => {
                        return (
                          <MenuItem value={item._id} key={item._id}>
                            {item.asset_name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </div>
            </section>

            <section className="my-3 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <div className="bg-white">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="start Date"
                      value={subscribeForm.start_date}
                      onChange={(e) => handleDate(e, "start_date")}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2">
                <div className="bg-white">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="End Date"
                      value={subscribeForm.end_date}
                      minDate={subscribeForm.start_date}
                      onChange={(e) => handleDate(e, "end_date")}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </section>

            <section className="my-3 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Monthly Price
                  </InputLabel>
                  <OutlinedInput
                    id="monthly_price"
                    value={subscribeForm.monthly_price}
                    onChange={handleSubscribeForm}
                    name="monthly_price"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label=" Monthly Price"
                    required
                    sx={{ backgroundColor: "white" }}
                  />
                </FormControl>
              </div>
              <div className="col-span-4 md:col-span-2"></div>
            </section>
            <section className="mt-4 w-full">
              <TextField
                id="comments"
                label="Comments"
                name="comments"
                variant="outlined"
                value={subscribeForm.comments}
                onChange={handleSubscribeForm}
                fullWidth
                multiline
                rows={4}
                inputProps={{ maxLength: 250 }}
                required
                sx={{ backgroundColor: "white" }}
              />
            </section>

            <div className="mt-4 pt-3 pb-5 text-center">
              <button
                type="submit"
                className="hover rounded-md bg-primary-btn py-2 px-7 text-white"
              >
                Add Subscription
              </button>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
