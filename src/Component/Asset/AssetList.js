import React, { useRef, useState } from "react";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
// import Switch from "@mui/material/Switch";
import AssetMenuButton from "../Asset/AssetMenuButton";
import { useNavigate } from "react-router-dom";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { IoTrashOutline } from "react-icons/io5";
import Fab from "@mui/material/Fab";
const AssetList = ({
  item = [],
  // handleMenuOpen,
  // handleMenuClose,
  handleStatus,
  handleEdit,
  // anchorEl,
  openDeleteModal,
  updateLoading,
  // handleSwitchAssets,
}) => {
  const { asset_name, asset_type, status, _id: id } = item;
  // let newStatus = status === "INACTIVE" ? false : true;
  // const [check, setCheck] = useState(newStatus);
  // console.log(newStatus);

  const tag = useRef();
  const navigate = useNavigate();
  // const handleSwitch = () => {
  //   let input = tag.current.checked;
  //   return input === "INACTIVE" ? true : false;
  // };
  return (
    <div
      className="my-3  flex w-full items-center rounded-md bg-white py-3 pl-8  pr-2 text-gray-500  "
      key={id}
    >
      <div className="flex w-[95%] items-center   justify-between  py-1  md:pr-3 ">
        <div className=" max-w-[460px] overflow-hidden">
          <h4>{asset_name}</h4>
          <p>{asset_type}</p>
        </div>
        <div className="flex items-center justify-start gap-4">
          <div className="flex  items-center gap-4 text-center">
            <Fab size="small" onClick={() => handleEdit(id)}>
              <ModeEditOutlineIcon sx={{ color: "green" }} />
            </Fab>
            <Fab size="small" onClick={() => openDeleteModal(id)}>
              <IoTrashOutline className="text-lg text-red-500" />
            </Fab>
            {/* <AssetMenuButton
          anchorEl={anchorEl}
          handleMenuClose={handleMenuClose}
          handleEdit={handleEdit}
          openDeleteModal={openDeleteModal}
        /> */}
          </div>
          <div className="mr-5">
            <p
              onClick={() => navigate(`${id}/details`, { state: { id } })}
              className="text-sky-600 underline hover:cursor-pointer hover:text-sky-700  "
            >
              Details
            </p>
          </div>
          {/* we may need later */}
          {/* <Switch
            checked={status === "INACTIVE" ? false : true}
            label={status}
            onChange={() =>
              handleSwitchAssets(id, status === "INACTIVE" ? false : true)
            }
            // inputProps={{ "aria-label": "controlled" }}
          /> */}
          <span
            type="button"
            className={` cursor-pointer rounded-sm tracking-wider text-white ${
              status === "ACTIVE"
                ? "rounded-md bg-[#89CF4B] px-4 py-2 text-white"
                : "rounded-md bg-[#EF4431] px-2 py-2 text-white"
            }`}
            onClick={() => handleStatus(status, id)}
            disabled={updateLoading}
          >
            {status}
          </span>

          {/* <input 
            type="checkbox"
            checked={status === "INACTIVE" ? false : true}
            onChange={() =>
              handleSwitchAssets(id, status === "INACTIVE" ? false : true)
            }
            ref={tag}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default AssetList;
