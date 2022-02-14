import * as React from "react";
// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import pdfImage from "../../constantData/images/pdf_image.png";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CloseIcon from "@mui/icons-material/Close";
export default function FormDialog({
  isFileModalOpen,
  closeFileModal,
  fileForm,
  handleChange,
  handleFile,
  file,
  fileDrop,
  cancelFile,
  handleSubmit,
}) {
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const { fileName, description } = fileForm;
  return (
    <div>
      <Dialog open={isFileModalOpen} maxWidth={"lg"}>
        <form
          className="flex flex-col  px-5 pt-6  pb-10 md:px-16"
          onSubmit={handleSubmit}
        >
          <button
            type="button"
            onClick={closeFileModal}
            className="absolute top-4 right-4"
          >
            <CloseIcon />
          </button>
          <h2 className="my-4 text-center text-lg font-bold text-gray-700 ">
            Files
          </h2>
          <TextField
            id="file_Name"
            label="Name"
            value={fileName}
            onChange={handleChange}
            name="fileName"
            sx={{ mb: 3 }}
            fullWidth
            required
          />
          <TextField
            id="description"
            label="Description"
            name="description"
            value={description}
            multiline
            rows={3}
            onChange={handleChange}
            sx={{ mb: 3 }}
            fullWidth
            required
          />
          <input
            id="contained-button-file"
            // multiple
            type="file"
            name="file"
            className="hidden"
            onChange={handleFile}
          />

          <div className="mt-3">
            <div
              className="m-0 flex h-[150px] w-[400px] flex-col items-center justify-center border-2 border-dashed border-gray-500 "
              onDragOver={dragOver}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              onDrop={fileDrop}
            >
              <label htmlFor="file" className="hover:cursor-pointer ">
                <UploadFileIcon sx={{ fontSize: "4rem", color: "#606060" }} />
              </label>

              <input
                type="file"
                id="file"
                className="hidden"
                onChange={handleFile}
              />

              <p>Drag & Drop files here or click to upload</p>
            </div>
            <div>
              {file &&
                file.map((item, i) => {
                  return (
                    <div key={i} className="my-3 flex justify-between">
                      <div>
                        {item[0].type === "application/pdf" ? (
                          <iframe
                            src={URL.createObjectURL(item[0])}
                            // alt="pdf image"
                            className="h-6 w-14"
                          />
                        ) : (
                          <img
                            src={URL.createObjectURL(item[0])}
                            alt="pdf image"
                            className="h-5 w-5"
                          />
                        )}
                      </div>
                      <div className="flex">
                        <p className="mr-3">{item[0].name}</p>
                        <button
                          onClick={() => cancelFile(i)}
                          className="text-red-400"
                        >
                          x
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <button
              type="submit"
              className="rounded-md bg-[#606060] px-5 py-2 text-white"
            >
              Submit
            </button>
            <button
              type="button"
              className="rounded-md bg-[#606060] px-5 py-2 text-white"
              onClick={closeFileModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}

// {
/* <div>
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span">
                Upload File
              </Button>
            </label>

            {file && (
              <div
                className={`mt-5 flex flex-col justify-center items-center  border-2 border-gray-300 border-dotted px-2 py-2 relative  `}
              >
                <div className="flex pb-4">
                  {/* <button onClick={cancelFile}>x</button> */
// }
//         <div className="w-16 h-16 mb-3  mr-2 ">
//           {file.type === "application/pdf" ? (
//             <img src={pdfImage} className="w-full object-cover" />
//           ) : (
//             <img
//               src={URL.createObjectURL(file)}
//               className="w-full object-cover"
//             />
//           )}
//         </div>
//         <div>
//           <h2 className="mb-3 text-sm font-bold ">file Name:</h2>
//           <p className="w-full  flex justify-self-end">{file.name}</p>
//         </div>
//       </div>
//     </div>
//   )}
// </div> */}
