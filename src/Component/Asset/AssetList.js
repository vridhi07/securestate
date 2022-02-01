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
  handleSwitchAssets,
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
      className="w-full flex items-center text-gray-500 border-b-2 pl-8 pr-2 hover:bg-slate-100  "
      key={id}
    >
      <div className="w-[95%] flex justify-between   items-center  md:pr-3  py-3 ">
        <div>
          <h4>{asset_name}</h4>
          <p>{asset_type}</p>
        </div>
        <div className="flex items-center justify-start">
          <Switch
            checked={status === "INACTIVE" ? false : true}
            label={status}
            onChange={() =>
              handleSwitchAssets(id, status === "INACTIVE" ? false : true)
            }
            // inputProps={{ "aria-label": "controlled" }}
          />
          <span
            type="button"
            className={` text-white rounded-sm tracking-wider ${
              status === "ACTIVE"
                ? "text-green-500  px-4 py-2"
                : "text-red-500 px-2 py-2"
            }`}
            // onClick={() => handleStatus(status, id)}
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
          <div className="ml-5">
            <p
              onClick={() => navigate(`${id}/details`, { state: { id } })}
              className="text-sky-600 hover:cursor-pointer hover:text-sky-700 underline  "
            >
              Details
            </p>
          </div>
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
