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

export default function MultipleSelectCheckmarks({
  company_id,
  personName,
  handleNameChange,
  getDetails,
  selectedNames,
}) {
  // const [personName, setPersonName] = React.useState([]);
  const { users } = useSelector((state) => state?.users);
  const { userDetails } = useSelector((state) => state?.user);
  let newUser;
  if (users) {
    newUser = users.filter((item) => item?._id !== userDetails?._id);
  }

  // console.log(newUser);

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select User</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleNameChange}
          input={<OutlinedInput label="Select User" />}
          renderValue={(selected) =>
            newUser
              .filter((item) => selected.includes(item._id))
              .map((record) => record.name)
              .join(", ")
          }
          MenuProps={MenuProps}
          required
          sx={{ bgcolor: "white" }}
        >
          {newUser &&
            newUser.map((item) => (
              <MenuItem
                key={item._id}
                value={item._id}
                onClick={() => getDetails(item._id)}
              >
                <Checkbox checked={selectedNames?.indexOf(item._id) > -1} />
                <ListItemText primary={item.name} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}
