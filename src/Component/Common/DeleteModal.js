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
          <div className="flex justify-between items-center py-3 px-5">
            <button
              className="transition-all text-lg text-white bg-[#F8B3B0] hover:bg-red-600 tracking-widest rounded-md px-4 py-2"
              onClick={handleDelete}
            >
              Yes
            </button>
            <button
              className="transition-all text-lg text-white bg-[#AEDD94] hover:bg-green-500 tracking-widest rounded-md px-5 py-2 "
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
