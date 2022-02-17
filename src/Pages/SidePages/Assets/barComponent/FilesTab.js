import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as action from "../../../../Redux/action/index";
import AssetFileModal from "../../../../Component/Asset/AssetFileModal";
import Loader from "../../../../Component/Common/PentestLoader";
import { useSelector, useDispatch } from "react-redux";
// import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import DeleteModal from "../../../../Component/Common/DeleteModal";
import moment from "moment";
import AddIcon from "@mui/icons-material/Add";
import { IoTrashOutline } from "react-icons/io5";
import * as roles from "../../../../constantData/Roles";
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
  const userRole = useSelector((state) => state?.user?.userRole);
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
  let assetAccess;
  if (userRole) {
    assetAccess = roles.AssetAccess(userRole);
  }
  return (
    <div className="mx-auto flex w-full flex-col">
      {assetAccess && (
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
      )}

      <div className=" md:absolute md:top-4 md:left-0">
        <h4 className="text-4xl tracking-wide  text-orange-cus-1">Asset</h4>
      </div>

      <section className=" grid grid-cols-9 items-center justify-center border-b-2 border-b-orange-cus-1 py-2 text-center  font-bold uppercase text-gray-text-3  md:mx-16">
        <div className="col-span-2 ">
          <h4>File</h4>
        </div>
        <div className="col-span-2 ">
          <h4>date uploaded</h4>
        </div>
        <div className="col-span-4 ">
          <h4>document description</h4>
        </div>
        {assetAccess ? (
          <div className="col-span-1 ">Remove</div>
        ) : (
          <div className="col-span-1 "></div>
        )}
      </section>
      <div className="min-w-[400px]">
        {isLoading ? (
          <Loader />
        ) : (
          assetFiles?.data &&
          assetFiles?.data?.map((item, index) => {
            return (
              <article
                key={item._id}
                className={`grid grid-cols-9 items-center justify-center rounded-sm  py-2  text-center md:mx-16 ${
                  index % 2 === 0 && "bg-white"
                } `}
              >
                <div className="col-span-2 ml-7 max-w-[190px]  overflow-hidden ">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-center  md:mr-10"
                    // download
                  >
                    {item.file_name}
                  </a>
                </div>
                <div className="col-span-2">
                  <p> {moment(item.createdAt).format("l")}</p>
                </div>
                <div className=" col-span-4 max-w-[392px] overflow-hidden text-center">
                  <p>{item.description}</p>
                </div>
                <div className="col-span-1">
                  {assetAccess && (
                    <IconButton
                      color="error"
                      onClick={() => openDeleteModal(item._id)}
                    >
                      <IoTrashOutline />
                    </IconButton>
                  )}
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
