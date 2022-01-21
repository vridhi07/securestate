import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../Redux/action/index";
const FilterOption = () => {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectId, setSelectId] = useState(null);
  const dispatch = useDispatch();
  const getID = useRef(null);
  const company = useSelector((state) => state?.company);

  const { companyDetails } = company;
  console.log(selectId);
  const getSelectedCompanyData = (id) => {
    return (
      companyDetails &&
      companyDetails.map((item) => item).filter((item) => item._id === id)[0]
    );
  };

  const handleChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  useEffect(() => {
    if (selectedCompany) {
      dispatch(action.GetSelectedCompany(getSelectedCompanyData(selectId)));
    }
  }, [selectedCompany]);

  useEffect(() => {
    dispatch(action.CompanyRequest());
  }, []);

  return (
    <div className="flex justify-center">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Company</InputLabel>
        <Select
          aria-label="search select "
          value={selectedCompany}
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
                  onClick={() => setSelectId(item._id)}
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
