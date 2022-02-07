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
          className="px-5 md:px-20 py-3 relative"
          onSubmit={submitSubscription}
          autoComplete="off"
        >
          <button
            type="button"
            onClick={closeSubscription}
            className="absolute top-3 right-3 "
          >
            <CloseIcon />
          </button>
          <header>
            <h2 className="text-lg font-bold text-gray-700 mt-3 mb-3 text-center ">
              Add Subscription
            </h2>
          </header>
          <section className="grid grid-cols-4 gap-8 my-2">
            <div className="md:col-span-2 col-span-4">
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
              />
            </div>
            <div className="md:col-span-2 col-span-4">
              <TextField
                id="asset"
                label="Asset"
                name="asset"
                variant="outlined"
                value={subscribeForm.asset}
                onChange={handleSubscribeForm}
                fullWidth
                inputProps={{ maxLength: 50 }}
                required
              />
            </div>
          </section>

          <section className="grid grid-cols-4 gap-8 my-3">
            <div className="md:col-span-2 col-span-4">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="start Date"
                  value={subscribeForm.start_date}
                  onChange={(e) => handleDate(e, "start_date")}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
            <div className="md:col-span-2 col-span-4">
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
          </section>

          <section className="grid grid-cols-4 gap-8 my-3">
            <div className="md:col-span-2 col-span-4">
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
                />
              </FormControl>
            </div>
            <div className="md:col-span-2 col-span-4"></div>
          </section>
          <section className="w-full mt-4">
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
            />
          </section>

          <div className="text-center mt-4 pt-3 pb-5">
            <button type="submit" className="py-2 px-7 bg-[#EBEBEB] rounded-md">
              Add Subscription
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
