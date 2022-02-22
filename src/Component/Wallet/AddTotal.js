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
  isTotalEdit,
}) {
  const { totalEarned, reputationScore, pentestCompleted } = totalData;

  return (
    <div>
      <Dialog open={isTotalOpen}>
        <form className="bg-primary-clr" onSubmit={submitTotal}>
          <header className="flex justify-between bg-orange-cus-1 py-3 px-4 text-white">
            <h4></h4>
            <button
              type="button"
              onClick={closeTotalModal}
              // className="absolute top-4 right-4"
            >
              <CloseIcon />
            </button>
          </header>
          <div className="px-8 py-4">
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
            <div className="flex items-center justify-start gap-4  ">
              <button
                type="submit"
                className="rounded-md bg-primary-btn px-8 py-2 tracking-wide text-white"
              >
                {isTotalEdit ? "Save" : "Submit"}
              </button>
              <button
                type="button"
                onClick={closeTotalModal}
                className="rounded-md border border-primary-btn  bg-white px-6 py-2 text-primary-btn"
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
