import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import SettingsIcon from "@mui/icons-material/Settings";
import WalletTable from "../../../Component/Wallet/WalletTable";
import AddTotal from "../../../Component/Wallet/AddTotal";
import AddWallet from "../../../Component/Wallet/AddWallet";
import { useSelector } from "react-redux";
const Wallet = () => {
  const [age, setAge] = useState("");
  const [isTotalOpen, setIsTotalOpen] = useState(false);

  const [isWalletOpen, setIsWalletOpen] = useState(false);

  const [totalData, setTotalData] = useState({
    totalEarned: "",
    reputationScore: "",
    pentestCompleted: "",
  });

  const [walletDetail, setWalletDetail] = useState({
    pentest: "",
    award: "",
    status: "",
    hackerId: "",
  });
  // !Redux
  const { selectedCompany } = useSelector((state) => state?.company);
  const { userDetails, userRole } = useSelector((state) => state?.user);
  // * Functions

  const getCompanyId = (role) => {
    if (role === "superAdmin") {
      return selectedCompany;
    }
    return userDetails?.company_id._id;
  };

  //* COMPANY ID
  const company_id = getCompanyId(userRole);
  console.log(company_id);
  const handleTotalChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setTotalData({ ...totalData, [name]: value });
  };

  const handleWalletChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setWalletDetail({ ...walletDetail, [name]: value });
  };
  const openIsWalletOpen = () => {
    setIsWalletOpen(true);
  };
  const closeIsWalletOpen = () => {
    setIsWalletOpen(false);
  };

  const openTotalModal = () => {
    setIsTotalOpen(true);
  };

  const closeTotalModal = () => {
    setIsTotalOpen(false);
    setTotalData({
      ...totalData,
      totalEarned: "",
      reputationScore: "",
      pentestCompleted: "",
    });
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const submitTotal = (e) => {
    e.preventDefault();
    console.log(totalData);
    closeTotalModal();
  };

  return (
    <div>
      <div className=" max-w-2xl mx-auto">
        <FormControl sx={{ m: 1, minWidth: 80 }} fullWidth>
          <InputLabel id="demo-simple-select-autowidth-label">
            Search security research role
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="Search security research role"
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="mt-4  px-[5%]">
        <div className="min-w-[500px] overflow-x-auto">
          <div className="w-full flex justify-end items-center gap-3 mb-3">
            <button
              onClick={openTotalModal}
              className="px-10 py-2 bg-primary-btn rounded-md text-white tracking-wider "
            >
              Edit
            </button>
            <button
              onClick={openTotalModal}
              className="px-10 py-2 bg-primary-btn rounded-md text-white tracking-wider "
            >
              Add
            </button>
          </div>
          <div className="grid grid-cols-9 gap-x-2 items-center">
            <div className="col-span-3  text-center">
              <div className="max-w-[250px] ">
                <h1 className="text-8xl mt-2">$XX</h1>
                <h4 className="text-2xl">Total Earned</h4>
              </div>
            </div>
            <div className="col-span-3  text-center relative">
              <h1 className="text-8xl mt-2">X</h1>
              <h4 className="text-2xl">Reputation Score</h4>
            </div>
            <div className="col-span-3   text-center relative">
              <h1 className="text-8xl mt-2">XX</h1>
              <h4 className="text-2xl">Pentest Completed</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mt-8 px-[5%]">
        <div className="pr-3">
          <button
            type="button"
            className=" px-10 py-2 bg-primary-btn text-white rounded-md  tracking-wider"
            onClick={openIsWalletOpen}
          >
            Add
          </button>
        </div>
      </div>
      <div className="px-[5%] mt-3 mb-4">
        <WalletTable />
      </div>
      <AddTotal
        isTotalOpen={isTotalOpen}
        closeTotalModal={closeTotalModal}
        totalData={totalData}
        handleTotalChange={handleTotalChange}
        submitTotal={submitTotal}
      />
      <AddWallet
        isWalletOpen={isWalletOpen}
        openIsWalletOpen={openIsWalletOpen}
        closeIsWalletOpen={closeIsWalletOpen}
        handleWalletChange={handleWalletChange}
        walletDetail={walletDetail}
      />
    </div>
  );
};

export default Wallet;
