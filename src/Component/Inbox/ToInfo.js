import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import * as action from "../../Redux/action";
import { useEffect } from "react";

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

export default function MultipleSelectCheckmarks({
  selectedEmails,
  setSelectedEmails,
}) {
  const userList = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(action.getUsersRequest());
  }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedEmails(typeof value === "string" ? value.split(",") : value);
  };

  // const [personName, setPersonName] = React.useState([]);

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };

  const getUsersNames = (selectedList) => {
    return userList?.users
      ?.filter((val) => selectedList.includes(val._id))
      ?.map((val) => {
        if (selectedList.includes(val._id)) {
          return val.email;
        }
      });
  };
  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">To</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selectedEmails}
          onChange={handleChange}
          input={<OutlinedInput label="To" />}
          renderValue={(selected) => getUsersNames(selected).join(", ")}
          MenuProps={MenuProps}
        >
          {userList?.users.map(({ _id, email }) => (
            <MenuItem key={_id} value={_id}>
              <Checkbox checked={selectedEmails.indexOf(_id) > -1} />
              <ListItemText primary={email} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

{
  /* <FormControl variant="standard" fullWidth>
        <InputLabel id="email">Tag</InputLabel>
        <Select
          labelId="email"
          id="email"
          multiple
          value={selectedEmails}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => getUsersNames(selected).join(", ")}
          MenuProps={MenuProps}
        >
          {userList?.users.map(({ _id, email }) => (
            <MenuItem key={_id} value={_id}>
              <Checkbox checked={selectedEmails.indexOf(_id) > -1} />
              <ListItemText primary={email} />
            </MenuItem>
          ))}
        </Select>
      </FormControl> */
}
