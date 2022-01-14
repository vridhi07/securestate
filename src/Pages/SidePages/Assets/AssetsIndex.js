import FilterOption from "../../../Component/Common/FilterOption";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import * as assestAction from "../../../Redux/actions/AssetActions";
import Dialog from "@mui/material/Dialog";

import AssetModal from "../../../Component/Asset/AssestModalForm";
import * as action from "../../../Redux/action/index";
import { useDispatch, useSelector } from "react-redux";
const AssetsIndex = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  const [assetForm, setAssetForm] = useState({
    asset_name: "",
    asset_type: "",
    status: "",
    tech_stack: "",
    third_party_components: "",
    internal_external: "",
    additional_details: "",
  });

  const { Asset, isLoading } = state.Assets;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
  };

  const handleAssetForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setAssetForm({ ...assetForm, [name]: value });
  };
  useEffect(() => {
    dispatch(action.AssetRequest());
  }, []);
  if (isLoading) {
    return <div>Loading......</div>;
  }
  return (
    <div className="mt-8 ">
      <div className="xl:mx-56 md:mx-44 sm:mx-36 mx-12">
        <FilterOption />
      </div>
      <section className="mt-8 mb-4 flex flex-col  w-95.5 mx-auto">
        <div className="flex justify-between items-center w-full ">
          <h4 className="text-orange-cus-1 tracking-wide  text-6xl">Assets</h4>
          <button
            onClick={handleClickOpen}
            className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm"
          >
            add asset
          </button>
        </div>
        <div className="mt-4 flex-col justify-between items-center w-full border-2 h-3/5 ">
          {Asset?.map((item) => {
            const { asset_name, asset_type, status, _id: id } = item;
            return (
              <div
                key={id}
                className="flex justify-between  hover:cursor-pointer items-center px-8 md:pr-24 border-b-2 py-3 text-gray-500"
                onClick={() => navigate(`${id}/details`, { state: { id } })}
              >
                <div>
                  <h4>{asset_name}</h4>
                  <p>{asset_type}</p>
                </div>
                <div>
                  <h4>{status}</h4>
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
        <AssetModal
          handleClose={handleClose}
          handleAssetForm={handleAssetForm}
          assetForm={assetForm}
        />
      </Dialog>
    </div>
  );
};

export default AssetsIndex;
