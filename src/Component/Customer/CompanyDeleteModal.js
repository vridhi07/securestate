import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function CompanyDeleteModal({
  isCompanyDeleteOpen,
  closeIsCompanyDeleteOpen,
  deleteCompany,
}) {
  return (
    <div>
      <Dialog open={isCompanyDeleteOpen}>
        <DialogTitle sx={{ px: 5, py: 5, mt: 4 }}>
          Are you sure you want to delete ?
        </DialogTitle>
        <DialogContent>
          <div className="flex items-center justify-between py-3 px-5">
            <button
              className="rounded-md bg-yes-btn px-4 py-2 text-lg tracking-widest text-white transition-all hover:bg-red-400"
              onClick={deleteCompany}
            >
              Yes
            </button>
            <button
              className="rounded-md bg-no-btn px-5 py-2 text-lg tracking-widest text-white transition-all hover:bg-green-400 "
              onClick={closeIsCompanyDeleteOpen}
            >
              NO
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
