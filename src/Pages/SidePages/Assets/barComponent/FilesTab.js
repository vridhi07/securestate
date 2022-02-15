import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as action from "../../../../Redux/action/index";
import AssetFileModal from "../../../../Component/Asset/AssetFileModal";
import Loader from "../../../../Component/Common/PentestLoader";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import DeleteModal from "../../../../Component/Common/DeleteModal";
import moment from "moment";
import AddIcon from "@mui/icons-material/Add";
const FilesTab = () => {
  //* React States
  const dispatch = useDispatch();

  const [fileForm, setFileForm] = useState({
    fileName: "",
    description: "",
  });
  const [file, setFile] = useState([]);
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const [filesPageNumber, setFilesPageNumber] = useState(1);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  // console.log(file && file[0][0]);
  const location = useLocation();
  const assetId = location?.state.id;

  //! REDUX STATES

  const { assetFiles, isLoading, addLoading, AddMessage } = useSelector(
    (state) => state?.assetFiles
  );

  //* Functions
  const handleFilesPageNumber = (e, i) => {
    setFilesPageNumber(i);
  };
  const openFileModal = () => {
    setIsFileModalOpen(true);
  };

  const closeFileModal = () => {
    setIsFileModalOpen(false);

    setFileForm({
      fileName: "",
      description: "",
    });
    setFile("");
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFileForm({ ...fileForm, [name]: value });
  };

  const handleFile = (e) => {
    const files = e.target.files;
    setFile([...file, files]);
  };
  const fileDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    setFile([...file, files]);
  };
  const cancelFile = (index) => {
    let newArray = file.splice(0, index);
    setFile(newArray);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();

    formdata.append("file", file[0][0], `${file[0][0].name}`);
    formdata.append("name", `${fileForm.fileName}`);
    formdata.append("description", `${fileForm.description}`);
    console.log(formdata);
    dispatch(action.addFilesRequest({ assetId, formdata }));
    closeFileModal();
    setFileForm({
      fileName: "",
      description: "",
    });
    setFile("");
  };

  const openDeleteModal = (id) => {
    setDeleteModalOpen(true);
    setSelectedId(id);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
    setSelectedId(null);
  };

  const handleDelete = () => {
    dispatch(action.deleteFilesRequest({ assetId, fileId: selectedId }));

    // console.log("deleted");
    if (assetFiles?.data?.length === 1) {
      setFilesPageNumber((current) => {
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

  useEffect(() => {
    dispatch(action.getAssetFilesRequest({ assetId, filesPageNumber }));
  }, [filesPageNumber, AddMessage]);

  return (
    <div className="mx-auto flex w-full flex-col">
      <section className="mb-3 flex items-center justify-end md:absolute md:top-4 md:right-0">
        <button
          className="flex items-center gap-1 rounded-md  bg-gray-cus py-2 px-5 capitalize tracking-wide text-gray-300 
         "
          onClick={openFileModal}
        >
          <AddIcon />
          <span>Upload Files</span>
        </button>
      </section>
      <div className=" md:absolute md:top-4 md:left-0">
        <h4 className="text-4xl tracking-wide  text-orange-cus-1">Asset</h4>
      </div>

      <section className="grid grid-cols-10 items-center  justify-center border-solid border-orange-600 text-center  font-bold uppercase  text-gray-text-3">
        <div className="col-span-2 ">
          <h4>File</h4>
        </div>
        <div className="col-span-2 ">
          <h4>date uploaded</h4>
        </div>
        <div className="col-span-3 ">
          <h4>document description</h4>
        </div>
        <div className="col-span-2 ">Remove</div>
      </section>
      <div
        className={`mt-3 w-full ${
          !isLoading && "border"
        }border border-t-0 border-gray-400 text-gray-text-4`}
      >
        {isLoading ? (
          <Loader />
        ) : (
          assetFiles?.data &&
          assetFiles?.data?.map((item) => {
            return (
              <article
                key={item._id}
                className={`grid w-full grid-cols-10 items-center justify-center border py-2 px-3 text-center `}
              >
                <div className="col-span-2 ml-7">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-center md:mr-10"
                    // download
                  >
                    {item.file_name}
                  </a>
                </div>
                <div className="col-span-2">
                  <p> {moment(item.createdAt).format("l")}</p>
                </div>
                <div className="col-span-3">
                  <p>{item.description}</p>
                </div>
                <div className="col-span-2">
                  <IconButton
                    color="error"
                    onClick={() => openDeleteModal(item._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </article>
            );
          })
        )}
      </div>

      <section>
        <AssetFileModal
          isFileModalOpen={isFileModalOpen}
          closeFileModal={closeFileModal}
          handleChange={handleChange}
          fileForm={fileForm}
          handleFile={handleFile}
          file={file}
          cancelFile={cancelFile}
          fileDrop={fileDrop}
          handleSubmit={handleSubmit}
        />
      </section>
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default FilesTab;
