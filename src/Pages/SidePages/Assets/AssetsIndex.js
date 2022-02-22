// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import IconButton from "@mui/material/IconButton";
// import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loader from "../../../Component/Common/PentestLoader";
import FilterOption from "../../../Component/Common/FilterOption";
import AssetModal from "../../../Component/Asset/AssestModalForm";
// import AssetMenuButton from "../../../Component/Asset/AssetMenuButton";
import DeleteModal from "../../../Component/Common/DeleteModal";
import * as action from "../../../Redux/action/index";
import { useDispatch, useSelector } from "react-redux";
import AssetList from "../../../Component/Asset/AssetList";
import * as roles from "../../../constantData/Roles";
const AssetsIndex = () => {
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
  // const [anchorEl, setAnchorEl] = useState(null);
  const [assetPageNumber, setAssetPageNumber] = useState(1);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  // const [assetsList, setAssetsList] = useState([]);
  // const [check, setChecked] = useState(false);
  // * Redux data
  const { Asset, isLoading, updateLoading } = useSelector(
    (state) => state.Assets
  );
  const { selectedCompany } = useSelector((state) => state?.company);
  const { userDetails, userRole } = useSelector((state) => state?.user);

  // const inputTag = useRef();

  // useEffect(() => {
  //   if (Asset?.assetData?.length > 0) {
  //     setAssetsList([...Asset.assetData]);
  //   }
  // }, [Asset.assetData]);

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
    setSelectedId(null);
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
  // const handleMenuOpen = (e, id) => {
  //   setAnchorEl(e.currentTarget);
  //   setSelectedId(id);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };
  const handleAssetPageNumber = (e, i) => {
    setAssetPageNumber(i);
  };
  const openDeleteModal = (id) => {
    setSelectedId(id);
    setDeleteModalOpen(true);
    // handleMenuClose();
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedId(null);
  };

  const handleDelete = () => {
    dispatch(
      action.DeleteAssetRequest({
        assetId: selectedId,
        company_id,
        assetPageNumber,
      })
    );
    closeDeleteModal();
  };

  //* Handle Status
  const handleStatus = (status, id) => {
    let newStatus = status === "inactive" ? "active" : "inactive";
    const newData = {
      id,
      status: newStatus,
    };
    // console.log(status);
    // console.log(newData);
    dispatch(
      action.UpdateAssetRequest({
        editData: newData,
        company_id,
        assetPageNumber,
      })
    );
  };

  //* switch on edit
  const handleEdit = (id) => {
    let singleData = Asset?.assetData.find((item) => item._id === id);
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
    setSelectedId(id);
    handleClickOpen();

    // handleMenuClose();
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
      // console.log(addData);
      dispatch(
        action.AddAssetRequest({
          data: addData,
          company_id,
          assetPageNumber,
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
      dispatch(
        action.UpdateAssetRequest({ editData, company_id, assetPageNumber })
      );
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
  }, [company_id, assetPageNumber]);

  // const Status = (i) => {
  //   let newStatus = i === "INACTIVE" ? false : true;
  //   return newStatus;
  // };
  // const handleSwitch = () => {
  //   inputTag.current.checked;
  // };
  // !we may need laater
  // const handleSwitchAssets = (assetId, assetStatus) => {
  //   // console.log(assetId, assetStatus, "==1q222323");
  //   const editData = {
  //     id: assetId,
  //     status: assetStatus === true ? "INACTIVE" : "ACTIVE",
  //   };
  //   console.log(editData);
  //   dispatch(
  //     action.UpdateAssetRequest({ editData, company_id, assetPageNumber })
  //   );
  // };
  // console.log(assetsList, "===8888");
  let assetAccess;
  if (userRole) {
    assetAccess = roles.AssetAccess(userRole);
  }
  // console.log(assetAccess);
  // console.log(assetsList);
  return (
    <div className="mt-8 ">
      <div className="w-full rounded-lg bg-white py-10 pl-7 shadow-sm ">
        <div className="max-w-lg">
          <FilterOption />
        </div>
      </div>
      <section className="  mt-8 mb-4  w-full ">
        <div className="flex w-full items-center justify-between ">
          <h4 className="text-4xl tracking-wide  text-orange-cus-1">Assets</h4>
          <div className="flex flex-col items-start justify-end">
            {assetAccess && (
              <button
                onClick={handleClickOpen}
                className={`hover rounded-md  bg-gray-cus py-2 px-6 capitalize tracking-wide text-white`}
                disabled={isLoading}
              >
                <span>
                  <AddIcon />
                </span>
                <span> add asset</span>
              </button>
            )}
          </div>
        </div>
        <div
          className={`mt-4 h-3/5 w-full min-w-[400px] flex-col items-center   justify-between `}
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
            Asset?.assetData.map((item) => {
              return (
                <AssetList
                  key={item._id}
                  item={item}
                  // handleMenuOpen={handleMenuOpen}
                  // handleMenuClose={handleMenuClose}
                  handleStatus={handleStatus}
                  openDeleteModal={openDeleteModal}
                  handleEdit={handleEdit}
                  // anchorEl={anchorEl}
                  updateLoading={updateLoading}
                  // handleSwitchAssets={handleSwitchAssets}
                  assetAccess={assetAccess}
                />
              );
            })
          )}
          {Asset?.totalPage > 1 && (
            <div className="mt-4">
              <Stack spacing={2}>
                <Pagination
                  count={Asset?.totalPage}
                  // variant="outlined"
                  onChange={handleAssetPageNumber}
                  sx={{
                    "& .Mui-selected": {
                      backgroundColor: "#F27931 !important",
                      color: "white",
                      border: "none",
                    },
                    "& .MuiPaginationItem-page ": {
                      bgcolor: "#B4AFAF",
                      color: "white",
                      border: "none",
                    },
                    "& .MuiPaginationItem-previousNext": {
                      border: "none",
                    },
                  }}
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
