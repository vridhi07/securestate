import { put, call } from "redux-saga/effects";
import { LoginSuccess, LoginError } from "../action";
import axios from "axios";

export function* LoginSaga(action) {
  try {
    let url = `${process.env.REACT_APP_BASE_URL}user/login`;

    let response = yield call(axios.post, `${url}`, action.payload);
    if (response && response.data?.status === 1) {
      // console.log(response.data,"uuuuu");
      localStorage.setItem("token", response.data.token);
      yield put(LoginSuccess("login success"));
    }
  } catch (error) {
    yield put(LoginError("invalid credentials"));
  }
}
