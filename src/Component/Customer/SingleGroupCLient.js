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
    <div className="mb-3 w-full">
      <div className="flex items-center  ">
        <div className=" z-10 -mr-11 mt-1 h-[5rem] w-[5rem] rounded-full">
          <img
            src={dummyProfile}
            alt="profile"
            className=" w-full rounded-full object-cover"
          />
        </div>
        <div className="flex h-20 w-full items-center justify-between rounded-md bg-primary-clr px-3 py-0.5  pl-10 text-[#575758]">
          <div className="ml-4">
            <h4>{groupUser.user_name}</h4>
            <h4>
              {groupUser.email}, {groupUser.phone}
            </h4>
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
