import { AssetType } from "../../constantData/addAssetInfo";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
export default function AssetModal({
  handleClose,
  assetForm,
  handleAssetForm,
  handleSubmitAsset,
  isEdit,
}) {
  const {
    asset_name,
    asset_type,
    status,
    tech_stack,
    third_party_components,
    internal_external,
    additional_details,
  } = assetForm;

  return (
    <form onSubmit={handleSubmitAsset} className="bg-primary-clr">
      <header className="flex justify-between bg-orange-cus-1 py-3  px-4 text-white">
        <h2 className="text-center text-2xl font-bold tracking-wider">
          {isEdit ? "Edit Asset" : "New Asset"}
        </h2>
        <button type="button" onClick={handleClose}>
          <CloseIcon />
        </button>
      </header>
      <div className="px-8 py-4">
        <section className="my-2 grid grid-cols-4 gap-8">
          <div className="col-span-4 md:col-span-2">
            <TextField
              name="asset_name"
              id="AssetName"
              label="Asset Name"
              variant="outlined"
              size="small"
              inputProps={{ maxLength: 80 }}
              value={asset_name}
              onChange={handleAssetForm}
              required
              sx={{ bgcolor: "white" }}
            />
          </div>
          <div className="col-span-4 md:col-span-2">
            <FormControl fullWidth>
              <InputLabel id="assetType">Asset Type</InputLabel>
              <Select
                aria-label="search select"
                name="asset_type"
                id="assetType"
                size="small"
                label="Asset Type"
                value={asset_type}
                onChange={handleAssetForm}
                required
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    outline: "none !important",
                  },
                  "&:hover": {
                    "&& fieldset": {
                      border: "none",
                      outline: "none",
                    },
                  },
                }}
              >
                {AssetType.map((item) => {
                  return (
                    <MenuItem value={item} key={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </section>

        <section className="my-4 grid grid-cols-4 gap-8">
          <div className="col-span-4 md:col-span-2">
            <FormControl fullWidth>
              <InputLabel id="Status">Status</InputLabel>
              <Select
                aria-label="search select"
                labelId="Status"
                name="status"
                id="Status"
                size="small"
                label="Status"
                value={status}
                onChange={handleAssetForm}
                required
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    outline: "none !important",
                  },
                  "&:hover": {
                    "&& fieldset": {
                      border: "none",
                      outline: "none",
                    },
                  },
                }}
              >
                <MenuItem value={"active"}>ACTIVE</MenuItem>
                <MenuItem value={"inactive"}>INACTIVE</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="col-span-4 gap-8 md:col-span-2">
            <TextField
              name="tech_stack"
              id="tech_stack"
              label="Tech Stack"
              inputProps={{ maxLength: 250 }}
              size="small"
              value={tech_stack}
              onChange={handleAssetForm}
              required
              sx={{ bgcolor: "white" }}
            />
          </div>
        </section>

        <section className="my-2 grid grid-cols-4 gap-8">
          <div className="col-span-4 md:col-span-2">
            <TextField
              name="third_party_components"
              id="third_party_components"
              label="Third Party Components"
              inputProps={{ maxLength: 250 }}
              size="small"
              value={third_party_components}
              onChange={handleAssetForm}
              required
              sx={{ bgcolor: "white" }}
            />
          </div>
          <div className="col-span-4 gap-8 md:col-span-2">
            <FormControl fullWidth>
              <InputLabel id="assetType">Internal/External</InputLabel>
              <Select
                aria-label="search select"
                label="Internal/External"
                name="internal_external"
                id="internal_external"
                size="small"
                value={internal_external}
                onChange={handleAssetForm}
                required
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    outline: "none !important",
                  },
                  "&:hover": {
                    "&& fieldset": {
                      border: "none",
                      outline: "none",
                    },
                  },
                }}
              >
                <MenuItem value={"Internal"}>Internal</MenuItem>
                <MenuItem value={"External"}>External</MenuItem>
              </Select>
            </FormControl>
          </div>
        </section>

        <section className="mt-4 w-full">
          <TextField
            name="additional_details"
            id="additional_details"
            multiline
            inputProps={{ maxLength: 600 }}
            rows={4}
            sx={{ width: "100%", bgcolor: "white" }}
            label="Additional Details"
            value={additional_details}
            onChange={handleAssetForm}
            required
          />
        </section>
        <div className="mt-3 flex items-center justify-start gap-4">
          <button
            type="submit"
            className="hover rounded-md bg-primary-btn px-8 py-2 tracking-wide text-white"
          >
            {isEdit ? "Save" : "Add"}
          </button>
          <button
            type="button"
            className=" rounded-md border border-primary-btn bg-white   px-6 py-2 text-primary-btn "
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
