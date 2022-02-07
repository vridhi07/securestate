import * as React from "react";
import Popover from "@mui/material/Popover";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Paper from "@mui/material/Paper";
export default function BasicPopover({
  anchorEl,
  handleMenuClose,
  openDeleteModal,
}) {
  const open = Boolean(anchorEl);
  const id = open ? "asset_edit_popover" : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        autoFocus={false}
      >
        <Paper sx={{ width: "10rem", borderRadius: 0 }}>
          {/* <button
            className="px-1 py-2 tracking-wider  flex justify-between items-center w-full text-left m-0 border border-black bg-[#AEDD94] hover:bg-green-500 "
            onClick={handleEdit}
          >
            <span>Edit</span>
            <ArrowRightIcon />
          </button> */}
          <button
            className="w-full text-left px-1 tracking-wider border-black py-2 m-0 border border-t-0 bg-[#F8B3B0] hover:bg-red-300"
            onClick={openDeleteModal}
          >
            Delete
          </button>
        </Paper>
      </Popover>
    </div>
  );
}
