import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   "Oliver Hansen",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
// ];

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = React.useState([]);
  const { users } = useSelector((state) => state?.users);
  const [item, setItems] = React.useState([]);
  console.log(item);
  // console.log(personName);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const getDetails = (companyId, id, companyName) => {
    // let data = [];
    let newData = { companyId, id, companyName };

    setItems([...item, newData]);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select User</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Select User" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {users &&
            users.map((item) => (
              <MenuItem
                key={item._id}
                value={item.name}
                onClick={() =>
                  getDetails(
                    item._id,
                    item?.company_id?._id,
                    item?.company_id.company_name
                  )
                }
              >
                <Checkbox checked={personName.indexOf(item.name) > -1} />
                <ListItemText primary={item.name} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
