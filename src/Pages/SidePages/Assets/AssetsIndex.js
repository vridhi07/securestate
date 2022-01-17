import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../../../Component/Common/Loader";
import FilterOption from "../../../Component/Common/FilterOption";
import AssetModal from "../../../Component/Asset/AssestModalForm";
import AssetMenuButton from "../../../Component/Asset/AssetMenuButton";
import * as action from "../../../Redux/action/index";
import { useDispatch, useSelector } from "react-redux";

const AssetsIndex = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { Asset, isLoading, message } = state.Assets;

  const [open, setOpen] = useState(false);
  const [assetForm, setAssetForm] = useState({
    asset_name: "",
    asset_type: "",
    status: "",
    tech_stack: "",
    third_party_components: "",
    internal_external: "",
    additional_details: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAssetForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setAssetForm({ ...assetForm, [name]: value });
  };

  const handleMenuOpen = (e, id) => {
    setAnchorEl(e.currentTarget);
    setSelectedId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAssetDelete = () => {
    handleMenuClose();
    dispatch(action.DeleteAssetRequest(selectedId));
  };

  const handleStatus = (status, id) => {
    let newStatus;
    if (status === "INACTIVE") {
      newStatus = "ACTIVE";
    }
    if (status === "ACTIVE") {
      newStatus = "INACTIVE";
    }

    dispatch(action.UpdateAssetRequest({ newStatus, id }));
  };

  const handleEdit = () => {
    let singleData = Asset.find((item) => item._id === selectedId);
    console.log(singleData);
    const {
      asset_name,
      asset_type,
      status,
      tech_stack,
      third_party_components,
      internal_external,
      additional_details,
    } = singleData;
    setIsEdit(true);
    handleClickOpen();
    handleMenuClose();
    setAssetForm({
      ...assetForm,
      asset_name,
      asset_type: asset_type,
      status: status,
      tech_stack,
      third_party_components,
      internal_external: internal_external,
      additional_details,
    });
  };

  const handleSubmitAsset = (e) => {
    e.preventDefault();
    if (!isEdit) {
      dispatch(action.AddAssetRequest(assetForm));
    }
    if (isEdit) {
      console.log("Edit");
      dispatch(action.UpdateAssetRequest(assetForm));
      setIsEdit(false);
    }
    handleClose();
    setAssetForm({
      ...assetForm,
      asset_name: "",
      asset_type: "",
      status: "",
      tech_stack: "",
      third_party_components: "",
      internal_external: "",
      additional_details: "",
    });
  };
  useEffect(() => {
    dispatch(action.AssetRequest());
  }, [message]);

  if (isLoading) {
    return <Loader />;
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
        <div className="mt-4 min-w-[400px] flex-col justify-between items-center w-full border-2 h-3/5 ">
          {Asset.length > 0 &&
            Asset?.map((item) => {
              const { asset_name, asset_type, status, _id: id } = item;
              return (
                <div
                  className="w-full flex items-center text-gray-500 border-b-2 pl-8 pr-2   "
                  key={id}
                >
                  <div className="w-[95%] flex justify-between  hover:cursor-pointer items-center  md:pr-3  py-3 ">
                    <div>
                      <h4>{asset_name}</h4>
                      <p>{asset_type}</p>
                    </div>
                    <div className="flex items-center justify-start">
                      <button
                        type="button"
                        className={` text-white rounded-sm tracking-wider ${
                          status === "ACTIVE"
                            ? "bg-green-500  px-8 py-2"
                            : "bg-red-500 px-6 py-2"
                        }`}
                        onClick={() => handleStatus(status, id)}
                      >
                        {status}
                      </button>
                      <div className="ml-5">
                        <p
                          onClick={() =>
                            navigate(`${id}/details`, { state: { id } })
                          }
                          className="text-sky-600 hover:cursor-pointer"
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
                      handleAssetDelete={handleAssetDelete}
                    />
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
          isEdit={isEdit}
          handleSubmitAsset={handleSubmitAsset}
        />
      </Dialog>
    </div>
  );
};

export default AssetsIndex;
