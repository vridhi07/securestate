import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ModalForm from "../../../../Component/Asset/SBOMModalForm";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import Loader from "../../../../Component/Common/PentestLoader";
import DeleteModal from "../../../../Component/Common/DeleteModal";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import * as action from "../../../../Redux/action/index";
import { IoTrashOutline } from "react-icons/io5";
import * as roles from "../../../../constantData/Roles";
import EditIcon from "@mui/icons-material/Edit";
export default function SBOMTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [componentForm, setComponentForm] = useState({
    supplier: "",
    cve: "",
    security_score: "",
    path: "",
    version: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [SboMPageNumber, setSboMPageNumber] = useState(1);

  //   {
  //     "supplier": "supplier",
  //     "cve": "cve",
  //     "security_score":"req.body.security_score",
  //     "path":"req.body.path",
  //     "version":"req.body.version"
  // }
  // * router location
  const location = useLocation();
  const assetId = location.state.id;

  // form destructure
  const { supplier, cve, security_score, path, version } = componentForm;

  // * Redux states
  const dispatch = useDispatch();

  const { isLoading, sbomDetails, addLoading, addMessage } = useSelector(
    (state) => state?.sbom
  );
  const userRole = useSelector((state) => state?.user?.userRole);
  // * FUNCTIONS
  const handleComponentForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setComponentForm({ ...componentForm, [name]: value });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedId(null);
    if (isEdit) {
      setIsEdit(false);
    }
  };
  const handleSboMPageNumber = (e, i) => {
    setSboMPageNumber(i);
  };

  const handleEdit = (id) => {
    console.log(id);
    const SingleData = sbomDetails.data.find((item) => item._id === id);
    setComponentForm({
      ...componentForm,
      supplier: SingleData.supplier,
      cve: SingleData.cve,
      security_score: SingleData.security_score,
      path: SingleData.path,
      version: SingleData.version,
    });
    setSelectedId(id);
    setIsEdit(true);
    openModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEdit) {
      const data = {
        supplier,
        cve,
        security_score,
        path,
        version,
      };
      // console.log(assetId);
      dispatch(action.addSbomRequest({ assetId, data }));
    }
    if (isEdit) {
      console.log(componentForm);
      const data = {
        ...componentForm,
        sbomId: selectedId,
      };
      dispatch(action.updateSBOMRequest({ assetId, data, SboMPageNumber }));
    }
    closeModal();
    setComponentForm({
      ...componentForm,
      supplier: "",
      cve: "",
      security_score: "",
      path: "",
      version: "",
    });
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedId(null);
  };
  const OpenDeleteSbomModal = (id) => {
    console.log(id);
    openDeleteModal();
    setSelectedId(id);
  };

  const handleDelete = () => {
    dispatch(action.deleteSbomRequest({ assetId, fileId: selectedId }));
    if (sbomDetails?.data.length === 1) {
      setSboMPageNumber((current) => {
        let newNumber;
        if (current === 1) {
          newNumber = 1;
        }
        if (current > 1) {
          newNumber = current - 1;
        }
        return newNumber;
      });
    }

    closeDeleteModal();
  };
  // console.log(sbomDetails?.data.length);
  //* SBOM DATA CALLED

  useEffect(() => {
    dispatch(action.GetSBOMRequest({ assetId, SboMPageNumber }));
  }, [SboMPageNumber, addMessage]);
  let assetAccess;
  if (userRole) {
    assetAccess = roles.AssetAccess(userRole);
  }
  return (
    <div className="mx-auto flex w-full flex-col">
      {assetAccess && (
        <section className="mb-3 flex items-center justify-end md:absolute md:top-4 md:right-0">
          <button
            className=" hover rounded-md bg-gray-cus  py-2 px-5 capitalize tracking-wide text-white
         "
            onClick={openModal}
            disabled={addLoading}
          >
            <AddIcon />
            <span> add component</span>
          </button>
        </section>
      )}

      <div className="md:absolute md:top-4 md:left-0">
        <h4 className="text-4xl tracking-wide  text-orange-cus-1">Asset</h4>
      </div>
      <div className="mb-10">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <TableContainer component={Paper} elevation={0}>
              <Table
                sx={{ minWidth: 650 }}
                size="medium"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={2}>SUPPLER</TableCell>
                    <TableCell>VERSION</TableCell>
                    <TableCell colSpan={3}>SECURITY SCORE</TableCell>
                    <TableCell colSpan={2}>PATH</TableCell>
                    <TableCell
                    //  align="right"
                    >
                      SBOM AUTHOR
                    </TableCell>
                    <TableCell># OF CVES</TableCell>
                    {/* <TableCell>UNIQUE IDENTIFIER</TableCell> */}
                    {assetAccess && <TableCell align="right"></TableCell>}
                    {assetAccess && <TableCell align="right"></TableCell>}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {sbomDetails?.data &&
                    sbomDetails?.data.map((item, index) => (
                      <TableRow
                        key={item._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell
                          colSpan={2}
                          style={{
                            maxWidth: "200px",
                            // border: "2px solid red",
                            overflow: "hidden",
                          }}
                        >
                          {item?.supplier}
                        </TableCell>
                        <TableCell
                          style={{
                            maxWidth: "100px",
                            // border: "2px solid red",
                            overflow: "hidden",
                          }}
                        >
                          {item.version}
                        </TableCell>
                        <TableCell
                          colSpan={3}
                          style={{
                            maxWidth: "200px",
                            // border: "2px solid red",
                            overflow: "hidden",
                          }}
                        >
                          {item?.security_score}
                        </TableCell>
                        <TableCell
                          align="left"
                          colSpan={2}
                          style={{
                            maxWidth: "150px",
                            // border: "2px solid red",
                            overflow: "hidden",
                          }}
                        >
                          {item?.path}
                        </TableCell>
                        <TableCell
                          // align="right"
                          style={{
                            maxWidth: "150px",
                            // border: "2px solid red",
                            overflow: "hidden",
                          }}
                        >
                          {item?.sbom_author?.user_name}
                        </TableCell>
                        <TableCell
                          style={{
                            maxWidth: "150px",
                            // border: "2px solid red",
                            overflow: "hidden",
                          }}
                        >
                          {item.cve}
                        </TableCell>
                        {/* <TableCell
                          // align="center"
                          style={{
                            maxWidth: "200px",
                            // border: "2px solid red",
                            overflow: "hidden",
                          }}
                        >
                          {item.uniqueIdentifier}
                        </TableCell> */}

                        {assetAccess && (
                          <TableCell align="right">
                            <IconButton onClick={() => handleEdit(item._id)}>
                              <EditIcon />
                            </IconButton>
                          </TableCell>
                        )}

                        {assetAccess && (
                          <TableCell align="right">
                            <IconButton
                              color="error"
                              onClick={() => OpenDeleteSbomModal(item._id)}
                            >
                              <IoTrashOutline />
                            </IconButton>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            {sbomDetails?.totalPage !== null && (
              <div className="mt-4 pb-5">
                <Stack spacing={2}>
                  <Pagination
                    count={sbomDetails?.totalPage}
                    // variant="outlined"
                    onChange={handleSboMPageNumber}
                    // color="primary"
                    page={SboMPageNumber}
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
                      "& .MuiPaginationItem-root": {
                        "&:hover": {
                          backgroundColor: "#B4AFAF !important",
                        },
                      },
                    }}
                  />
                </Stack>
              </div>
            )}
          </>
        )}
      </div>
      <ModalForm
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        componentForm={componentForm}
        handleComponentForm={handleComponentForm}
        handleSubmit={handleSubmit}
        isEdit={isEdit}
      />
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        handleDelete={handleDelete}
      />
    </div>
  );
}
