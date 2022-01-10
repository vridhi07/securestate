export const Priority = ["Critical", "High", "Medium", "Low"];
export const AssetType = ["Web App", "Mobile App", "API"];
export const Status = ["In Production", "Sandbox"];

export const changeButtonName = (name, onClick) => {
  if (name === "details") {
    return (
      <button
        onClick={onClick}
        className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm"
      >
        edit asset
      </button>
    );
  }
  if (name === "history") {
    return (
      <button
        onClick={onClick}
        className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm"
      >
        History
      </button>
    );
  }
  if (name === "files") {
    return (
      <>
        <label
          htmlFor="assetfiles"
          className="bg-gray-cus tracking-wide hover:cursor-pointer  text-gray-300 py-2 px-8 capitalize rounded-sm"
        >
          Upload Files
        </label>
        <input id="assetfiles" type="file" className="hidden" />
      </>
    );
  }
  if (name === "sbom") {
    return (
      <button
        onClick={onClick}
        className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm"
      >
        add component
      </button>
    );
  }
};
