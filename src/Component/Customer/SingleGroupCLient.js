import React from "react";
import dummyProfile from "../../constantData/images/blank-profile-picture.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteMenu from "./DeleteMenu";
import { IoTrashOutline } from "react-icons/io5";
import IconButton from "@mui/material/IconButton";
const SingleGroupCLient = ({
  groupUser,
  // anchorEl,
  // handleMenuOpen,
  // handleMenuClose,
  openDeleteModal,
}) => {
  // console.log(groupUser);
  return (
    <div className="mb-3 flex w-full  flex-col">
      <div className="flex w-full items-center ">
        <div className="h-[5rem] w-[5rem] border border-gray-700">
          <img
            src={dummyProfile}
            alt="profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-3 flex h-20 w-full items-start justify-between rounded-md border border-gray-600 px-3 py-1">
          <div>
            <h4>{groupUser.user_name}</h4>
            <h4>{groupUser.email}</h4>
            <h4>{groupUser.phone}</h4>
          </div>
          <div>
            {/* <button className="mt-5">
              <IoTrashOutline />
            </button> */}
            <IconButton
              color="error"
              onClick={(e) => openDeleteModal(groupUser._id)}
            >
              <IoTrashOutline />
            </IconButton>
            {/* <DeleteMenu
              anchorEl={anchorEl}
              handleMenuClose={handleMenuClose}
              openDeleteModal={openDeleteModal}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGroupCLient;
