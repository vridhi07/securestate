import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../Redux/action/index";
const FilterOption = () => {
  const state = useSelector((state) => state);
  const { userDetails } = state?.user;

  const [Company, setSelectedCompany] = useState("");
  // const [selectId, setSelectId] = useState(null);
  // console.log(selectId);
  const dispatch = useDispatch();
  const getID = useRef(null);
  const { companyDetails } = state?.company;
  // let companyName = companyDetails.find(
  //   (item) => item._id === userDetails?.company_id._id
  // );
  // console.log(companyName);

  useEffect(() => {
    setSelectedCompany(userDetails?.company_id.company_name);
  }, []);

  const handleChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  useEffect(() => {
    dispatch(action.CompanyRequest());
    dispatch(action.GetSelectedCompany(userDetails?.company_id._id));
  }, []);
  return (
    <div className="flex justify-center">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Company</InputLabel>
        <Select
          aria-label="search select "
          value={Company}
          onChange={handleChange}
          label="Select Company"
          ref={getID}
        >
          {companyDetails &&
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
            })}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterOption;
