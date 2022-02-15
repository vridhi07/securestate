import * as React from "react";
import Popover from "@mui/material/Popover";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Paper from "@mui/material/Paper";
export default function BasicPopover({
  anchorEl,
  handleMenuClose,
  handleEdit,
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
        elevation={0}
        autoFocus={false}
      >
        <Paper sx={{ width: "10rem", borderRadius: 0 }}>
          <button
            className="m-0 flex w-full  items-center justify-between border border-black bg-[#AEDD94] px-1 py-2 text-left tracking-wider hover:bg-green-500 "
            onClick={handleEdit}
          >
            <span>Edit</span>
            <ArrowRightIcon />
          </button>
          <button
            className="m-0 w-full border border-t-0 border-black bg-[#F8B3B0] px-1 py-2 text-left tracking-wider hover:bg-red-600"
            onClick={openDeleteModal}
          >
            Delete
          </button>
        </Paper>
      </Popover>
    </div>
  );
}
