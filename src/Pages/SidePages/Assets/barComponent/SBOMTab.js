import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import ModalForm from "../../../../Component/Asset/SBOMModalForm";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import Loader from "../../../../Component/Common/PentestLoader";
import DeleteModal from "../../../../Component/Common/DeleteModal";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../../../Redux/action/index";
export default function SBOMTab() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [componentForm, setComponentForm] = useState({
    supplier: "",
    component: "",
    license: "",
    cve: "",
    uniqueIdentifier: "",
    version: "",
    sbom_author: "",
  });
  const [SboMPageNumber, setSboMPageNumber] = useState(1);
  // console.log(SboMPageNumber);
  // const [selectedId, setSelectedId] = useState(null);

  // * router location
  const location = useLocation();
  const assetId = location.state.id;

  // form destructure
  const {
    supplier,
    component,
    license,
    cve,
    uniqueIdentifier,
    version,
    sbom_author,
  } = componentForm;

  // * Redux states
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { isLoading, sbomDetails, addLoading, addMessage } = state?.sbom;

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
  };
  const handleSboMPageNumber = (e, i) => {
    setSboMPageNumber(i);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      supplier,
      component,
      license,
      cve,
      uniqueIdentifier,
      version,
      sbom_author,
    };
    console.log(assetId);
    dispatch(action.addSbomRequest({ assetId, data }));
    closeModal();
    setComponentForm({
      ...componentForm,
      supplier: "",
      component: "",
      license: "",
      cve: "",
      uniqueIdentifier: "",
      version: "",
      sbom_author: "",
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
        let newNumber = current - 1;
        if (current === 1) {
          newNumber = 1;
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

  return (
    <div className="w-full flex flex-col mx-auto">
      <section className="flex mb-3 items-center justify-end">
        <button
          className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm
         "
          onClick={openModal}
          disabled={addLoading}
        >
          add component
        </button>
      </section>
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
                    <TableCell colSpan={3}>COMPONENT</TableCell>
                    <TableCell colSpan={2}>LICENSE</TableCell>
                    <TableCell align="right">CVE</TableCell>
                    <TableCell align="right">UNIQUE IDENTIFIER</TableCell>
                    <TableCell align="right">VERSION</TableCell>
                    <TableCell align="right">SBOM AUTHOR</TableCell>
                    <TableCell align="right">Remove</TableCell>
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
                        <TableCell colSpan={2}>{item.supplier}</TableCell>
                        <TableCell colSpan={3}>{item.component}</TableCell>
                        <TableCell align="left" colSpan={2}>
                          {item.license}
                        </TableCell>
                        <TableCell align="right">{item.cve}</TableCell>
                        <TableCell align="center">
                          {item.uniqueIdentifier}
                        </TableCell>
                        <TableCell align="right">{item.version}</TableCell>
                        <TableCell align="right">{item.sbom_author}</TableCell>
                        <TableCell align="right">
                          <IconButton
                            color="error"
                            onClick={() => OpenDeleteSbomModal(item._id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            {sbomDetails?.totalPage > 1 && (
              <div className="pb-5 mt-4">
                <Stack spacing={2}>
                  <Pagination
                    count={sbomDetails?.totalPage}
                    variant="outlined"
                    onChange={handleSboMPageNumber}
                    color="primary"
                    page={SboMPageNumber}
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
      />
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        handleDelete={handleDelete}
      />
    </div>
  );
}
