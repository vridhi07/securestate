import SearchIcon from "@mui/icons-material/Search";
import ProfileTable from "../../../Component/User/UserTable";
import UserAdd from "../../../Component/User/UserAdd";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserAlert from "../../../Component/User/UserAlert";
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
  const [companyIds, setCompanyId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedId, setSelected] = useState(null);
  const [newUsers, setNewUsers] = useState([]);

  // !Redux
  const dispatch = useDispatch();
  const { users, isLoading, isError, Message } = useSelector(
    (state) => state?.users
  );
  const { companyDetails } = useSelector((state) => state?.company);
  const { userDetails } = useSelector((state) => state?.user);
  // console.log(companyDetails);
  // ! Functions
  const openDeleteModal = (id) => {
    setIsDeleteModalOpen(true);
    // console.log(id);
    setSelected(id);
  };
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelected(null);
  };
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
    setCompanyId(null);
    setUserForm({
      ...userForm,
      company: "",
      firstName: "",
      lastName: "",
      role: "",
      title: "",
      email: "",
      phone: "",
    });
  };

  const handleSubmit = (e) => {
    const { firstName, lastName, role, title, email, phone } = userForm;
    e.preventDefault();
    let companyId;
    if (userDetails?.role === "superAdmin") {
      companyId = companyIds;
    } else {
      companyId = userDetails?.company_id._id;
    }
    let data = {
      fname: firstName,
      lname: lastName,
      role,
      title,
      email,
      phone,
      companyId,
    };
    console.log(data);
    dispatch(action.addUsersRequest(data));
    handleClose();
  };

  const getCompanyId = (id) => {
    console.log(id);
    setCompanyId(id);
  };

  const handleDelete = () => {
    dispatch(action.deleteUsersRequest(selectedId));
    closeDeleteModal();
  };

  const getFilteredUser = (data, search) => {
    let temData = [...data];
    if (search) {
      temData = temData.filter((item) => {
        return item.role.toLowerCase().startsWith(search);
      });
    }
    // if (temData.length === 0) {
    //   temData = [...newUsers].filter((item) => {
    //     return item.name.toLowerCase().startsWith(search);
    //   });
    // }
    return temData;
  };

  let filteredData;
  if (newUsers) {
    filteredData = getFilteredUser(newUsers, profileSearch);
  }
  console.log(filteredData);
  useEffect(() => {
    dispatch(action.getUsersRequest());
  }, []);

  useEffect(() => {
    if (users) {
      setNewUsers([...users]);
    }
  }, [users]);
  return (
    <div>
      <div className="text-center">{isError && <UserAlert />}</div>

      <section className="mt-8  flex items-center justify-between md:mr-28 md:justify-end">
        <form className="grid items-center justify-center">
          <div
            className="flex items-center justify-end rounded-3xl border 
          border-gray-600 bg-white py-0.5 pr-2
          "
          >
            <SearchIcon sx={{ ml: "0.5rem", mt: "0.2rem" }} />
            <input
              type="search"
              className="border-0 bg-clip-padding py-1 px-1 placeholder:text-gray-600 focus:bg-none focus:outline-none  focus:ring-0"
              placeholder="Search"
              value={profileSearch}
              onChange={(e) => setProfileSearch(e.target.value)}
            />
          </div>
        </form>

        <button
          onClick={handleClickOpen}
          className=" rounded-md bg-orange-cus-1 px-7 py-2 tracking-wider text-white md:ml-4 "
          disabled={isLoading}
        >
          New User
        </button>
      </section>
      <div className="mt-8 w-full">
        <ProfileTable
          users={filteredData}
          openDeleteModal={openDeleteModal}
          handleDelete={handleDelete}
          isDeleteModalOpen={isDeleteModalOpen}
          closeDeleteModal={closeDeleteModal}
        />
      </div>
      <UserAdd
        handleClose={handleClose}
        isUserAddOpen={isUserAddOpen}
        handleUserFormInput={handleUserFormInput}
        userForm={userForm}
        companyDetails={companyDetails}
        handleSubmit={handleSubmit}
        getCompanyId={getCompanyId}
      />
    </div>
  );
};
export default Users;
