import {
  Priority,
  AssetType,
  Status,
} from "../../../../constantData/AssestTabInfo";
import { useLocation } from "react-router-dom";
const Details = () => {
  const {
    state: { id },
  } = useLocation();
  console.log(id);
  return (
    <div className="mt-2   flex flex-col  w-full  text-center  ">
      <section className="flex items-center  mb-3 justify-end">
        <button
          className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm
          "
        >
          edit asset
        </button>
      </section>
      <form className="flex flex-col">
        <section className="flex  lg:w-2/4  lg:mx-auto sm:w-2/3 sm:mx-auto items-center">
          <div className="w-full mr-4">
            <input
              type="text"
              className="w-full py-0.56 px-3 text-gray-700 text-base  border border-solid border-gray-400
                focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none"
              placeholder="Asset Name"
              required
              name="assetName"
              id="assestName"
            />
          </div>
          <div className=" w-full">
            <select
              className="form-select
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-400
      bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-400
      
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none"
              aria-label="search select "
              id="assetPriority"
              name="assetPriority"
            >
              <option hidden value="default">
                Priority
              </option>
              {Priority.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </section>
        <section className="flex lg:w-2/4  lg:mx-auto sm:w-2/3 sm:mx-auto  mt-4 items-center ">
          <div className=" w-full mr-4">
            <select
              className="form-select
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-400
      bg-white bg-clip-padding bg-no-repeat
       border border-solid border-gray-400 
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none"
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
          <div className=" w-full">
            <select
              className="form-select
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-400
      bg-white bg-clip-padding bg-no-repeat
     border border-solid border-gray-400 
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-gray-500 focus:outline-none"
              aria-label="search select "
              id="assetStatus"
              name="assetStatus"
            >
              <option hidden value="default">
                Status
              </option>
              {Status.map((item) => {
                return (
                  <option value={item} key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </section>

        <section className="mt-8 flex flex-col lg:w-2/4 sm:w-2/3 sm:mx-auto lg:mx-auto items-center ">
          <textarea
            name="additionalINfo"
            id="additionalINfo"
            className="w-full resize-none border-2 border-solid border-b-gray-400 focus:outline-none focus:text-gray-700 focus:bg-white focus:border-gray-400 px-3 py-1.5 h-32  "
            placeholder="Additional Details (Frameworks,Backend,Frontend,DB,APIs etc.)"
          ></textarea>
        </section>

        <section className="mt-4 flex flex-col lg:w-2/4  sm:w-2/3 sm:mx-auto lg:mx-auto  items-center ">
          <textarea
            name="termsAndCondition"
            id="termsAndCondition"
            className="w-full resize-none border-2 border-solid border-b-gray-400 focus:outline-none focus:text-gray-700 focus:bg-white focus:border-gray-400 px-3 py-1.5 h-32  "
            placeholder="Terms & Condition"
          ></textarea>
        </section>
      </form>

      <section className="ml-auto mt-10">
        <button className="py-2 px-8 bg-red-500 text-white">
          Delete Asset
        </button>
      </section>
    </div>
  );
};

export default Details;
