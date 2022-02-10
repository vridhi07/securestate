import * as React from "react";
import Popover from "@mui/material/Popover";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Paper from "@mui/material/Paper";
export default function BasicPopover({
  anchorEl,
  handleMenuClose,
  handleEdit,
  openDeleteModal,
  showEdit,
}) {
  const open = Boolean(anchorEl);
  const id = open ? "asset_edit_popover" : undefined;
  // console.log(showEdit);
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
        elevation={0}
      >
        <Paper sx={{ width: "10rem", borderRadius: 3 }} elevation={0}>
          {showEdit && (
            <button
              className="m-0 flex w-full  items-center justify-between border  bg-[#AEDD94] px-1 py-2 text-left tracking-wider hover:bg-green-300 "
              onClick={handleEdit}
            >
              <span>Edit</span>
              <ArrowRightIcon />
            </button>
          )}
          <button
            className="m-0 flex w-full  items-center justify-between bg-[#F8B3B0]  px-1 py-2 text-left tracking-wider  hover:bg-red-300"
            onClick={openDeleteModal}
          >
            <span>Delete</span>
            {!showEdit && <ArrowRightIcon />}
          </button>
        </Paper>
      </Popover>
    </div>
  );
}
