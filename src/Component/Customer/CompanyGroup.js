import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import DeleteModal from "../Common/DeleteModal";
import AddUserToGroup from "./AddUserToGroup";
import * as actions from "../../Redux/action";
import GroupAccordion from "./GroupAccordion";
import AddMoreUserToGroup from "./AddMoreUserToGroup";
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

  const [anchorEl, setAnchorEl] = useState(null);
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
  };

  const handleDeleteGroup = (id) => {
    console.log(id, "GroupId");
    setGroupId(id);
    openIsDeleteGroupOpen();
  };

  // console.log(selectedId, "userId");
  // console.log(groupId, "groupId");
  const handleOpenAddMoreUserToGroup = (id, name) => {
    console.log(id, name);
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

  const openDeleteModal = () => {
    setIsDeleteModal(true);
    handleMenuClose();
  };

  const closeDeleteModal = () => {
    setIsDeleteModal(false);
  };

  const handleDelete = () => {
    console.log("deleted");
    dispatch(
      actions.deleteUserFromGroupRequest({
        id: company_id,
        groupId: groupId,
        userId: selectedId,
      })
    );
    closeDeleteModal();
  };

  const handleMenuOpen = (e, id) => {
    // consol`e.log(id);
    setAnchorEl(e.currentTarget);
    setSelectedId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
      const div = focusRef.current;
      const input = div.children[1].children[0];
      input.focus();
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
  const addUserToCompany = () => {
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
    <div className=" gap-y-[300%] grid grid-cols-10 gap-x-4 h-20">
      {/* Company Info */}
      <div className=" col-span-10 lg:col-span-4 lg:mt-[3.8rem]">
        <div className="grid grid-cols-7 h-32">
          <div className="col-span-6 ">
            <form
              className="py-2 px-4 pr-8"
              onSubmit={(e) => handleUpdateCompanyDetails(e)}
            >
              <div className="flex flex-col">
                <TextField
                  type="text"
                  label="Company Name"
                  name="company_name"
                  value={CompanyInfo.company_name}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  ref={focusRef}
                  sx={{ mb: 2 }}
                  size="small"
                />
                <TextField
                  type="text"
                  label="Location"
                  name="location"
                  value={CompanyInfo.location}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  sx={{ mb: 2 }}
                  size="small"
                />
                <TextField
                  type="text"
                  label="Website"
                  name="website"
                  value={CompanyInfo.website}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  sx={{ mb: 2 }}
                  size="small"
                />
                <TextField
                  type="text"
                  label="Main POC"
                  name="main_poc"
                  value={CompanyInfo.main_poc}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  sx={{ mb: 2 }}
                  size="small"
                />
                <TextField
                  type="email"
                  label="Main POC Email"
                  name="main_poc_email"
                  value={CompanyInfo.main_poc_email}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  sx={{ mb: 2 }}
                  size="small"
                />
                <TextField
                  type="tel"
                  label="Main POC Phone"
                  name="main_poc_phone"
                  value={CompanyInfo.main_poc_phone}
                  onChange={handleCompanyInfo}
                  className="border border-gray-600 rounded-md px-2 py-1 outline-none"
                  inputProps={{
                    readOnly: isCompanyDetailsEdit ? false : true,
                  }}
                  sx={{ mb: 2 }}
                  size="small"
                />
              </div>
              {isCompanyDetailsEdit && (
                <div className="mt-3">
                  <button
                    className="px-4 py-2 bg-slate-400 text-gray-700 mr-3 rounded-md"
                    type="submit"
                  >
                    save
                  </button>
                  <button
                    className="px-4 py-2 bg-slate-400 text-gray-700 rounded-md  "
                    onClick={cancelCompanyDetailsEdit}
                  >
                    cancel
                  </button>
                </div>
              )}
            </form>
          </div>
          <div className="col-span-1  py-2">
            <button onClick={handleCompanyDetailsEdit}>
              <EditIcon />
            </button>
          </div>
        </div>
      </div>
      {/* Company Info End */}
      <div className="  col-span-10 lg:col-span-6">
        <div className="mt-3 flex justify-between items-center">
          <header>
            <h2 className="font-bold text-lg text-gray-700">Company Group</h2>
          </header>
          <div className="flex items-center">
            <div className="border px-1 border-gray-600  h-11 w-52  rounded-3xl flex items-center justify-start">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-1 pl-2  rounded-3xl border-0 focus:bg-none focus:outline-none focus:ring-0"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="md:mr-8 mr-2 ml-[3%]">
              <button
                className="w-12 h-12 ease-in duration-300 border-none rounded-full bg-orange-cus-1 grid place-content-center shadow-lg  cursor-pointer hover:shadow-xl"
                onClick={openAddUserToGroup}
              >
                <AddIcon sx={{ color: "white" }} />
              </button>
            </div>
          </div>
        </div>
        <div className=" mt-3  border border-gray-700 px-1 py-2 h-[317px] overflow-y-auto">
          <div className="min-h-[100%] flex flex-col py-2 ">
            {groupData.length === 0 ? (
              <div> No Group </div>
            ) : (
              groupData.map((item, index) => {
                return (
                  <div key={item._id} onClick={() => setGroupId(item._id)}>
                    <GroupAccordion
                      handleChange={handleChange}
                      expanded={expanded}
                      index={index}
                      users={item}
                      anchorEl={anchorEl}
                      handleMenuOpen={handleMenuOpen}
                      openDeleteModal={openDeleteModal}
                      handleMenuClose={handleMenuClose}
                      groupId={item._id}
                      group_name={item.group_name}
                      handleOpenAddMoreUserToGroup={
                        handleOpenAddMoreUserToGroup
                      }
                      handleDeleteGroup={handleDeleteGroup}
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
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
      />
      <DeleteModal
        isDeleteModalOpen={isDeleteModalOpen}
        handleDelete={handleDelete}
        closeDeleteModal={closeDeleteModal}
      />
    </div>
  );
};

export default CompanyGroup;
