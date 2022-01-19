import FilterOption from "../../../Component/Common/FilterOption";
import NewCustomerForm from "../../../Component/Customer/NewCustomerForm";
import CompanyGroup from "../../../Component/Customer/CompanyGroup";
import { useState } from "react";
const Customer = () => {
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);
  const [customerForm, setCustomerForm] = useState({
    company_name: "",
    location: "",
    website: "",
    main_poc: "",
    main_poc_email: "",
    main_poc_phone: "",
  });
  const [CompanyInfo, setCompanyInfo] = useState({
    company_name: "Auzzi Tech",
    location: "Australia",
    website: "http//liAUziee.com",
    main_poc: "ABbsds",
    main_poc_email: "abcd@gmail.com",
    main_poc_phone: "2798383838",
  });
  const [isCompanyDetailsEdit, setIsCompanyDetailsEdit] = useState(false);
  const handleCustomerForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "main_poc_phone") {
      value = e.target.value.replace(/\D/, "");
    }
    setCustomerForm({ ...customerForm, [name]: value });
  };
  const handleCompanyInfo = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "main_poc_phone") {
      value = e.target.value.replace(/\D/, "");
    }
    setCompanyInfo({ ...customerForm, [name]: value });
  };
  const openCustomerForm = () => {
    setIsCustomerFormOpen(true);
  };
  const closeCustomerForm = () => {
    setIsCustomerFormOpen(false);
  };
  const handleCompanyDetailsEdit = () => {
    setIsCompanyDetailsEdit(true);
  };
  const cancelCompanyDetailsEdit = () => {
    setIsCompanyDetailsEdit(false);
  };
  return (
    <div>
      <div className="max-w-4xl mt-4  flex flex-col lg:flex-row  items-start lg:items-center justify-start  mx-auto  ">
        <div className="w-[100%] lg:w-[80%] min-w-[300px]">
          <FilterOption />
        </div>
        <div className="lg:ml-auto h-[2rem] mt-3 lg:mt-0 flex justify-center items-center ">
          <button
            className=" py-2 px-4  bg-[#EBEBEB] border rounded-lg "
            onClick={openCustomerForm}
          >
            New Company
          </button>
        </div>
      </div>
      <div className="mt-6 ">
        <CompanyGroup
          isCompanyDetailsEdit={isCompanyDetailsEdit}
          handleCompanyDetailsEdit={handleCompanyDetailsEdit}
          cancelCompanyDetailsEdit={cancelCompanyDetailsEdit}
          CompanyInfo={CompanyInfo}
          handleCompanyInfo={handleCompanyInfo}
        />
      </div>
      <NewCustomerForm
        isCustomerFormOpen={isCustomerFormOpen}
        closeCustomerForm={closeCustomerForm}
        handleCustomerForm={handleCustomerForm}
        customerForm={customerForm}
      />
    </div>
  );
};

export default Customer;
