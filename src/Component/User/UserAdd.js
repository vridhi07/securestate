import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
export default function UserAdd({
  handleClose,
  isUserAddOpen,
  handleUserFormInput,
  userForm,
  companyDetails = [],
  handleSubmit,
  getCompanyId,
}) {
  const { company, firstName, lastName, role, title, email, phone } = userForm;
  const { userDetails } = useSelector((state) => state?.user);

  const getRole = (role) => {
    if (role === "superAdmin") {
      return true;
    }
    return false;
  };
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const roles = getRole(userDetails?.role);
  return (
    <div>
      <Dialog open={isUserAddOpen} onClose={handleClose}>
        <div className="relative min-w-[400px]">
          <DialogTitle sx={{ textAlign: "center", mt: 2 }}>
            Add User
          </DialogTitle>
          <DialogContent sx={{ width: 400 }}>
            <button onClick={handleClose} className="absolute top-3 right-3">
              <CloseIcon />
            </button>
            <form onSubmit={handleSubmit}>
              {roles ? (
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="userCompany">Company</InputLabel>
                  <Select
                    labelId="userCompany"
                    id="userCompany"
                    value={company}
                    label="Company"
                    size="small"
                    name="company"
                    onChange={handleUserFormInput}
                  >
                    {companyDetails &&
                      companyDetails.map((item) => (
                        <MenuItem
                          value={item?.company_name}
                          key={item?._id}
                          onClick={() => getCompanyId(item?._id)}
                        >
                          {item?.company_name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              ) : (
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <InputLabel id="userCompany">Company</InputLabel>
                  <Select
                    labelId="userCompany"
                    id="userCompany"
                    value={userDetails?.company_id.company_name}
                    label="Company"
                    size="small"
                    name="company"
                    onChange={handleUserFormInput}
                  >
                    {userDetails?.company_id.company_name && (
                      <MenuItem
                        value={userDetails?.company_id.company_name}
                        onClick={() =>
                          getCompanyId(userDetails?.company_id._id)
                        }
                      >
                        {userDetails?.company_id.company_name}
                      </MenuItem>
                    )}
                  </Select>
                </FormControl>
              )}

              <FormControl fullWidth sx={{ mt: 1 }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  type="text"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={firstName}
                  onChange={handleUserFormInput}
                  inputProps={{ maxLength: 15 }}
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: 1 }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  type="text"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={lastName}
                  onChange={handleUserFormInput}
                  inputProps={{ maxLength: 15 }}
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: 1 }}>
                <InputLabel id="userRole">Select Role</InputLabel>
                <Select
                  labelId="userRole"
                  id="userRole"
                  value={role}
                  label="Select Role"
                  size="small"
                  name="role"
                  onChange={handleUserFormInput}
                >
                  <MenuItem value={"Admin"}>Admin</MenuItem>
                  <MenuItem value={"Client"}>Client</MenuItem>
                  <MenuItem value={"Security Researcher"}>
                    Security Researcher
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mt: 1 }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="title"
                  label="Title"
                  name="title"
                  type="text"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={title}
                  onChange={handleUserFormInput}
                  inputProps={{ maxLength: 15 }}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: 1 }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={email}
                  onChange={handleUserFormInput}
                  required
                />
              </FormControl>
              <FormControl fullWidth sx={{ mt: 1 }}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="phone"
                  label="Phone"
                  name="phone"
                  type="tel"
                  fullWidth
                  variant="outlined"
                  size="small"
                  value={phone}
                  onChange={handleUserFormInput}
                />
              </FormControl>
              <div className="flex flex-col justify-center items-center mt-3 mb-4">
                <button
                  type="submit"
                  className=" px-[4.5rem] py-2 text-white tracking-wider bg-orange-cus-1 rounded-md  "
                >
                  Save
                </button>
                {/* <button
                  onClick={handleClose}
                  type="button"
                  className=" px-7 py-2 text-white tracking-wider bg-orange-cus-1 rounded-md   my-4"
                >
                  Reset Password
                </button>
                <button
                  onClick={handleClose}
                  type="button"
                  className=" px-[2.9rem] py-2 text-white tracking-wider bg-[#E74021] rounded-md "
                >
                  Delete User
                </button> */}
              </div>
            </form>
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}
