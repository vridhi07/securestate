import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import MulitSelect from "./MultiSelect";
import TextField from "@mui/material/TextField";
export default function AddUserToGroup({
  isAddUserGroupOpen,
  closeAddUserToGroup,
  company_id,
  personName,
  handleNameChange,
  getDetails,
  selectedNames,
  groupName,
  setGroupName,
  addUserToCompany,
}) {
  return (
    <div>
      <Dialog open={isAddUserGroupOpen}>
        <div className="py-8 px-5 relative">
          <button
            className="absolute top-3 right-3"
            onClick={closeAddUserToGroup}
          >
            <CloseIcon />
          </button>
          <div className="flex flex-col justify-center items-center">
            <header className="px-20">
              <h4>Add User to Company Group</h4>
            </header>
            <div>
              <div className="mb-5 px-[0.5rem]">
                <TextField
                  id="outlined-basic"
                  label="Group Name"
                  variant="outlined"
                  fullWidth
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                />
              </div>
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
              onClick={addUserToCompany}
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
