import React, { useEffect } from "react";
import Alert from "@mui/material/Alert";
import * as actions from "../../Redux/action/index";
import { useSelector, useDispatch } from "react-redux";
const AuthAlert = () => {
  const login = useSelector((state) => state.Login);
  console.log(login);
  const dispatch = useDispatch();
  useEffect(() => {
    let timeOut = setTimeout(() => {
      dispatch(actions.ResetLoginError());
    }, 4000);
    return () => clearTimeout(timeOut);
  }, [login.isError.msg]);
  return (
    <div>
      <Alert severity="error">{login.isError.msg}</Alert>
    </div>
  );
};

export default AuthAlert;
