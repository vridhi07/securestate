import FilterOption from "../Common/FilterOption";
import Details from "./barComponent/DetailsTab";
import FilesTab from "./barComponent/FilesTab";
import HistoryTab from "./barComponent/HistoryTab";
import SBOMTab from "./barComponent/SBOMTab";
import { useState } from "react";
const AddAsset = () => {
  const navDetails = ["Details", "History", "Files", "SBOM"];
  const [currentPage, setCurrentPage] = useState("Details");
  const changeButtonName = (name) => {
    if (name === "Details") {
      return "edit asset";
    }
    if (name === "History") {
      return "add event";
    }
    if (name === "Files") {
      return "upload file";
    }
    if (name === "SBOM") {
      return "add component";
    }
  };
  return (
    <div className="mt-8 ">
      <div className="xl:mx-56 md:mx-44 sm:mx-36 mx-12">
        <FilterOption />
      </div>
      <section className="mt-8 mb-4 flex flex-col  w-95.5 mx-auto">
        <div className="ml-auto">
          <button className="bg-gray-cus tracking-wide  text-gray-300 py-2 px-8 capitalize rounded-sm">
            {changeButtonName(currentPage)}
          </button>
        </div>
        <div className="mt-4 flex  w-80 mx-auto ">
          {navDetails.map((item, index) => {
            return (
              <button
                id="navButton"
                key={index}
                className={`${
                  currentPage === item
                    ? "add-Asest-Btn activesBTn "
                    : "add-Asest-Btn"
                }`}
                onClick={() => setCurrentPage(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="mt-12 ">
          {currentPage === "Details" && <Details />}
          {currentPage === "History" && <HistoryTab />}
          {currentPage === "Files" && <FilesTab />}
          {currentPage === "SBOM" && <SBOMTab />}
        </div>
      </section>
    </div>
  );
};

export default AddAsset;
