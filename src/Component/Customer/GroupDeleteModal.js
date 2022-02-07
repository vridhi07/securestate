import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteModal({
  isDeleteGroupOpen,
  closeIsDeleteGroupOpen,
  DeleteGroup,
}) {
  return (
    <div>
      <Dialog open={isDeleteGroupOpen}>
        <DialogTitle sx={{ px: 5, py: 5, mt: 4 }}>
          Are you sure you want to delete ?
        </DialogTitle>
        <DialogContent>
          <div className="flex justify-between items-center py-3 px-5">
            <button
              className="transition-all text-lg text-white bg-yes-btn hover:bg-red-400 tracking-widest rounded-md px-4 py-2"
              onClick={DeleteGroup}
            >
              Yes
            </button>
            <button
              className="transition-all text-lg text-white bg-no-btn hover:bg-green-400 tracking-widest rounded-md px-5 py-2 "
              onClick={closeIsDeleteGroupOpen}
            >
              NO
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
