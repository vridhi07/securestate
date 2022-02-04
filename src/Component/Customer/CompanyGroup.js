import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import SingleGroupCLient from "./SingleGroupCLient";
import AddUserToGroup from "./AddUserToGroup";
import * as actions from "../../Redux/action";

const CompanyGroup = () => {
  const [isCompanyDetailsEdit, setIsCompanyDetailsEdit] = useState(false);
  const focusRef = useRef();
  const [CompanyInfo, setCompanyInfo] = useState({
    company_name: "",
    location: "",
    website: "",
    main_poc: "",
    main_poc_email: "",
    main_poc_phone: "",
  });

  const [personName, setPersonName] = useState([]);
  const [item, setItems] = useState([]);
  // console.log(item);
  const handleNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const getDetails = (id) => {
    // let data = [];
    // let newData = { companyId, id, companyName };

    setItems([...item, id]);
    // console.log(item.indexOf(id));
    // console.log(item.includes(i;
    if (!item.includes(id)) {
      setItems([...item, id]);
    }
    if (item.includes(id)) {
      setItems(item.filter((data) => data !== id));
    }
    // setItems((current) => {
    //   let newData = current.filter((item) => item !== id);
    //   return newData;
    // });
  };

  const dispatch = useDispatch();
  const companyDetails = useSelector(
    (state) => state?.company?.companyListById
  );
  const { selectedCompany } = useSelector((state) => state?.company);
  const { userDetails } = useSelector((state) => state?.user);

  const getCompanyId = (role) => {
    if (role === "superAdmin") {
      return selectedCompany;
    }
    return userDetails?.company_id._id;
  };
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const company_id = getCompanyId(userDetails?.role);
  // console.log(company_id);
  const [isAddUserGroupOpen, setIsAddUserGroupOpen] = useState(false);

  useEffect(() => {
    if (isCompanyDetailsEdit) {
      const div = focusRef.current;
      const input = div.children[1].children[0];
      input.focus();
    }
  }, [isCompanyDetailsEdit]);

  useEffect(() => {
    dispatch(
      actions.getCompanyByIdRequest({
        companyId: company_id,
      })
    );
  }, [company_id]);

  useEffect(() => {
    if (companyDetails) {
      setCompanyInfo({
        company_name: companyDetails?.company_name,
        location: companyDetails?.location,
        main_poc: companyDetails?.main_poc,
        main_poc_email: companyDetails?.main_poc_email,
        main_poc_phone: companyDetails?.main_poc_phone,
        website: companyDetails?.website,
      });
    }
  }, [companyDetails]);
  const openAddUserToGroup = () => {
    setIsAddUserGroupOpen(true);
  };

  const closeAddUserToGroup = () => {
    setIsAddUserGroupOpen(false);
    setItems([]);
    setPersonName([]);
  };

  const handleCompanyInfo = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "main_poc_phone") {
      value = e.target.value.replace(/\D/, "");
    }
    setCompanyInfo({ ...CompanyInfo, [name]: value });
  };
  const handleCompanyDetailsEdit = () => {
    setIsCompanyDetailsEdit(true);
  };
  const cancelCompanyDetailsEdit = () => {
    setIsCompanyDetailsEdit(false);
    setCompanyInfo({
      ...CompanyInfo,
      company_name: companyDetails?.company_name,
      location: companyDetails?.location,
      main_poc: companyDetails?.main_poc,
      main_poc_email: companyDetails?.main_poc_email,
      main_poc_phone: companyDetails?.main_poc_phone,
      website: companyDetails?.website,
    });
  };

  const handleUpdateCompanyDetails = (e) => {
    e.preventDefault();
    const data = {
      ...CompanyInfo,
      id: company_id,
    };
    dispatch(
      actions.updateCompanyDetailsRequest({ data, companyId: company_id })
    );
    setIsCompanyDetailsEdit(false);
  };

  return (
    <div className=" gap-y-[300%] grid grid-cols-10 gap-x-4 h-20">
      {/* Company Info */}
      <div className=" col-span-10 lg:col-span-4 lg:mt-[3.8rem]">
        <div className="grid grid-cols-7 h-32">
          <div className="col-span-6 ">
            <form
              className="py-2 px-4 pr-8"
              onSubmit={(e) => handleUpdateCompanyDetails(e)}
            >
              <div className="flex flex-col">
                <TextField
                  type="text"
                  label="Company Name"
                  name="company_name"
                  value={CompanyInfo.company_name}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  ref={focusRef}
                  sx={{ mb: 2 }}
                  size="small"
                />
                <TextField
                  type="text"
                  label="Location"
                  name="location"
                  value={CompanyInfo.location}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  sx={{ mb: 2 }}
                  size="small"
                />
                <TextField
                  type="text"
                  label="Website"
                  name="website"
                  value={CompanyInfo.website}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  sx={{ mb: 2 }}
                  size="small"
                />
                <TextField
                  type="text"
                  label="Main POC"
                  name="main_poc"
                  value={CompanyInfo.main_poc}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  sx={{ mb: 2 }}
                  size="small"
                />
                <TextField
                  type="email"
                  label="Main POC Email"
                  name="main_poc_email"
                  value={CompanyInfo.main_poc_email}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  sx={{ mb: 2 }}
                  size="small"
                />
                <TextField
                  type="tel"
                  label="Main POC Phone"
                  name="main_poc_phone"
                  value={CompanyInfo.main_poc_phone}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  sx={{ mb: 2 }}
                  size="small"
                />
              </div>
              {isCompanyDetailsEdit && (
                <div className="mt-3">
                  <button
                    className="px-4 py-2 bg-slate-400 text-gray-700 mr-3 rounded-md"
                    type="submit"
                  >
                    save
                  </button>
                  <button
                    className="px-4 py-2 bg-slate-400 text-gray-700 rounded-md  "
                    onClick={cancelCompanyDetailsEdit}
                  >
                    cancel
                  </button>
                </div>
              )}
            </form>
          </div>
          <div className="col-span-1  py-2">
            <button onClick={handleCompanyDetailsEdit}>
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
      {/* Company Info End */}
      <div className="  col-span-10 lg:col-span-6">
        <div className="mt-3 flex justify-between items-center">
          <header>
            <h2 className="font-bold text-lg text-gray-700">Company Group</h2>
          </header>
          <div className="flex items-center">
            <div className="border px-1 border-gray-600  h-11 w-52  rounded-3xl flex items-center justify-start">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-1 pl-2  rounded-3xl border-0 focus:bg-none focus:outline-none focus:ring-0"
              />
            </div>
            <div className="md:mr-8 mr-2 ml-[3%]">
              <button
                className="w-12 h-12 ease-in duration-300 border-none rounded-full bg-orange-cus-1 grid place-content-center shadow-lg  cursor-pointer hover:shadow-xl"
                onClick={openAddUserToGroup}
              >
                <AddIcon sx={{ color: "white" }} />
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-3  border border-gray-700 px-1 py-2 h-[317px] overflow-y-auto">
          <div className="min-h-[100%] flex flex-col py-2 ">
            {[1, 2, 3, 4].map((item) => {
              return <SingleGroupCLient key={item} />;
            })}
          </div>
        </div>
      </div>
      <AddUserToGroup
        isAddUserGroupOpen={isAddUserGroupOpen}
        closeAddUserToGroup={closeAddUserToGroup}
        company_id={company_id}
        personName={personName}
        handleNameChange={handleNameChange}
        getDetails={getDetails}
      />
    </div>
  );
};

export default CompanyGroup;
