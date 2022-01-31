import SearchIcon from "@mui/icons-material/Search";
import ProfileTable from "../../../Component/User/UserTable";
import UserAdd from "../../../Component/User/UserAdd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../../Redux/action";
const Users = () => {
  const [profileSearch, setProfileSearch] = useState("");
  const [isUserAddOpen, setIsUserAddOpen] = useState(false);
  const [userForm, setUserForm] = useState({
    company: "",
    firstName: "",
    lastName: "",
    role: "",
    title: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state?.users);
  const { companyDetails } = useSelector((state) => state?.company);
  // console.log(companyDetails);
  const handleUserFormInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "phone") {
      value = e.target.value.replace(/\D/, "");
    }
    setUserForm({ ...userForm, [name]: value });
  };
  const handleClickOpen = () => {
    setIsUserAddOpen(true);
  };

  const handleClose = () => {
    setIsUserAddOpen(false);
  };

  useEffect(() => {
    dispatch(action.getUsersRequest());
  }, []);
  return (
    <div>
      <section className="mt-8  md:mr-28 flex items-center justify-between md:justify-end">
        <form className="grid justify-center items-center">
          <div
            className="flex justify-end items-center border border-gray-600 
          py-0.5 pr-2 rounded-3xl
          "
          >
            <SearchIcon sx={{ ml: "0.5rem", mt: "0.2rem" }} />
            <input
              type="search"
              className="py-1 px-1 focus:outline-none bg-clip-padding placeholder:text-gray-600 border-0 focus:bg-none  focus:ring-0"
              placeholder="Search"
              value={profileSearch}
              onChange={(e) => setProfileSearch(e.target.value)}
            />
          </div>
        </form>

        <button
          onClick={handleClickOpen}
          className=" px-7 py-2 text-white tracking-wider bg-orange-cus-1 rounded-md md:ml-4 "
        >
          New User
        </button>
      </section>
      <div className="w-full mt-8">
        <ProfileTable users={users} />
      </div>
      <UserAdd
        handleClose={handleClose}
        isUserAddOpen={isUserAddOpen}
        handleUserFormInput={handleUserFormInput}
        userForm={userForm}
        companyDetails={companyDetails}
      />
    </div>
  );
};
export default Users;
