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
        <form className="bg-primary-clr" onSubmit={addUserToCompany}>
          <header className="flex items-center justify-between  bg-orange-cus-1 px-4 py-3  text-white">
            <h4>Add User to Company Group</h4>
            <button
              // className="absolute top-3 right-3"
              type="button"
              onClick={closeAddUserToGroup}
            >
              <CloseIcon />
            </button>
          </header>
          <div className="px-8 py-4 ">
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
                  sx={{ backgroundColor: "white" }}
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
          </div>
        </form>
      </Dialog>
    </div>
  );
}
