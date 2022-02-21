import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import MulitSelect from "./MultiSelect";
// import TextField from "@mui/material/TextField";
export default function AddUserToGroup({
  company_id,
  personName,
  handleNameChange,
  getDetails,
  selectedNames,
  addMoreUserToGroup,
  closeAddMoreUserToGroup,
  groupName,
  handleAddMoreUserToGroup,
}) {
  return (
    <div>
      <Dialog open={addMoreUserToGroup}>
        <div className="bg-primary-clr">
          <header className="flex items-center justify-between bg-orange-cus-1 px-4 py-3 text-white ">
            <h4 className="text-lg font-semibold capitalize">
              Add User to Group {groupName}
            </h4>

            <button onClick={closeAddMoreUserToGroup}>
              <CloseIcon />
            </button>
          </header>
          <div className="px-8 py-4">
            <MulitSelect
              company_id={company_id}
              personName={personName}
              handleNameChange={handleNameChange}
              getDetails={getDetails}
              selectedNames={selectedNames}
            />
            <section className="mx-6 flex items-center justify-center">
              {/* <div>
              <button>Add New User</button>
            </div>
            <div> */}
              <button
                className="mt-4 w-full bg-orange-cus-1  py-3 text-center text-white "
                onClick={handleAddMoreUserToGroup}
              >
                Add user
              </button>
              {/* </div> */}
            </section>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
