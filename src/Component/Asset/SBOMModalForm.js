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
}) {
  const {
    supplier,
    component,
    license,
    cve,
    uniqueIdentifier,
    version,
    sbom_author,
  } = componentForm;

  return (
    <div>
      <Dialog open={isModalOpen} onClose={closeModal}>
        <form
          className="px-5 md:px-20 py-5 relative"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <button
            type="button"
            className="absolute top3 right-3"
            onClick={closeModal}
          >
            <CloseIcon />
          </button>
          <h2 className="text-center py-5 font-bold text-lg text-[#606060] mb-4">
            Add Component
          </h2>
          <div className="w-full mb-4">
            <TextField
              id="supplier"
              label="Supplier"
              variant="outlined"
              value={supplier}
              name="supplier"
              onChange={handleComponentForm}
              fullWidth
              required
            />
          </div>
          <div className="w-full mb-4">
            <TextField
              id="component"
              label="Component"
              variant="outlined"
              value={component}
              name="component"
              onChange={handleComponentForm}
              fullWidth
              required
            />
          </div>
          <div className="w-full mb-4">
            <TextField
              id="license"
              label="License"
              variant="outlined"
              value={license}
              name="license"
              onChange={handleComponentForm}
              fullWidth
              required
            />
          </div>
          <div className="w-full mb-4">
            <TextField
              id="cve"
              label="CVE"
              variant="outlined"
              value={cve}
              name="cve"
              onChange={handleComponentForm}
              fullWidth
              required
            />
          </div>
          <div className="w-full mb-4">
            <TextField
              id="uniqueIdentifier"
              label="Unique Identifier"
              variant="outlined"
              value={uniqueIdentifier}
              name="uniqueIdentifier"
              onChange={handleComponentForm}
              fullWidth
              required
            />
          </div>
          <div className="w-full mb-4">
            <TextField
              id="version"
              label="Version"
              variant="outlined"
              value={version}
              name="version"
              onChange={handleComponentForm}
              fullWidth
              required
            />
          </div>
          <div className="w-full mb-4">
            <TextField
              id="sbom_author"
              label="SBOM Author"
              variant="outlined"
              value={sbom_author}
              name="sbom_author"
              onChange={handleComponentForm}
              fullWidth
              required
            />
          </div>
          <div className="flex items-center justify-between pb-4 mt-5">
            <button
              type="submit"
              className="px-6 py-2 rounded-md tracking-wider text-white bg-[#606060]"
            >
              Add
            </button>
            <button
              type="button"
              className="px-6 py-2 rounded-md tracking-wider text-white bg-[#606060]"
              onClick={closeModal}
            >
              cancel
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
