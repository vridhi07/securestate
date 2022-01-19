import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
const CompanyGroup = ({
  isCompanyDetailsEdit,
  handleCompanyDetailsEdit,
  cancelCompanyDetailsEdit,
  CompanyInfo,
}) => {
  return (
    <div>
      <div className="mt-3 flex justify-end items-center">
        <div className="border px-1 border-gray-600  h-11 w-52  rounded-3xl flex items-center justify-start">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            className="w-full py-1 pl-2  rounded-3xl border-0 focus:bg-none focus:outline-none focus:ring-0"
          />
        </div>
        <div className="md:mr-8 mr-2 ml-[3%]">
          <button className="w-12 h-12 ease-in duration-300 border-none rounded-full bg-orange-cus-1 grid place-content-center shadow-lg  cursor-pointer hover:shadow-xl">
            <div className="ease-in duration-300 ">
              <AddIcon sx={{ color: "white" }} />
            </div>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-x-4 h-20">
        <div className="test col-span-10 md:col-span-4">
          <div className="grid grid-cols-7 h-32">
            <div className="col-span-6 test">
              <form className="py-2 px-4 pr-8">
                <div className="flex flex-col">
                  <label htmlFor="companyName">Company Name</label>
                  <input
                    type="text"
                    name=""
                    readOnly={isCompanyDetailsEdit ? false : true}
                    className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  />
                </div>
                {isCompanyDetailsEdit && (
                  <div>
                    <button>save</button>
                    <button onClick={cancelCompanyDetailsEdit}>cancel</button>
                  </div>
                )}
              </form>
            </div>
            <div className="col-span-1 test">
              <button onClick={handleCompanyDetailsEdit}>
                <EditIcon />
              </button>
            </div>
          </div>
        </div>
        <div className="test relative col-span-10 md:col-span-6">
          Company Group
        </div>
      </div>
    </div>
  );
};

export default CompanyGroup;
