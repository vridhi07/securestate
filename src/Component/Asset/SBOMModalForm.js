import * as React from "react";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
export default function SBOMModalForm({
  isModalOpen,
  closeModal,
  componentForm,
  handleComponentForm,
  handleSubmit,
  isEdit,
}) {
  const { supplier, cve, security_score, path, version } = componentForm;

  return (
    <div>
      <Dialog open={isModalOpen} onClose={closeModal}>
        <form
          autoComplete="off"
          className="bg-primary-clr"
          onSubmit={handleSubmit}
        >
          <header className="flex justify-between bg-orange-cus-1 py-3  px-4 text-white">
            <h2 className="text-center text-lg font-bold ">
              {isEdit ? "Edit Component" : "Add Component"}
            </h2>
            <button
              type="button"
              // className="top3 absolute right-3"
              onClick={closeModal}
            >
              <CloseIcon />
            </button>
          </header>
          <div className="px-8 py-4">
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="supplier"
                    label="Supplier"
                    variant="outlined"
                    value={supplier}
                    name="supplier"
                    onChange={handleComponentForm}
                    fullWidth
                    required
                    // sx={{ bgcolor: "white" }}
                  />
                </div>
              </div>
              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="security_score"
                    label="Security Score"
                    variant="outlined"
                    value={security_score}
                    name="security_score"
                    onChange={handleComponentForm}
                    fullWidth
                    required
                    // sx={{ bgcolor: "white" }}
                  />
                </div>
              </div>
            </section>
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="path"
                    label="Path"
                    variant="outlined"
                    value={path}
                    name="path"
                    onChange={handleComponentForm}
                    fullWidth
                    required
                    // sx={{ bgcolor: "white" }}
                  />
                </div>
              </div>
              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="cve"
                    label="# OF CVE"
                    variant="outlined"
                    value={cve}
                    name="cve"
                    onChange={handleComponentForm}
                    fullWidth
                    required
                    sx={{ bgcolor: "white" }}
                  />
                </div>
              </div>
            </section>
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="version"
                    label="Version"
                    variant="outlined"
                    value={version}
                    name="version"
                    onChange={handleComponentForm}
                    fullWidth
                    required
                    sx={{ bgcolor: "white" }}
                  />
                </div>
              </div>
              <div className="col-span-4 md:col-span-2"></div>
            </section>
            {/* <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <div className="mb-4 w-full">
                  <TextField
                    id="sbom_author"
                    label="SBOM Author"
                    variant="outlined"
                    value={sbom_author}
                    name="sbom_author"
                    onChange={handleComponentForm}
                    fullWidth
                    required
                    sx={{ bgcolor: "white" }}
                  />
                </div>
              </div>
              <div className="col-span-4 md:col-span-2"></div>
            </section> */}

            <div className="mt-5 flex items-center justify-start gap-4 pb-4">
              <button
                type="submit"
                className="hover rounded-md bg-primary-btn px-8 py-2 tracking-wider text-white"
              >
                {isEdit ? "Save" : "  Add"}
              </button>
              <button
                type="button"
                className="rounded-md border border-primary-btn bg-white   px-6 py-2 text-primary-btn"
                onClick={closeModal}
              >
                cancel
              </button>
            </div>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
