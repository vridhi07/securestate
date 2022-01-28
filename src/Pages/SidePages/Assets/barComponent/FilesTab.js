import { Pagination, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as action from "../../../../Redux/action/index";
import AssetFileModal from "../../../../Component/Asset/AssetFileModal";
import Loader from "../../../../Component/Common/PentestLoader";
import { useSelector, useDispatch } from "react-redux";

import moment from "moment";
const FilesTab = () => {
  //* React States
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [fileForm, setFileForm] = useState({
    fileName: "",
    description: "",
  });
  const [file, setFile] = useState([]);
  const [isFileModalOpen, setIsFileModalOpen] = useState(false);
  const [filesPageNumber, setFilesPageNumber] = useState(1);
  // console.log(file && file[0][0]);
  const location = useLocation();
  const assetId = location?.state.id;
  console.log(assetId);

  //! REDUX STATES

  const { assetFiles, isLoading, addLoading, AddMessage } = state?.assetFiles;

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
  useEffect(() => {
    dispatch(action.getAssetFilesRequest({ assetId, filesPageNumber }));
  }, [filesPageNumber, AddMessage]);

  return (
    <div className="w-full flex flex-col mx-auto">
      <section className="flex mb-3 items-center justify-end">
        <button
          className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm
         "
          onClick={openFileModal}
        >
          Upload Files
        </button>
      </section>
      <form className="flex items-center justify-end"></form>
      <section className="grid grid-cols-12 justify-center items-center text-center font-bold text-gray-text-3  uppercase">
        <div className="col-span-3 ">
          <h4>File</h4>
        </div>
        <div className="col-span-3 ">
          <h4>date uploaded</h4>
        </div>
        <div className="col-span-4 ">
          <h4>document description</h4>
        </div>
        <div className="col-span-2 ">delete</div>
      </section>
      <div
        className={`w-full mt-3 ${
          !isLoading && "border"
        }border border-gray-400 text-gray-text-4 border-t-0`}
      >
        {isLoading ? (
          <Loader />
        ) : (
          assetFiles?.data &&
          assetFiles?.data?.map((item) => {
            return (
              <article
                key={item._id}
                className={`py-5 grid grid-cols-12 items-center justify-center w-full border text-center px-3 `}
              >
                <div className="col-span-3 ml-7">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    <img src={item.file} alt="file" className="h-10 w-10" />
                  </a>
                </div>
                <div className="col-span-3">
                  <p> {moment(item.createdAt).format("l")}</p>
                </div>
                <div className="col-span-4">
                  <p>{item.description}</p>
                </div>
                <div className="col-span-2">
                  <button>X</button>
                </div>
              </article>
            );
          })
        )}
      </div>

      {assetFiles?.total > 1 && (
        <div className="pb-5 mt-4">
          <Stack spacing={2}>
            <Pagination
              count={assetFiles?.total}
              variant="outlined"
              onChange={handleFilesPageNumber}
              color="primary"
              page={filesPageNumber}
            />
          </Stack>
        </div>
      )}

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
    </div>
  );
};

export default FilesTab;
