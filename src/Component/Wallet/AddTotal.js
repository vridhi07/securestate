import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
export default function AddTotal({
  isTotalOpen,
  closeTotalModal,
  totalData,
  handleTotalChange,
  submitTotal,
}) {
  const { totalEarned, reputationScore, pentestCompleted } = totalData;

  return (
    <div>
      <Dialog open={isTotalOpen}>
        <form className="relative px-16 py-8" onSubmit={submitTotal}>
          <button
            type="button"
            onClick={closeTotalModal}
            className="absolute top-4 right-4"
          >
            <CloseIcon />
          </button>
          <section className="my-2 grid grid-cols-4 gap-8">
            <div className="col-span-4 md:col-span-2">
              <TextField
                name="totalEarned"
                id="AssetName"
                label="Total Earned"
                variant="outlined"
                size="medium"
                inputProps={{ maxLength: 80 }}
                value={totalEarned}
                onChange={handleTotalChange}
                required
              />
            </div>
            <div className="col-span-4 md:col-span-2">
              <TextField
                name="reputationScore"
                id="AssetName"
                label="Reputation Score"
                variant="outlined"
                size="medium"
                inputProps={{ maxLength: 80 }}
                value={reputationScore}
                onChange={handleTotalChange}
                required
              />
            </div>
          </section>
          <section className="my-4 grid grid-cols-4 gap-8">
            <div className="col-span-4 md:col-span-2">
              <TextField
                name="pentestCompleted"
                id="pentestCompleted"
                label="Test Completed"
                variant="outlined"
                size="medium"
                inputProps={{ maxLength: 80 }}
                value={pentestCompleted}
                onChange={handleTotalChange}
                required
              />
            </div>
            <div className="col-span-4 md:col-span-2"></div>
          </section>
          <div className="w-full ">
            <button
              type="submit"
              className="rounded-md bg-primary-btn px-14 py-3 tracking-wide"
            >
              Submit
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
