import { useState, useEffect } from "react";
import InvoiceTable from "../../../Component/Invoice/InvoiceTable";
import FilterOption from "../../../Component/Common/FilterOption";
import InvoiceModal from "../../../Component/Invoice/InvoiceForm";
import * as action from "../../../Redux/action";
import { useDispatch, useSelector } from "react-redux";

const Invoices = () => {
  const dispatch = useDispatch();

  const { selectedCompany } = useSelector((state) => state?.company);
  const { userDetails } = useSelector((state) => state?.user);
  const { invoiceData } = useSelector((state) => state?.Invoice);
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
  });
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // console.log(invoiceData);
  console.log(page, "page");
  console.log(rowsPerPage, "page");
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
  // GET USER CLIENT
  // const { users } = useSelector((state) => state?.users);
  // // const newUser  = users && users.map(item=>item.role === 'client')
  // // console.log(newUser);
  // // const dispatch = useDispatch();
  // const [newrole, setNewrole] = useState({
  //   role: " ",
  // });
  // useEffect(() => {
  //   dispatch(action.getUsersRequest());
  // }, []);

  // const handleSelect = (e) => {
  //   setNewrole(e.target.value);
  // };
  // console.log(formInput.attachData);
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

  useEffect(() => {
    dispatch(action.getInvoiceRequest({ company_id, page, rowsPerPage }));
  }, [company_id, page, rowsPerPage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { invoice, totalAmount, dueDate, status, attachData } = formInput;
    const data = new FormData();
    if (attachData) {
      data.append("file", attachData, attachData.name);
    }
    data.append("invoice", invoice);
    data.append("total", totalAmount);
    data.append("status", status);
    data.append("company_id", company_id);

    data.append("user_id", newrole_id);
    console.log("I am called");
    setFormInput({
      ...formInput,
      invoice: "",
      totalAmount: "",
      dueDate: new Date(),
      status: "",
      attachData: "",
      role: "",
    });
    // handleClose();
  };
  return (
    <div>
      <div className="max-w-xl mx-auto mt-4 mb-8">
        <FilterOption />
      </div>
      <div className="w-full px-[5%] flex justify-between my-3 ">
        <h2 className="text-[1.5rem]">Invoices</h2>
        <button
          className="px-7 py-2 bg-orange-cus-1 text-white rounded-md"
          onClick={handleClickOpen}
        >
          Add Invoice
        </button>
      </div>
      <div className="px-[5%]">
        <InvoiceTable
          invoiceData={invoiceData}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
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
        newrole={newrole}
        setNewrole={setNewrole}
        handleSelect={handleSelect}
        users = {users}
      />
    </div>
  );
};

export default Invoices;
