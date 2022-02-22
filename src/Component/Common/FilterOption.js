import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as Roles from "../../constantData/Roles";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../Redux/action/index";
import getFilterOPtion from "../../constantData/FilterOption";
import { useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const FilterOption = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { companyDetails, selectedName } = state?.company;
  const { userDetails } = state?.user;

  const handleChange = (e) => {
    let value = e.target.value;
    dispatch(action.handleCompanyNameChange(value));
  };
  useEffect(() => {
    if (userDetails?.role !== Roles.superAdmin) {
      dispatch(
        action.handleCompanyNameChange(userDetails?.company_id?.company_name)
      );
    }
  }, [userDetails?.role]);
  let Role = getFilterOPtion(userDetails?.role);

  return (
    <div className="flex w-full justify-center">
      <FormControl fullWidth>
        {/* <InputLabel id="demo-simple-select-label">Select Company</InputLabel> */}
        <label htmlFor="filterOptions" className="pb-3 text-lg text-[#6E6E6E] ">
          Select Company
        </label>
        <Select
          aria-label="search select "
          value={selectedName}
          onChange={handleChange}
          // label="Select Company"
          id="filterOptions"
          disabled={Role}
          IconComponent={() => <KeyboardArrowDownIcon />}
        >
          {userDetails?.role === Roles.superAdmin ? (
            companyDetails &&
            companyDetails?.map((item) => {
              return (
                <MenuItem
                  value={item.company_name}
                  key={item._id}
                  onClick={() => dispatch(action.GetSelectedCompany(item._id))}
                >
                  {item.company_name}
                </MenuItem>
              );
            })
          ) : (
            <MenuItem value={userDetails?.company_id?.company_name}>
              {userDetails?.company_id?.company_name}
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterOption;
