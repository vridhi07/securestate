import { useState } from "react";
import InvoiceTable from "../../../Component/Invoice/InvoiceTable";
import FilterOption from "../../../Component/Common/FilterOption";
import InvoiceModal from "../../../Component/Invoice/InvoiceForm";
const Invoices = () => {
  const [open, setOpen] = useState(false);
  const [formInput, setFormInput] = useState({
    invoice: "",
    totalAmount: "",
    dueDate: new Date(),
    status: "",
    attachData: "",
  });
  const getDate = (newValue) => {
    setFormInput({ ...formInput, dueDate: newValue });
  };
  const handleFormInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "attachData") {
      value = e.target.files[0];
    }
    setFormInput({ ...formInput, [name]: value });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <InvoiceTable />
      </div>
      <InvoiceModal
        open={open}
        handleClose={handleClose}
        formInput={formInput}
        handleFormInput={handleFormInput}
        getDate={getDate}
      />
    </div>
  );
};

export default Invoices;
