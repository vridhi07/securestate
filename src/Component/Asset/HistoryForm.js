import Dialog from "@mui/material/Dialog";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
export default function FormDialog({
  isHistoryOpen,
  closeHistoryModal,
  historyEvent,
  handleEventChange,
  handleDate,
  handleSubmit,
}) {
  const { date, event, description } = historyEvent;

  return (
    <div>
      <Dialog open={isHistoryOpen}>
        <form className="bg-primary-clr" onSubmit={handleSubmit}>
          <header className="py-3text-white flex h-12 w-full items-center justify-between bg-orange-cus-1 px-5 text-white ">
            <h2 className=" text-center text-lg font-bold  ">Add Event</h2>
            <button
              type="button"
              onClick={closeHistoryModal}
              // className="absolute top-4 right-4"
            >
              <CloseIcon />
            </button>
          </header>
          <div className="px-8 py-4">
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <TextField
                  id="Event"
                  type={"text"}
                  label="Event"
                  variant="outlined"
                  name="event"
                  value={event}
                  onChange={handleEventChange}
                  fullWidth
                  required
                  sx={{ mb: 3, bgcolor: "white" }}
                />
              </div>
              <div className="col-span-4  md:col-span-2">
                <div className="bg-white">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="Date"
                      value={date}
                      minDate={new Date()}
                      onChange={handleDate}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </section>

            <TextField
              id="Description"
              type={"text"}
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              name="description"
              value={description}
              required
              onChange={handleEventChange}
              sx={{ mb: 3, bgcolor: "white" }}
            />
            <div className="my-4 flex items-center justify-between text-white">
              <button
                type="submit"
                className="hover rounded-md bg-primary-btn px-7 py-2 tracking-wider "
              >
                Add
              </button>
              <button
                type="button"
                className="hover rounded-md bg-primary-btn px-4 py-2 tracking-wider "
                onClick={closeHistoryModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
