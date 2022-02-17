export const Priority = ["critical", "high", "medium", "low"];
export const AssetType = ["Web App", "Mobile App", "API"];
export const Status = [
  // "In Production", "Sandbox",
  "active",
  "inactive",
];

export const changeButtonName = (name, onClick) => {
  if (name === "details") {
    return (
      <button
        onClick={onClick}
        className="rounded-sm bg-gray-cus  py-2 px-8 capitalize tracking-wide text-gray-300"
      >
        edit asset
      </button>
    );
  }
  if (name === "history") {
    return (
      <button
        onClick={onClick}
        className="rounded-sm bg-gray-cus  py-2 px-8 capitalize tracking-wide text-gray-300"
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
          className="rounded-sm bg-gray-cus py-2  px-8 capitalize tracking-wide text-gray-300 hover:cursor-pointer"
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
        className="rounded-sm bg-gray-cus  py-2 px-8 capitalize tracking-wide text-gray-300"
      >
        add component
      </button>
    );
  }
};
