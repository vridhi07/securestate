import FilterOption from "../../../Component/Common/FilterOption";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as assestAction from "../../../Redux/actions/AssetActions";
import Dialog from "@mui/material/Dialog";

import AssetModal from "../../../Component/Asset/AssestModalForm";

const AssetsIndex = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { open } = state.assetReducer;
  const navigate = useNavigate();
  return (
    <div className="mt-8 ">
      <div className="xl:mx-56 md:mx-44 sm:mx-36 mx-12">
        <FilterOption />
      </div>
      <section className="mt-8 mb-4 flex flex-col  w-95.5 mx-auto">
        <div className="flex justify-between items-center w-full ">
          <h4 className="text-orange-cus-1 tracking-wide  text-6xl">Assets</h4>
          <button
            onClick={() => dispatch(assestAction.assetModalOPen())}
            className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm"
          >
            add asset
          </button>
        </div>
        <div className="mt-4 flex-col justify-between items-center w-full border-2 h-3/5 ">
          {["name", "cat", "roger"].map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between  hover:cursor-pointer items-center px-8 md:pr-24 border-b-2 py-3 text-gray-500"
                onClick={() =>
                  navigate(`${index}/details`, { state: { id: index } })
                }
              >
                <div>
                  <h4>Asset Name</h4>
                  <p>Asset Type</p>
                </div>
                <div>
                  <h4>Status</h4>
                </div>
              </div>
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

export default AssetsIndex;
