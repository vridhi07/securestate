import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import pdfImage from "../../constantData/images/pdf_image.png";
import UploadFileIcon from "@mui/icons-material/UploadFile";
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
          className="px-5 md:px-16  pt-6 pb-10  flex flex-col"
          onSubmit={handleSubmit}
        >
          <h2 className="text-center my-4 text-lg text-gray-700 font-bold ">
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
              className="flex flex-col justify-center items-center m-0 w-[400px] h-[150px] border-2 border-dashed border-gray-500 "
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
                  // console.log(item);
                  return (
                    <div key={i} className="flex justify-between my-3">
                      <div>
                        {item[0].type === "application/pdf" ? (
                          <img
                            src={pdfImage}
                            alt="pdf image"
                            className="w-5 h-5"
                          />
                        ) : (
                          <img
                            src={URL.createObjectURL(item[0])}
                            alt="pdf image"
                            className="w-5 h-5"
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
          <div className="flex justify-between items-center mt-5">
            <button
              type="submit"
              className="px-5 py-2 bg-[#606060] text-white rounded-md"
            >
              Submit
            </button>
            <button
              type="button"
              className="px-5 py-2 bg-[#606060] text-white rounded-md"
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
