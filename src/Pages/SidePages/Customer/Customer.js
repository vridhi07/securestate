import FilterOption from "../../../Component/Common/FilterOption";
import NewCustomerForm from "../../../Component/Customer/NewCustomerForm";
import CompanyGroup from "../../../Component/Customer/CompanyGroup";
import Subscription from "../../../Component/Customer/Subscription";
import { useEffect, useState } from "react";
import * as action from "../../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import MultipleSelectChip from "../../../Component/Customer/MultiSelect";
const Customer = () => {
  const dispatch = useDispatch();
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);
  const [customerForm, setCustomerForm] = useState({
    company_name: "",
    location: "",
    website: "",
    main_poc: "",
    main_poc_email: "",
    main_poc_phone: "",
  });
  const handleCustomerForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "main_poc_phone") {
      value = e.target.value.replace(/\D/, "");
    }
    setCustomerForm({ ...customerForm, [name]: value });
  };
  const { users } = useSelector((state) => state?.users);
  console.log(users);
  const openCustomerForm = () => {
    setIsCustomerFormOpen(true);
  };
  const closeCustomerForm = () => {
    setIsCustomerFormOpen(false);
  };
  useEffect(() => {
    dispatch(action.getUsersRequest());
  }, []);
  return (
    <div className="min-h-screen">
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
      {/* <MultipleSelectChip /> */}
      <div className="mt-6  mb-6 h-[759px] lg:h-[392px]">
        <CompanyGroup users={users} />
      </div>

      <Subscription />

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
