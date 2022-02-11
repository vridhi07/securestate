import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";
import * as action from "../../Redux/action";
const UserAlert = () => {
  const dispatch = useDispatch();

  const { Message } = useSelector((state) => state?.users);

  React.useEffect(() => {
    console.log("i was called");
    let timeout = setTimeout(() => {
      dispatch(action.resetAlertUsers());
    }, 5000);
    return () => clearTimeout(timeout);
  }, [Message]);

  return (
    <div className="mx-auto max-w-lg">
      <Alert severity="error">{Message}</Alert>
    </div>
  );
};

export default UserAlert;
