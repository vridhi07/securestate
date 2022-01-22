import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
export default function AddUserToGroup({
  isAddUserGroupOpen,
  closeAddUserToGroup,
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
          <header className="px-20">
            <h4>Add User to Company Group</h4>
          </header>

          <section className="bg-orange-cus-1 text-white flex items-end justify-between mt-4 py-3 pl-[15%] pr-[5%]">
            <div>
              <button>Add New User</button>
            </div>
            <div>
              <button>Save</button>
            </div>
          </section>
        </div>
      </Dialog>
    </div>
  );
}