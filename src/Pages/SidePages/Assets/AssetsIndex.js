import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loader from "../../../Component/Common/PentestLoader";
import FilterOption from "../../../Component/Common/FilterOption";
import AssetModal from "../../../Component/Asset/AssestModalForm";
import AssetMenuButton from "../../../Component/Asset/AssetMenuButton";
import DeleteModal from "../../../Component/Common/DeleteModal";
import * as action from "../../../Redux/action/index";
import { useDispatch, useSelector } from "react-redux";

const AssetsIndex = () => {
  const navigate = useNavigate();

  // const updateAssetStatus = useSelector((state) => state.)
  const dispatch = useDispatch();
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
  const [assetPageNumber, setAssetPageNumber] = useState(1);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  // * Redux data
  const { Asset, isLoading, Message, updateLoading } = useSelector(
    (state) => state.Assets
  );
  const { selectedCompany } = useSelector((state) => state?.company);
  const { userDetails } = useSelector((state) => state?.user);

  const getCompanyId = (role) => {
    if (role === "superAdmin") {
      return selectedCompany;
    }
    return userDetails?.company_id._id;
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const company_id = getCompanyId(userDetails?.role);
  // console.log(company_id);
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
  const handleAssetPageNumber = (e, i) => {
    setAssetPageNumber(i);
  };
  const openDeleteModal = () => {
    setDeleteModalOpen(true);
    handleMenuClose();
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedId(null);
  };
  const handleDelete = () => {
    dispatch(action.DeleteAssetRequest({ assetId: selectedId }));
    closeDeleteModal();
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
    let singleData = Asset?.assetData.find((item) => item._id === selectedId);
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
      dispatch(
        action.AddAssetRequest({
          data: addData,
        })
      );
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
    dispatch(action.AssetRequest({ company_id, assetPageNumber }));
  }, [company_id, assetPageNumber, Message]);

  return (
    <div className="mt-8 ">
      <div className="max-w-2xl mx-auto">
        <FilterOption />
      </div>
      <section className="mt-8 mb-4 flex flex-col  w-95.5 mx-auto">
        <div className="flex justify-between items-center w-full ">
          <h4 className="text-orange-cus-1 tracking-wide  text-6xl">Assets</h4>
          <div className="flex flex-col items-start justify-end">
            <button
              onClick={handleClickOpen}
              className={`bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm`}
            >
              add asset
            </button>
          </div>
        </div>
        <div
          className={`mt-4 min-w-[400px] flex-col justify-between items-center w-full ${
            !isLoading && "border - 2"
          }  h-3/5 `}
        >
          {/* <div className="w-full flex items-center text-gray-500 border-b-2 pl-8 pr-2 hover:bg-slate-100 ">
            <div className="w-[72%] sm:w-[76%] md:[79%] lg:w-[85%] flex justify-between py-4">
              <h4>Asset Name</h4>
              <h4>Status</h4>
            </div>
          </div> */}
          {isLoading ? (
            <Loader />
          ) : (
            Asset?.assetData &&
            Asset?.assetData?.map((item) => {
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
                        disabled={updateLoading}
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
                      openDeleteModal={openDeleteModal}
                    />
                  </div>
                </div>
              );
            })
          )}
          {Asset?.totalPage > 1 && (
            <div className="mt-4">
              <Stack spacing={2}>
                <Pagination
                  count={Asset?.totalPage}
                  variant="outlined"
                  onChange={handleAssetPageNumber}
                  color="primary"
                  page={assetPageNumber}
                />
              </Stack>
            </div>
          )}
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
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleDelete={handleDelete}
        closeDeleteModal={closeDeleteModal}
      />
    </div>
  );
};

export default AssetsIndex;
