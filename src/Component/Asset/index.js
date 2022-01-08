import FilterOption from "../Common/FilterOption";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as assestAction from "../../Redux/actions/AssetActions";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import AssetModal from "./AssestModalForm";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 500,
  width: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AssetsCom = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { open } = state.assetReducer;

  return (
    <div className="mt-8 ">
      <div className="xl:mx-56 md:mx-44 sm:mx-36 mx-12">
        <FilterOption />
      </div>
      <section className="mt-8 mb-4 flex flex-col  w-95.5 mx-auto">
        <div className="flex justify-between items-center w-full ">
          <h2 className="text-orange-cus-1 tracking-wide  text-6xl">Assets</h2>
          <button
            onClick={() => dispatch(assestAction.assetModalOPen())}
            className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm"
          >
            add asset
          </button>
        </div>
        <div className="mt-4 flex-col justify-between items-center w-full border-2 h-3/5 ">
          {["name", "cat", "roger"].map((item, index) => {
            console.log(item);
            return (
              <Link
                to="editassest"
                key={index}
                className="flex justify-between  items-center px-8 md:pr-24 border-b-2 py-3 text-gray-500"
                onClick={() => dispatch(assestAction.getAssetData(item))}
              >
                <div>
                  <h2>Asset Name</h2>
                  <p>Asset Type</p>
                </div>
                <div>
                  <h2>Status</h2>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <Dialog
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AssetModal />
      </Dialog>
    </div>
  );
};

export default AssetsCom;
