import { AssetType } from "../../constantData/addAssetInfo";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
export default function AssetModal({
  handleClose,
  assetForm,
  handleAssetForm,
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
    <form className="px-3 py-4">
      <header className="mb-3">
        <h2 className="text-center text-2xl font-bold tracking-wider">
          New Asset
        </h2>
      </header>

      <section className="grid grid-cols-4 my-2">
        <div className="md:col-span-2 col-span-4">
          <TextField
            name="asset_name"
            id="AssetName"
            className="w-full py-2 px-2 focus:outline-none border-2 border-gray-400 h-11 resize-none"
            label="Asset Name"
            variant="outlined"
            size="small"
            inputProps={{ maxLength: 80 }}
            value={asset_name}
            onChange={handleAssetForm}
          />
        </div>
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="grid grid-cols-4 my-2">
        <div className="md:col-span-2 col-span-4">
          <FormControl fullWidth>
            <InputLabel id="assetType">Asset Type</InputLabel>
            <Select
              aria-label="search select "
              name="asset_type"
              id="assetType"
              size="small"
              label="Asset Type"
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
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="grid grid-cols-4 my-4">
        <div className="md:col-span-2 col-span-4">
          <FormControl fullWidth>
            <InputLabel id="Status">Status</InputLabel>
            <Select
              aria-label="search select"
              labelId="Status"
              name="status"
              id="Status"
              size="small"
              label="Status"
            >
              <MenuItem value={"ACTIVE"}>ACTIVE</MenuItem>
              <MenuItem value={"INACTIVE"}>INACTIVE</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="grid grid-cols-4 my-3">
        <div className="md:col-span-2 col-span-4">
          <TextField
            name="tech_stack"
            id="tech_stack"
            label="Tech Stack"
            inputProps={{ maxLength: 250 }}
            size="small"
          />
        </div>
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="grid grid-cols-4 my-2">
        <div className="md:col-span-2 col-span-4">
          <TextField
            name="third_party_components"
            id="third_party_components"
            label="Third Party Components"
            inputProps={{ maxLength: 250 }}
            size="small"
          />
        </div>
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="grid grid-cols-4 my-3">
        <div className="md:col-span-2 col-span-4">
          <FormControl fullWidth>
            <InputLabel id="assetType">Internal/External</InputLabel>
            <Select
              aria-label="search select"
              label="Internal/External"
              name="internal_external"
              id="internal_external"
              size="small"
            >
              <MenuItem value={"Internal"}>Internal</MenuItem>
              <MenuItem value={"External"}>External</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="w-full mt-4">
        <TextField
          name="additional_details"
          id="additional_details"
          multiline
          inputProps={{ maxLength: 600 }}
          rows={4}
          sx={{ width: "100%" }}
          label="Additional Details"
        />
      </section>
      <div className="flex justify-between items-center mt-3">
        <button
          type="button"
          className="px-14 text-white py-2 rounded-md tracking-wide bg-gray-cus-5"
        >
          Add
        </button>
        <button
          type="button"
          className="px-4 py-2 text-gray-500 bg-slate-200 rounded-md"
          onClick={handleClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
