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
        <form className="relative py-8 px-5" onSubmit={addUserToCompany}>
          <button
            className="absolute top-3 right-3"
            type="button"
            onClick={closeAddUserToGroup}
          >
            <CloseIcon />
          </button>
          <div className="flex flex-col items-center justify-center">
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
                  required
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
          <section className="mx-6 flex items-center justify-center">
            {/* <div>
              <button>Add New User</button>
            </div>
            <div> */}
            <button
              type="submit"
              className="mt-4 w-full bg-orange-cus-1  py-3 text-center text-white "
              // onClick={addUserToCompany}
            >
              Add user
            </button>
            {/* </div> */}
          </section>
        </form>
      </Dialog>
    </div>
  );
}
