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
        <div className="relative ">
          {/* <DialogTitle sx={{ textAlign: "center", mt: 2 }}>
            Add User
          </DialogTitle>
          <DialogContent sx={{ width: 400 }}> */}
          <button onClick={handleClose} className="absolute top-3 right-3">
            <CloseIcon />
          </button>
          <form onSubmit={handleSubmit} className="px-5 py-5 md:px-20">
            <h4 className="text-xl font-bold tracking-wider ">Add user</h4>
            <section className=" my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                {roles ? (
                  <FormControl fullWidth sx={{ mt: 1 }}>
                    <InputLabel id="userCompany">Company</InputLabel>
                    <Select
                      labelId="userCompany"
                      id="userCompany"
                      value={company}
                      label="Company"
                      size="small"
                      name="company"
                      onChange={handleUserFormInput}
                      required
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
                  <FormControl fullWidth sx={{ mt: 1 }}>
                    <InputLabel id="userCompany">Company</InputLabel>
                    <Select
                      labelId="userCompany"
                      id="userCompany"
                      value={userDetails?.company_id.company_name}
                      label="Company"
                      size="small"
                      name="company"
                      onChange={handleUserFormInput}
                      required
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
              </div>
              <div className="col-span-4 md:col-span-2">
                <FormControl fullWidth>
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
                    required
                  />
                </FormControl>
              </div>
            </section>
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <FormControl fullWidth>
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
                    required
                  />
                </FormControl>
              </div>
              <div className="col-span-4 md:col-span-2">
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
                    required
                  >
                    <MenuItem value={"admin"}>Admin</MenuItem>
                    <MenuItem value={"client"}>Client</MenuItem>
                    <MenuItem value={"hacker"}>Security Researcher</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </section>
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <FormControl fullWidth>
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
              </div>
              <div className="col-span-4 md:col-span-2">
                <FormControl fullWidth>
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
              </div>
            </section>
            <section className="my-2 grid grid-cols-4 gap-8">
              <div className="col-span-4 md:col-span-2">
                <FormControl fullWidth>
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
                    required
                  />
                </FormControl>
              </div>
              <div className="col-span-4 md:col-span-2"></div>
            </section>

            <div className="mt-3 mb-4 flex flex-col items-center justify-center">
              <button
                type="submit"
                className=" bg-orange-cus-1 rounded-md px-[4.5rem] py-2 tracking-wider text-white  "
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
          {/* </DialogContent> */}
        </div>
      </Dialog>
    </div>
  );
}
