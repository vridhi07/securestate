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
  const { Asset, isLoading, Message } = state.Assets;
  const { selectedCompany } = state?.company;

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

  const handleAssetForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setAssetForm({ ...assetForm, [name]: value });
  };

  //* open editANdDelete PopOver
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

  //* Handle Status
  const handleStatus = (status, id) => {
    let newStatus = status === "INACTIVE" ? "ACTIVE" : "INACTIVE";
    const newData = {
      id,
      status: newStatus,
    };
    dispatch(action.UpdateAssetRequest(newData));
  };

  //* switch on edit
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

  // * BOTH ADD AND EDIT
  const handleSubmitAsset = (e) => {
    e.preventDefault();
    const {
      asset_name,
      asset_type,
      status,
      tech_stack,
      third_party_components,
      internal_external,
      additional_details,
    } = assetForm;
    //* TO AAdd
    if (!isEdit) {
      const company_id = selectedCompany._id;
      const addData = {
        asset_name,
        asset_type,
        status,
        tech_stack,
        third_party_components,
        internal_external,
        additional_details,
        company_id,
      };
      console.log(addData);
      dispatch(action.AddAssetRequest(addData));
    }
    //* for Edit
    if (isEdit) {
      const editData = {
        id: selectedId,
        asset_name,
        asset_type,
        status,
        tech_stack,
        third_party_components,
        internal_external,
        additional_details,
      };
      dispatch(action.UpdateAssetRequest(editData));
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
  }, [Message]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="mt-8 ">
      <div className="max-w-2xl mx-auto">
        <FilterOption />
      </div>
      <section className="mt-8 mb-4 flex flex-col  w-95.5 mx-auto">
        <div className="flex justify-between items-center w-full ">
          <h4 className="text-orange-cus-1 tracking-wide  text-6xl">Assets</h4>
          <div className="flex flex-col items-start justify-end">
            {!selectedCompany && (
              <p className="text-red-500 pb-3 ">
                To Add Asset Please select Company
              </p>
            )}
            <button
              onClick={handleClickOpen}
              className={`bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm ${
                !selectedCompany && "ml-auto"
              } `}
              disabled={!selectedCompany}
            >
              add asset
            </button>
          </div>
        </div>
        <div className="mt-4 min-w-[400px] flex-col justify-between items-center w-full border-2 h-3/5 ">
          {Asset.length > 0 &&
            Asset?.map((item) => {
              const { asset_name, asset_type, status, _id: id } = item;
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
                      <button
                        type="button"
                        className={` text-white rounded-sm tracking-wider ${
                          status === "ACTIVE"
                            ? "bg-green-500  px-4 py-2"
                            : "bg-red-500 px-2 py-2"
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
                          className="text-sky-600 hover:cursor-pointer hover:text-sky-700 "
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
