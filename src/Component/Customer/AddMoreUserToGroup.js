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
}) {
  return (
    <div>
      <Dialog open={addMoreUserToGroup}>
        <div className="py-8 px-5 relative">
          <button
            className="absolute top-3 right-3"
            onClick={closeAddMoreUserToGroup}
          >
            <CloseIcon />
          </button>
          <div className="flex flex-col justify-center items-center">
            <header className="px-20 text-center">
              <h4 className="text-lg font-semibold capitalize">
                Add User to Group
              </h4>
              <h4 className="text-lg font-bold capitalize">{groupName}</h4>
            </header>
            <div>
              <MulitSelect
                company_id={company_id}
                personName={personName}
                handleNameChange={handleNameChange}
                getDetails={getDetails}
                selectedNames={selectedNames}
              />
            </div>
          </div>
          <section className="mx-6 flex justify-center items-center">
            {/* <div>
              <button>Add New User</button>
            </div>
            <div> */}
            <button
              className="bg-orange-cus-1 text-center text-white  w-full mt-4 py-3 "
              onClick={closeAddMoreUserToGroup}
            >
              Add user
            </button>
            {/* </div> */}
          </section>
        </div>
      </Dialog>
    </div>
  );
}
