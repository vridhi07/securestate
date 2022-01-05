import FilterOption from "../Common/FilterOption";

const AddAsset = () => {
  return (
    <div className="mt-8 ">
      <div className="xl:mx-56 md:mx-44 sm:mx-36 mx-12">
        <FilterOption />
      </div>
      <section className="mt-8 mb-4 flex border border-emerald-500 w-95.5 mx-auto">
        <div className="flex justify-between items-center w-full border ">
          <h2 className="text-orange-cus-1 tracking-wide  text-6xl">Assets</h2>

          <button className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm">
            edit asset
          </button>
        </div>
      </section>
    </div>
  );
};

export default AddAsset;
