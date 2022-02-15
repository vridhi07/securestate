import { useState, useEffect } from "react";
import InvoiceTable from "../../../Component/Invoice/InvoiceTable";
import FilterOption from "../../../Component/Common/FilterOption";
import InvoiceModal from "../../../Component/Invoice/InvoiceForm";
import * as action from "../../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import * as roles from "../../../constantData/Roles";
const Invoices = () => {
  const dispatch = useDispatch();

  const { selectedCompany } = useSelector((state) => state?.company);
  const { userDetails, userRole } = useSelector((state) => state?.user);
  const { invoiceData } = useSelector((state) => state?.Invoice);
  const { users, isLoading } = useSelector((state) => state.users);
  // console.log(users);
  const getCompanyId = (role) => {
    if (role === "superAdmin") {
      return selectedCompany;
    }
    return userDetails?.company_id._id;
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const company_id = getCompanyId(userDetails?.role);
  // console.log(company_id);
  const [open, setOpen] = useState(false);
  const [formInput, setFormInput] = useState({
    invoice: "",
    totalAmount: "",
    dueDate: new Date(),
    status: "",
    attachData: "",
    client: "",
  });
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [alert, setAlert] = useState({
    msg: "",
    status: false,
  });

  const handleChangePage = (event, newPage) => {
    console.log(newPage);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };

  const getDate = (newValue) => {
    setFormInput({ ...formInput, dueDate: newValue });
  };

  console.log(formInput.attachData);
  const handleFormInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "totalAmount") {
      value = e.target.value.replace(/\D/, "");
      console.log(value, "I want number");
    }
    if (name === "attachData") {
      value = e.target.files[0];
    }
    setFormInput({ ...formInput, [name]: value });
  };
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // console.log(formInput.attachData);
  const handleClose = () => {
    setOpen(false);
  };

  const removeAttachData = () => {
    setFormInput({ ...formInput, attachData: "" });
  };

  const handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    const { invoice, totalAmount, dueDate, status, attachData, client } =
      formInput;
    const data = new FormData();

    if (!attachData) {
      setAlert({
        ...alert,
        msg: "Please Select an attached file",
        status: true,
      });
    }
    if (attachData) {
      data.append("file", attachData, attachData.name);
      data.append("invoice", invoice);
      data.append("total", totalAmount);
      data.append("status", status);
      data.append("company_id", company_id);
      data.append("user_id", client);
      data.append("due_date", dueDate);
      dispatch(
        action.addInvoiceRequest({ data, company_id, page, rowsPerPage })
      );
      setFormInput({
        ...formInput,
        invoice: "",
        totalAmount: "",
        dueDate: new Date(),
        status: "",
        attachData: "",
        client: "",
      });
      handleClose();
    }
    // console.log(data);
  };
  useEffect(() => {
    if (userRole === roles.admin || userRole === roles.superAdmin) {
      dispatch(action.getInvoiceRequest({ company_id, page, rowsPerPage }));
    }
  }, [company_id, page, rowsPerPage, userRole]);

  useEffect(() => {
    if (userRole === roles.admin || userRole === roles.superAdmin) {
      dispatch(action.getUsersRequest());
    }
  }, [userRole]);

  useEffect(() => {
    if (userRole === roles.client && userDetails?._id) {
      dispatch(
        action.getInvoiceUserIdRequest({
          userId: userDetails?._id,
          page,
          rowsPerPage,
        })
      );
    }
  }, [page, rowsPerPage, userDetails?._id]);

  return (
    <div>
      <div className="mx-auto mt-4 mb-8 max-w-xl">
        <FilterOption />
      </div>
      <div className="my-3 flex w-full justify-between px-[5%] ">
        <h2 className="text-[1.5rem]">Invoices</h2>
        {userRole === roles.admin || userRole === roles.superAdmin ? (
          <button
            className="rounded-md bg-orange-cus-1 px-7 py-2 text-white"
            onClick={handleClickOpen}
            disabled={isLoading}
          >
            Add Invoice
          </button>
        ) : null}
      </div>
      <div className="px-[5%]">
        <InvoiceTable
          invoiceData={invoiceData}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          company_id={company_id}
        />
      </div>
      <InvoiceModal
        open={open}
        asset
        handleClose={handleClose}
        formInput={formInput}
        handleFormInput={handleFormInput}
        getDate={getDate}
        removeAttachData={removeAttachData}
        handleSubmit={handleSubmit}
        users={users}
        alert={alert}
        setAlert={setAlert}
      />
    </div>
  );
};

export default Invoices;
