import FilterOption from "../../../Component/Common/FilterOption";
import NewCustomerForm from "../../../Component/Customer/NewCustomerForm";
import CompanyGroup from "../../../Component/Customer/CompanyGroup";
import Subscription from "../../../Component/Customer/Subscription";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../../Redux/action";
import { useEffect, useState } from "react";
import * as action from "../../../Redux/action";
import * as roles from "../../../constantData/Roles";
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
  const addCompanyState = useSelector((state) => state.company);
  const { userRole } = useSelector((state) => state?.user);
  console.log(userRole);
  useEffect(() => {
    if (addCompanyState?.isCompanySuccess) {
      setIsCustomerFormOpen(false);
      setCustomerForm({
        ...customerForm,
        company_name: "",
        location: "",
        website: "",
        main_poc: "",
        main_poc_email: "",
        main_poc_phone: "",
      });
    }
  }, [addCompanyState]);

  const handleCustomerForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "main_poc_phone") {
      value = e.target.value.replace(/\D/, "");
    }
    setCustomerForm({ ...customerForm, [name]: value });
  };
  // const { users } = useSelector((state) => state?.users);
  // console.log(users);
  const openCustomerForm = () => {
    setIsCustomerFormOpen(true);
  };
  const closeCustomerForm = () => {
    setIsCustomerFormOpen(false);
  };

  const handleAddCompany = (e) => {
    e.preventDefault();
    dispatch(actions.addCompanyRequest({ ...customerForm }));
  };

  const getAccess = (role) => {
    if (role === roles.superAdmin) {
      return true;
    }
    return false;
  };
  let access;
  if (userRole) {
    access = getAccess(userRole);
  }
  useEffect(() => {
    dispatch(action.getUsersRequest());
  }, []);

  return (
    <div className="min-h-screen">
      <div className=" relative   mt-4  w-full rounded-lg bg-white py-10 ">
        <div className=" max-w-3xl pl-7">
          <FilterOption />
        </div>
        {access && (
          <div className="pl-7 md:absolute md:top-8 md:right-6  md:pl-0 ">
            <button
              className="mt-3 rounded-lg border bg-[#EBEBEB] py-2 px-4   "
              onClick={openCustomerForm}
            >
              New Company
            </button>
          </div>
        )}
      </div>

      {/* <MultipleSelectChip /> */}
      <div>
        <CompanyGroup />
      </div>

      <Subscription />

      <NewCustomerForm
        isCustomerFormOpen={isCustomerFormOpen}
        closeCustomerForm={closeCustomerForm}
        handleCustomerForm={handleCustomerForm}
        customerForm={customerForm}
        handleAddCompany={handleAddCompany}
      />
    </div>
  );
};

export default Customer;
