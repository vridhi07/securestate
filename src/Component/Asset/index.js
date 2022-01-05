import FilterOption from "../Common/FilterOption";
import { Link, NavLink } from "react-router-dom";
const AssetsCom = () => {
  return (
    <div className="mt-8 ">
      <div className="xl:mx-56 md:mx-44 sm:mx-36 mx-12">
        <FilterOption />
      </div>
      <section className="mt-8 mb-4 flex flex-col  w-95.5 mx-auto">
        <div className="flex justify-between items-center w-full ">
          <h2 className="text-orange-cus-1 tracking-wide  text-6xl">Assets</h2>
          <Link
            to="addasset"
            className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm"
          >
            add asset
          </Link>
        </div>
        <div className="mt-4 flex-col justify-between items-center w-full border-2 h-3/5 ">
          {[1, 2, 3].map((item, index) => {
            return (
              <article
                key={index}
                className="flex justify-between  items-center px-8 md:pr-24 border-b-2 py-3 text-gray-500"
              >
                <div>
                  <h2>Asset Name</h2>
                  <p>Asset Type</p>
                </div>
                <div>
                  <h2>Status</h2>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AssetsCom;
