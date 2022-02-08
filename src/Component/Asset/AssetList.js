import React, { useRef, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import AssetMenuButton from "../Asset/AssetMenuButton";
import { useNavigate } from "react-router-dom";
const AssetList = ({
  item = [],
  handleMenuOpen,
  handleMenuClose,
  handleStatus,
  handleEdit,
  anchorEl,
  openDeleteModal,
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
      className="w-full  rounded-md my-3 bg-white flex items-center text-gray-500  pl-8 pr-2  "
      key={id}
    >
      <div className="w-[95%] flex justify-between   items-center  md:pr-3  py-1 ">
        <div>
          <h4>{asset_name}</h4>
          <p>{asset_type}</p>
        </div>
        <div className="flex items-center justify-start">
          <div className="mr-5">
            <p
              onClick={() => navigate(`${id}/details`, { state: { id } })}
              className="text-sky-600 hover:cursor-pointer hover:text-sky-700 underline  "
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
            className={` text-white rounded-sm tracking-wider cursor-pointer ${
              status === "ACTIVE"
                ? "bg-[#89CF4B] text-white px-4 py-2 rounded-md"
                : "bg-[#EF4431] text-white px-2 py-2 rounded-md"
            }`}
            onClick={() => handleStatus(status, id)}
            // disabled={updateLoading}
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
      <div className="w-[2%] text-center">
        <IconButton onClick={(e) => handleMenuOpen(e, id)}>
          <MoreVertIcon />
        </IconButton>
        <AssetMenuButton
          anchorEl={anchorEl}
          handleMenuClose={handleMenuClose}
          handleEdit={handleEdit}
          openDeleteModal={openDeleteModal}
        />
      </div>
    </div>
  );
};

export default AssetList;
