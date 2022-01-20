import React from "react";
import dummyProfile from "../../constantData/images/blank-profile-picture.png";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const SingleGroupCLient = () => {
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
            <h4>Client User #1</h4>
            <h4>Email</h4>
            <h4>Phone</h4>
          </div>
          <div>
            <button className="mt-5">
              <MoreVertIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGroupCLient;
