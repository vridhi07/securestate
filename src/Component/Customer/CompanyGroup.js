import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
// import TextField from "@mui/material/TsextField";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import DeleteModal from "../Common/DeleteModal";
import AddUserToGroup from "./AddUserToGroup";
import * as actions from "../../Redux/action";
import GroupAccordion from "./GroupAccordion";
import AddMoreUserToGroup from "./AddMoreUserToGroup";
import GroupDeleteModal from "./GroupDeleteModal";
const CompanyGroup = () => {
  const dispatch = useDispatch();
  const companyDetails = useSelector(
    (state) => state?.company?.companyListById
  );
  const { selectedCompany } = useSelector((state) => state?.company);
  const { userDetails } = useSelector((state) => state?.user);
  const { GroupUsers } = useSelector((state) => state?.GroupUserList);
  const getCompanyId = (role) => {
    if (role === "superAdmin") {
      return selectedCompany;
    }
    return userDetails?.company_id._id;
  };
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const company_id = getCompanyId(userDetails?.role);
  // console.log(GroupUsers, "group user");
  const [isCompanyDetailsEdit, setIsCompanyDetailsEdit] = useState(false);
  const focusRef = useRef();
  const [CompanyInfo, setCompanyInfo] = useState({
    company_name: "",
    location: "",
    website: "",
    main_poc: "",
    main_poc_email: "",
    main_poc_phone: "",
  });

  const [personName, setPersonName] = useState([]);
  const [groupName, setGroupName] = useState("");
  const [item, setItems] = useState([]);

  const [expanded, setExpanded] = useState("panel0");
  const [search, setSearch] = useState("");
  let [groupUsers, setGroupUsers] = useState([]);

  // const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModal] = useState(false);
  const [groupId, setGroupId] = useState(null);
  const [addMoreUserToGroup, setAddMoreUserToGroup] = useState(false);
  const [isDeleteGroupOpen, setIsDeleteGroupOpen] = useState(false);

  const openIsDeleteGroupOpen = () => {
    setIsDeleteGroupOpen(true);
  };

  const closeIsDeleteGroupOpen = () => {
    setIsDeleteGroupOpen();
    setGroupId(null);
  };

  const handleDeleteGroup = (id) => {
    console.log(id, "GroupId");
    setGroupId(id);
    openIsDeleteGroupOpen();
  };

  const DeleteGroup = () => {
    console.log("deleted", groupId);
    dispatch(actions.deleteGroupRequest({ groupId: groupId, id: company_id }));
    closeIsDeleteGroupOpen();
  };

  // console.log(selectedId, "userId");
  // console.log(groupId, "groupId");
  const handleOpenAddMoreUserToGroup = (id, name) => {
    // console.log(id, name);
    setGroupId(id);
    setGroupName(name);
    setAddMoreUserToGroup(true);
  };

  const closeAddMoreUserToGroup = () => {
    setGroupId(null);
    setGroupName(null);
    setAddMoreUserToGroup(false);
    setItems([]);
    setPersonName([]);
  };

  const handleAddMoreUserToGroup = () => {
    // console.log("added");
    const data = {
      groupId: groupId,
      userId: [...item],
    };
    dispatch(actions.addMoreUserToGroupRequest({ id: company_id, data }));
    closeAddMoreUserToGroup();
  };

  const openDeleteModal = (id) => {
    setIsDeleteModal(true);
    setSelectedId(id);
    // handleMenuClose();
  };

  const closeDeleteModal = () => {
    setIsDeleteModal(false);
  };

  const handleDelete = () => {
    // console.log("deleted");
    dispatch(
      actions.deleteUserFromGroupRequest({
        id: company_id,
        groupId: groupId,
        userId: selectedId,
      })
    );
    closeDeleteModal();
  };

  // const handleMenuOpen = (e, id) => {
  //   // consol`e.log(id);
  //   setAnchorEl(e.currentTarget);
  //   setSelectedId(id);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  // };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleNameChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const getDetails = (id) => {
    setItems([...item, id]);
    // console.log(item.indexOf(id));
    // console.log(item.includes(i;
    if (!item.includes(id)) {
      setItems([...item, id]);
    }
    if (item.includes(id)) {
      setItems(item.filter((data) => data !== id));
    }
    // setItems((current) => {
    //   let newData = current.filter((item) => item !== id);
    //   return newData;
    // });
  };

  // console.log(company_id);
  const [isAddUserGroupOpen, setIsAddUserGroupOpen] = useState(false);

  useEffect(() => {
    if (isCompanyDetailsEdit) {
      const input = focusRef.current;
      // const input = div.children[1].children[0];
      input.focus();
      // console.log(div);
    }
  }, [isCompanyDetailsEdit]);

  useEffect(() => {
    if (company_id) {
      dispatch(
        actions.getCompanyByIdRequest({
          companyId: company_id,
        })
      );
      dispatch(actions.getGroupListRequest({ id: company_id }));
    }
  }, [company_id]);

  useEffect(() => {
    if (GroupUsers) {
      setGroupUsers([...GroupUsers]);
    }
  }, [GroupUsers]);

  useEffect(() => {
    if (companyDetails) {
      setCompanyInfo({
        company_name: companyDetails?.company_name,
        location: companyDetails?.location,
        main_poc: companyDetails?.main_poc,
        main_poc_email: companyDetails?.main_poc_email,
        main_poc_phone: companyDetails?.main_poc_phone,
        website: companyDetails?.website,
      });
    }
  }, [companyDetails]);
  const openAddUserToGroup = () => {
    setIsAddUserGroupOpen(true);
  };

  const closeAddUserToGroup = () => {
    setIsAddUserGroupOpen(false);
    setItems([]);
    setPersonName([]);
  };

  const handleCompanyInfo = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "main_poc_phone") {
      value = e.target.value.replace(/\D/, "");
    }
    setCompanyInfo({ ...CompanyInfo, [name]: value });
  };
  const handleCompanyDetailsEdit = () => {
    setIsCompanyDetailsEdit(true);
  };
  const cancelCompanyDetailsEdit = () => {
    setIsCompanyDetailsEdit(false);
    setCompanyInfo({
      ...CompanyInfo,
      company_name: companyDetails?.company_name,
      location: companyDetails?.location,
      main_poc: companyDetails?.main_poc,
      main_poc_email: companyDetails?.main_poc_email,
      main_poc_phone: companyDetails?.main_poc_phone,
      website: companyDetails?.website,
    });
  };

  const handleUpdateCompanyDetails = (e) => {
    e.preventDefault();
    const data = {
      ...CompanyInfo,
      id: company_id,
    };
    dispatch(
      actions.updateCompanyDetailsRequest({ data, companyId: company_id })
    );
    setIsCompanyDetailsEdit(false);
  };
  const addUserToCompany = (e) => {
    e.preventDefault();
    const data = {
      group_name: groupName,
      companyId: company_id,
      userId: [...item],
    };
    dispatch(actions.addUserToGroupRequest({ id: company_id, data }));
    setGroupName("");
    closeAddUserToGroup();
  };

  const filterSearch = (data, search) => {
    let newData = [...data];

    if (search) {
      newData = newData.filter((item) =>
        item.group_name.toLowerCase().startsWith(search)
      );
    }
    return newData;
  };
  let groupData;
  if (groupUsers) {
    groupData = filterSearch(groupUsers, search);
  }
  // console.log(groupData);
  return (
    <div className="mt-2">
      {/* Company Info */}

      <div className="my-8 mx-auto w-95.5 max-w-5xl">
        <div className=" flex w-full  justify-end">
          <button
            onClick={handleCompanyDetailsEdit}
            className=" hover rounded-md bg-primary-btn px-3 py-2 text-white md:mr-8 "
          >
            <EditIcon />
            Edit Details
          </button>
        </div>
        <form
          className="py-2 px-4 pr-8 text-[#737275]"
          // onSubmit={(e) => handleUpdateCompanyDetails(e)}
        >
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className=" flex w-full flex-col rounded-md">
                <label htmlFor="company_name">Company Name</label>
                <input
                  type="text"
                  // label="Company Name"
                  name="company_name"
                  id="company_name"
                  value={CompanyInfo.company_name}
                  onChange={handleCompanyInfo}
                  className="rounded-md border border-gray-600 px-2 py-1 outline-none"
                  ref={focusRef}
                  readOnly={isCompanyDetailsEdit ? false : true}
                  className="rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
            </div>
            <div className="col-span-4">
              <div className=" flex w-full flex-col rounded-md">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  // label="Location"
                  name="location"
                  id="location"
                  value={CompanyInfo.location}
                  onChange={handleCompanyInfo}
                  className="rounded-md border border-gray-600 px-2 py-1 outline-none"
                  readOnly={isCompanyDetailsEdit ? false : true}
                  className="rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
            </div>
            <div className="col-span-4">
              <div className=" flex w-full flex-col ">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  label="Website"
                  name="website"
                  id="website"
                  value={CompanyInfo.website}
                  onChange={handleCompanyInfo}
                  className="rounded-md border border-gray-600 px-2 py-1 outline-none"
                  readOnly={isCompanyDetailsEdit ? false : true}
                  className="rounded-md px-4 py-3 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="mt-3 grid grid-cols-12 gap-4">
              <div className=" col-span-4">
                <div className=" flex w-full flex-col rounded-md">
                  <label htmlFor="main_poc">Main POC</label>
                  <input
                    type="text"
                    // label="Main POC"
                    id="main_poc"
                    name="main_poc"
                    value={CompanyInfo.main_poc}
                    onChange={handleCompanyInfo}
                    readOnly={isCompanyDetailsEdit ? false : true}
                    className="rounded-md px-4 py-3 focus:outline-none"
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className=" flex w-full flex-col rounded-md">
                  <label htmlFor="main_poc_email">Main POC Email</label>
                  <input
                    type="email"
                    // label="Main POC Email"
                    name="main_poc_email"
                    id="main_poc_email"
                    value={CompanyInfo.main_poc_email}
                    onChange={handleCompanyInfo}
                    readOnly={isCompanyDetailsEdit ? false : true}
                    className="rounded-md px-4 py-3 focus:outline-none"
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className=" flex w-full flex-col rounded-md">
                  <label htmlFor="main_poc_email">Main POC Email</label>
                  <input
                    type="tel"
                    label="Main POC Phone"
                    name="main_poc_phone"
                    value={CompanyInfo.main_poc_phone}
                    onChange={handleCompanyInfo}
                    readOnly={isCompanyDetailsEdit ? false : true}
                    className="rounded-md px-4 py-3 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
        {isCompanyDetailsEdit && (
          <div className="my-4 flex w-full justify-end ">
            <div className="md:mr-8">
              <button
                className="mr-3 rounded-md bg-slate-400 px-4 py-2 text-gray-700"
                onClick={handleUpdateCompanyDetails}
              >
                save
              </button>
              <button
                className="rounded-md bg-slate-400 px-4 py-2 text-gray-700  "
                onClick={cancelCompanyDetailsEdit}
              >
                cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto w-95.5 max-w-5xl">
        <div className="mt-3 flex items-center justify-between px-3">
          <header>
            <h2 className="text-xl font-bold  tracking-wider text-orange-cus-1">
              Company Group
            </h2>
          </header>
          <div className="flex items-center">
            <div className="flex h-11 w-60 items-center  justify-start rounded-lg    bg-white pr-1 pl-4">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-3xl border-0  py-1 pl-2 focus:bg-none focus:outline-none focus:ring-0"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="mr-2 ml-[3%] md:mr-8">
              <button
                className="grid h-12 w-12 cursor-pointer place-content-center rounded-full border-none bg-orange-cus-1 shadow-lg duration-300 ease-in  hover:bg-orange-600 hover:shadow-xl"
                onClick={openAddUserToGroup}
              >
                <AddIcon sx={{ color: "white" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Group */}
      <div>
        {groupData.length === 0 ? (
          <div className="text-center "> No Group </div>
        ) : (
          groupData.map((item, index) => {
            return (
              <div
                key={item._id}
                onClick={() => setGroupId(item._id)}
                className="mx-auto w-95.5 max-w-5xl px-3"
              >
                <GroupAccordion
                  handleChange={handleChange}
                  expanded={expanded}
                  index={index}
                  users={item}
                  // anchorEl={anchorEl}
                  // handleMenuOpen={handleMenuOpen}
                  openDeleteModal={openDeleteModal}
                  // handleMenuClose={handleMenuClose}
                  groupIdRef={item._id}
                  group_name={item.group_name}
                  handleOpenAddMoreUserToGroup={handleOpenAddMoreUserToGroup}
                  handleDeleteGroup={handleDeleteGroup}
                />
              </div>
            );
          })
        )}
      </div>

      <AddUserToGroup
        isAddUserGroupOpen={isAddUserGroupOpen}
        closeAddUserToGroup={closeAddUserToGroup}
        company_id={company_id}
        personName={personName}
        handleNameChange={handleNameChange}
        getDetails={getDetails}
        selectedNames={item}
        groupName={groupName}
        setGroupName={setGroupName}
        addUserToCompany={addUserToCompany}
      />
      <AddMoreUserToGroup
        addMoreUserToGroup={addMoreUserToGroup}
        company_id={company_id}
        personName={personName}
        handleNameChange={handleNameChange}
        getDetails={getDetails}
        selectedNames={item}
        closeAddMoreUserToGroup={closeAddMoreUserToGroup}
        groupName={groupName}
        handleAddMoreUserToGroup={handleAddMoreUserToGroup}
      />
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleDelete={handleDelete}
        closeDeleteModal={closeDeleteModal}
      />
      <GroupDeleteModal
        isDeleteGroupOpen={isDeleteGroupOpen}
        closeIsDeleteGroupOpen={closeIsDeleteGroupOpen}
        DeleteGroup={DeleteGroup}
      />
    </div>
  );
};

export default CompanyGroup;
