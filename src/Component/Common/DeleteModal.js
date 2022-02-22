import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteModal({
  isDeleteModalOpen,
  closeDeleteModal,
  handleDelete,
}) {
  return (
    <div>
      <Dialog open={isDeleteModalOpen}>
        <DialogTitle sx={{ px: 5, py: 5, mt: 4 }}>
          Are you sure you want to delete ?
        </DialogTitle>
        <DialogContent>
          <div className="flex items-center justify-start gap-4 py-3 px-5">
            <button
              className="hover rounded-md bg-primary-btn px-4 py-2 text-lg tracking-widest text-white transition-all "
              onClick={handleDelete}
            >
              Yes
            </button>
            <button
              className="rounded-md border px-5 py-2 text-lg tracking-widest text-primary-btn transition-all hover:border-0 hover:bg-primary-btn hover:text-white "
              onClick={closeDeleteModal}
            >
              NO
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
