import { AssetType } from "../../constantData/addAssetInfo";
import { useDispatch } from "react-redux";
export default function AssetModal({ handleClose }) {
  return (
    <form className="px-3 py-4">
      <header className="mb-3">
        <h2 className="text-center text-2xl font-bold tracking-wider">
          New Asset
        </h2>
      </header>

      <section className="grid grid-cols-4 my-2">
        <div className="md:col-span-2 col-span-4">
          <textarea
            name="AssetName"
            id="AssetName"
            className="w-full py-2 px-2 focus:outline-none border-2 border-gray-400 h-11 resize-none"
            maxLength={80}
            placeholder="Asset Name"
          ></textarea>
        </div>
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="grid grid-cols-4 my-2">
        <div className="md:col-span-2 col-span-4">
          <select
            className="form-select
      block
      w-full
      px-2
      py-2.56
      text-base
      font-normal
      text-gray-400
      bg-white bg-clip-padding bg-no-repeat
       border-2  border-gray-400 
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none"
            aria-label="search select "
            name="assetType"
            id="assetType"
          >
            <option hidden value="default">
              Asset Type
            </option>
            {AssetType.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="grid grid-cols-4 my-4">
        <div className="md:col-span-2 col-span-4">
          <select
            className="form-select
      block
      w-full
      px-2
     py-2.56
      text-base
      font-normal
      text-gray-400
      bg-white bg-clip-padding bg-no-repeat
       border-2  border-gray-400 
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none"
            aria-label="search select "
            name="assetType"
            id="assetType"
          >
            <option hidden value="default">
              Status
            </option>
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
          </select>
        </div>
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="grid grid-cols-4 my-3">
        <div className="md:col-span-2 col-span-4">
          <textarea
            name="AssetName"
            id="AssetName"
            className="w-full py-2 px-2 focus:outline-none border-2 border-gray-400 resize-none h-11"
            maxLength={250}
            placeholder="Tech Stack"
          ></textarea>
        </div>
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="grid grid-cols-4 my-2">
        <div className="md:col-span-2 col-span-4">
          <textarea
            name="AssetName"
            id="AssetName"
            className="w-full py-2 px-2 focus:outline-none border-2 border-gray-400 resize-none h-11"
            maxLength={250}
            placeholder="Third Party Components"
          ></textarea>
        </div>
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="grid grid-cols-4 my-3">
        <div className="md:col-span-2 col-span-4">
          <select
            className="form-select
      block
      w-full
      px-2
     py-2.56
      text-base
      font-normal
      text-gray-400
      bg-white bg-clip-padding bg-no-repeat
       border-2  border-gray-400 
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-gray-400 focus:outline-none"
            aria-label="search select "
            name="assetType"
            id="assetType"
          >
            <option hidden value="default">
              Internal/External
            </option>
            <option value="Internal">Internal</option>
            <option value="External">External</option>
          </select>
        </div>
        <div className="md:col-span-2 col-span-4"></div>
      </section>
      <section className="w-full">
        <textarea
          name="AssetName"
          id="AssetName"
          className="w-full py-2 px-2 focus:outline-none border-2 border-gray-400 resize-none h-20"
          maxLength={600}
          placeholder="Additional Details"
        ></textarea>
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
