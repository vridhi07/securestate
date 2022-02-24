import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import SettingsIcon from "@mui/icons-material/Settings";
import WalletTable from "../../../Component/Wallet/WalletTable";
import AddTotal from "../../../Component/Wallet/AddTotal";
import AddWallet from "../../../Component/Wallet/AddWallet";
import FilterOption from "../../../Component/Common/FilterOption";
import { useSelector, useDispatch } from "react-redux";
import * as roles from "../../../constantData/Roles";
import * as action from "../../../Redux/action";
const Wallet = () => {
  // const [age, setAge] = useState(top100Films[0]);
  const [isTotalOpen, setIsTotalOpen] = useState(false);

  const [isWalletOpen, setIsWalletOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [totalData, setTotalData] = useState({
    totalEarned: "",
    reputationScore: "",
    pentestCompleted: "",
  });

  const [walletDetail, setWalletDetail] = useState({
    pentest: "",
    award: "",
    status: "",
  });

  const [isTotalEdit, setIsTotalEdit] = useState(false);
  const [hackerId, setHackerId] = useState("");
  // console.log(hackerId);
  const [page, setPage] = useState(1);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  const [selectedId, setSelectedId] = useState(null);
  // const [inputValue, setInputValue] = useState("");
  // console.log(isTotalEdit);
  // !Redux
  const dispatch = useDispatch();
  // const { selectedCompany } = useSelector((state) => state?.company);
  const { userDetails, userRole } = useSelector((state) => state?.user);
  const { AllPentest, allHacker, walletTotals, isLoading, walletDetails } =
    useSelector((state) => state.wallet);
  const { selectedCompany } = useSelector((state) => state?.company);
  // * Functions

  //* COMPANY ID
  // const company_id = getCompanyId(userRole);
  const getCompanyId = (role) => {
    if (role === "superAdmin") {
      return selectedCompany;
    }
    return userDetails?.company_id._id;
  };

  const company_id = getCompanyId(userRole);
  // console.log(company_id);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleTotalChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTotalData({ ...totalData, [name]: value });
  };

  const handleWalletChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "award") {
      value = e.target.value.replace(/\D/, "");
      // console.log(value, "I want number");
    }

    setWalletDetail({ ...walletDetail, [name]: value });
  };
  const openIsWalletOpen = () => {
    setIsWalletOpen(true);
  };

  const closeIsWalletOpen = () => {
    setIsWalletOpen(false);
    setWalletDetail({
      ...walletDetail,
      pentest: "",
      award: "",
      status: "",
      hackerId: "",
    });
    if (isEdit) {
      setIsEdit(false);
    }
    setSelectedId(null);
  };

  const openEdit = (id) => {
    const SingleData = walletDetails.find((item) => item._id === id);
    console.log(SingleData);
    setWalletDetail({
      ...walletDetail,
      pentest: SingleData?.pentestId?._id || "",
      award: SingleData.award,
      status: SingleData.status,
    });
    openIsWalletOpen();
    // console.log(id);
    setIsEdit(true);
    setSelectedId(id);
  };

  const openTotalModal = () => {
    setIsTotalOpen(true);
  };

  const closeTotalModal = () => {
    setIsTotalOpen(false);
    if (isTotalEdit) {
      setIsTotalEdit(false);
    }
    setTotalData({
      ...totalData,
      totalEarned: "",
      reputationScore: "",
      pentestCompleted: "",
    });
  };

  const handleEdit = () => {
    setIsTotalEdit(true);
    setTotalData({
      ...totalData,
      totalEarned: walletTotals?.totalEarned,
      reputationScore: walletTotals?.reputationScore,
      pentestCompleted: walletTotals?.totalHours,
    });
    openTotalModal();
  };

  const submitTotal = (e) => {
    e.preventDefault();
    console.log(totalData);
    if (!isTotalEdit) {
      const data = {
        totalEarned: totalData.totalEarned,
        totalHours: totalData.pentestCompleted,
        reputationScore: totalData.reputationScore,
        userId: hackerId,
      };
      dispatch(action.addWalletTotalRequest({ data, hackerId: hackerId }));
    }
    // reputationScore;
    if (isTotalEdit) {
      const data = {
        totalEarned: totalData.totalEarned,
        totalHours: totalData.pentestCompleted,
        reputationScore: totalData.reputationScore,
        id: walletTotals?._id,
      };
      dispatch(action.editWalletTotalRequest({ data, hackerId: hackerId }));
    }
    closeTotalModal();
    // setIsTotalEdit(false);
  };
  const onSubmitWallet = (e) => {
    e.preventDefault();

    if (!isEdit) {
      const data = {
        pentestId: walletDetail.pentest,
        award: walletDetail.award,
        status: walletDetail.status,
        userId: hackerId,
      };
      console.log(data);
      dispatch(action.addWalletRequest({ data, hackerId, page }));
    }
    if (isEdit) {
      console.log("edit");
      const data = {
        pentestId: walletDetail.pentest,
        award: walletDetail.award,
        status: walletDetail.status,
        walletId: selectedId,
      };
      console.log(data);
      dispatch(action.editWalletRequest({ data, page, hackerId }));
    }
    closeIsWalletOpen();
  };

  // call pentest for admin
  useEffect(() => {
    if (company_id) {
      dispatch(action.allPentestWithCompanyRequest({ company_id }));
      dispatch(action.allHackerWithCompanyRequest({ company_id }));
    }
  }, [company_id]);

  useEffect(() => {
    if (
      userRole === roles.admin ||
      (userRole === roles.superAdmin && allHacker)
    ) {
      setHackerId(allHacker[0]?._id);
    } else if (userRole === roles.hacker && userDetails?._id) {
      setHackerId(userDetails?._id);
    }
  }, [allHacker, company_id, userRole]);

  useEffect(() => {
    if (hackerId) {
      dispatch(action.getWalletTotalRequest({ hackerId }));
    }
  }, [hackerId]);

  // console.log(allHacker[0]?._id);
  const getSelectOption = (role) => {
    if (role === roles.admin || role === roles.superAdmin) {
      return true;
    }
    return false;
  };

  let selectOption;
  if (userRole) {
    selectOption = getSelectOption(userRole);
  }

  let filterAccess;
  let superAdminAccess;
  if (userRole) {
    filterAccess = roles.walletAdminFilter(userRole);
    superAdminAccess = roles.showFilter(userRole);
  }

  return (
    <div>
      {superAdminAccess && (
        <div className="w-full rounded-lg bg-white py-10 pl-7 shadow-sm ">
          <div className="flex max-w-lg items-center justify-start gap-4">
            {filterAccess && (
              <div className="w-full">
                <FilterOption />
              </div>
            )}

            {selectOption && hackerId && (
              <FormControl fullWidth sx={{ mt: 5 }}>
                <InputLabel id="demo-simple-select-label">
                  Security Research Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={hackerId}
                  label="Security Research Role"
                  onChange={(e) => setHackerId(e.target.value)}
                  required
                  disabled={isLoading}
                >
                  {allHacker.map((item) => {
                    return (
                      <MenuItem key={item._id} value={item._id}>
                        {item.user_name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            )}
          </div>
        </div>
      )}

      <div className="mt-4  px-[5%]">
        <div className="min-w-[500px] overflow-x-auto">
          {selectOption && (
            <div className="mb-3 flex w-full items-center justify-end gap-3">
              <button
                onClick={handleEdit}
                className="hover rounded-md bg-primary-btn px-10 py-2 tracking-wider text-white "
                disabled={isLoading}
              >
                Edit
              </button>
              <button
                onClick={openTotalModal}
                className="hover rounded-md bg-primary-btn px-10 py-2 tracking-wider text-white "
                disabled={isLoading}
              >
                Add
              </button>
            </div>
          )}

          {walletTotals && (
            <div className="grid grid-cols-9 items-center gap-x-2">
              <div className="col-span-3  text-center">
                <div className="max-w-[250px] ">
                  <h1 className="mt-2 text-3xl">
                    ${walletTotals?.totalEarned}
                  </h1>
                  <h4 className="text-2xl">Total Earned</h4>
                </div>
              </div>
              <div className="relative  col-span-3 text-center">
                <h1 className="mt-2 text-3xl">
                  {walletTotals?.reputationScore}
                </h1>
                <h4 className="text-2xl">Reputation Score</h4>
              </div>
              <div className="relative   col-span-3 text-center">
                <h1 className="mt-2 text-3xl">{walletTotals?.totalHours}</h1>
                <h4 className="text-2xl">Total Hours</h4>
              </div>
            </div>
          )}
        </div>
      </div>
      {selectOption && (
        <div className="mt-8 flex items-center justify-end px-[5%]">
          <div className="pr-3">
            <button
              type="button"
              className=" hover rounded-md bg-primary-btn px-10 py-2 tracking-wider  text-white"
              onClick={openIsWalletOpen}
              disabled={isLoading}
            >
              Add
            </button>
          </div>
        </div>
      )}

      <div className="mt-3 mb-4 px-[5%]">
        <WalletTable
          hackerId={hackerId}
          // rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          // handleChange={}
          // handleChangeRowsPerPage={handleChangeRowsPerPage}
          superAdminAccess={superAdminAccess}
          openEdit={openEdit}
        />
      </div>
      <AddTotal
        isTotalOpen={isTotalOpen}
        closeTotalModal={closeTotalModal}
        totalData={totalData}
        handleTotalChange={handleTotalChange}
        submitTotal={submitTotal}
        isTotalEdit={isTotalEdit}
      />
      <AddWallet
        isWalletOpen={isWalletOpen}
        openIsWalletOpen={openIsWalletOpen}
        closeIsWalletOpen={closeIsWalletOpen}
        handleWalletChange={handleWalletChange}
        walletDetail={walletDetail}
        onSubmitWallet={onSubmitWallet}
        AllPentest={AllPentest}
        // isError={isError}
        isEdit={isEdit}
      />
    </div>
  );
};

export default Wallet;
