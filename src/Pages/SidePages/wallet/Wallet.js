import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SettingsIcon from "@mui/icons-material/Settings";
import WalletTable from "../../../Component/Wallet/WalletTable";
const Wallet = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
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
          <div className="grid grid-cols-9 gap-x-2 items-center">
            <div className="col-span-3  text-center">
              <div className="flex justify-end items-center">
                <button>
                  <SettingsIcon sx={{ color: "#9F9F9F" }} />
                </button>
              </div>

              <div className="max-w-[250px] ">
                <h1 className="text-8xl mt-2">$XX</h1>
                <h4 className="text-2xl">Total Earned</h4>
              </div>
            </div>
            <div className="col-span-3  text-center relative">
              <div className="flex justify-end items-center">
                <button>
                  <SettingsIcon sx={{ color: "#9F9F9F" }} />
                </button>
              </div>
              <h1 className="text-8xl mt-2">X</h1>
              <h4 className="text-2xl">Reputation Score</h4>
            </div>
            <div className="col-span-3   text-center relative">
              <div className="flex justify-end items-center">
                <button>
                  <SettingsIcon sx={{ color: "#9F9F9F" }} />
                </button>
              </div>
              <h1 className="text-8xl mt-2">XX</h1>
              <h4 className="text-2xl">Total Earned</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mt-8 px-[5%]">
        <div className="pr-3">
          <button
            type="button"
            className=" px-10 py-2 bg-[#F7F6F6] text-[#454545] border border-black tracking-wider"
          >
            Add
          </button>
        </div>
      </div>
      <div className="px-[5%] mt-3 mb-4">
        <WalletTable />
      </div>
    </div>
  );
};

export default Wallet;
