import React from "react";
import dummyProfile from "../../constantData/images/blank-profile-picture.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteMenu from "./DeleteMenu";
const SingleGroupCLient = ({
  groupUser,
  anchorEl,
  handleMenuOpen,
  handleMenuClose,
  openDeleteModal,
}) => {
  // console.log(groupUser);
  return (
    <div className="w-full flex flex-col  mb-3">
      <div className="flex items-center w-full ">
        <div className="w-[5rem] h-[5rem] border border-gray-700">
          <img
            src={dummyProfile}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex justify-between items-start border border-gray-600 ml-3 h-20 rounded-md px-3 py-1">
          <div>
            <h4>{groupUser.user_name}</h4>
            <h4>{groupUser.email}</h4>
            <h4>{groupUser.phone}</h4>
          </div>
          <div>
            <button
              className="mt-5"
              onClick={(e) => handleMenuOpen(e, groupUser._id)}
            >
              <MoreVertIcon />
            </button>
            <DeleteMenu
              anchorEl={anchorEl}
              handleMenuClose={handleMenuClose}
              openDeleteModal={openDeleteModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGroupCLient;
