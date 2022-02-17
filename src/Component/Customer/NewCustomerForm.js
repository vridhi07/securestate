import * as React from "react";

import Dialog from "@mui/material/Dialog";

import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
export default function NewCustomerForm({
  isCustomerFormOpen,
  closeCustomerForm,
  handleCustomerForm,
  customerForm,
  handleAddCompany,
}) {
  const {
    company_name,
    location,
    website,
    main_poc,
    main_poc_email,
    main_poc_phone,
  } = customerForm;

  return (
    <div>
      <Dialog open={isCustomerFormOpen}>
        <form
          className=" bg-primary-clr"
          autoComplete="off"
          onSubmit={(e) => handleAddCompany(e)}
        >
          <header className="flex items-center justify-between bg-orange-cus-1 py-3 px-3 text-white">
            <h4 className="text-center text-lg font-bold ">Add Company</h4>
            <button
              type="button"
              onClick={closeCustomerForm}
              // className="absolute top-3 right-3 "
            >
              <CloseIcon />
            </button>
          </header>
          <div className="px-10 py-4">
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <TextField
                  id="company_name"
                  label="Company Name"
                  name="company_name"
                  value={company_name}
                  onChange={handleCustomerForm}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  inputProps={{ maxLength: 50 }}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <TextField
                  id="location"
                  label="Location"
                  name="location"
                  value={location}
                  onChange={handleCustomerForm}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  inputProps={{ maxLength: 50 }}
                />
              </div>
            </section>
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <TextField
                  id="website"
                  label="Website"
                  name="website"
                  value={website}
                  onChange={handleCustomerForm}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  inputProps={{ maxLength: 50 }}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <TextField
                  id="main_poc"
                  label="Main POC"
                  name="main_poc"
                  value={main_poc}
                  onChange={handleCustomerForm}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  inputProps={{ maxLength: 50 }}
                />
              </div>
            </section>
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <TextField
                  id="main_poc_email"
                  label="Main POC Email"
                  name="main_poc_email"
                  value={main_poc_email}
                  onChange={handleCustomerForm}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  type={"email"}
                  inputProps={{ maxLength: 50 }}
                />
              </div>
              <div className="col-span-4 md:col-span-2">
                <TextField
                  id="main_poc_phone"
                  label="Main POC Phone"
                  name="main_poc_phone"
                  value={main_poc_phone}
                  onChange={handleCustomerForm}
                  variant="outlined"
                  sx={{ mb: 2 }}
                  type={"tel"}
                />
              </div>
            </section>

            <button
              type="submit"
              className=" mt-3 rounded-md bg-primary-btn px-6 py-2   text-white"
            >
              Add Company
            </button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
