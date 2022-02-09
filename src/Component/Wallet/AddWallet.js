import * as React from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
export default function AddTotal({
  isWalletOpen,
  walletDetail,
  closeIsWalletOpen,
  handleWalletChange,
}) {
  const { pentest, award, status, hackerId } = walletDetail;
  return (
    <div>
      <Dialog open={isWalletOpen}>
        <form className="px-16 py-8 relative">
          <button
            type="button"
            onClick={closeIsWalletOpen}
            className="absolute top-4 right-4"
          >
            <CloseIcon />
          </button>
          <section className="grid grid-cols-4 gap-8 my-2">
            <div className="md:col-span-2 col-span-4">
              <TextField
                name="total_earned"
                id="AssetName"
                label="Total Earned"
                variant="outlined"
                size="medium"
                inputProps={{ maxLength: 80 }}
                // value={asset_name}
                // onChange={handleAssetForm}
                required
              />
            </div>
            <div className="md:col-span-2 col-span-4">
              <TextField
                name="Reputation_Score"
                id="AssetName"
                label="Reputation Score"
                variant="outlined"
                size="medium"
                inputProps={{ maxLength: 80 }}
                // value={asset_name}
                // onChange={handleAssetForm}
                required
              />
            </div>
          </section>
          <section className="grid grid-cols-4 gap-8 my-4">
            <div className="md:col-span-2 col-span-4">
              <TextField
                name="test_completed"
                id="AssetName"
                label="Test Completed"
                variant="outlined"
                size="medium"
                inputProps={{ maxLength: 80 }}
                // value={asset_name}
                // onChange={handleAssetForm}
                required
              />
            </div>
            <div className="md:col-span-2 col-span-4"></div>
          </section>
          <div className="w-full ">
            <button className="px-14 py-3 bg-primary-btn tracking-wide rounded-md">
              Submit
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
