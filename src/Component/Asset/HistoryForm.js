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
        <form className="px-5 py-2 md:px-20 relative" onSubmit={handleSubmit}>
          <button
            type="button"
            onClick={closeHistoryModal}
            className="absolute top-4 right-4"
          >
            <CloseIcon />
          </button>
          <h2 className="mb-3 py-3 font-bold text-gray-700 text-lg text-center">
            Add Event
          </h2>
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
            sx={{ mb: 3 }}
          />
          <div className="mb-3 w-full">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                label="Date"
                value={date}
                // minDate={startDate}

                onChange={handleDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
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
            sx={{ mb: 3 }}
          />
          <div className="flex items-center justify-between my-4">
            <button
              type="submit"
              className="px-7 py-2 bg-[#606060] tracking-wider rounded-md"
            >
              Add
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-[#606060] tracking-wider rounded-md"
              onClick={closeHistoryModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
