import { put, call } from "redux-saga/effects";
import { LoginSuccess, LoginError } from "../../action";
import axios from "axios";
const setToken = (token) => {
  return localStorage.setItem("token", token);
};
export function* LoginSaga(action) {
  try {
    let url = `${process.env.REACT_APP_BASE_URL}user/login`;

    let response = yield call(axios.post, `${url}`, action.payload);
    if (response && response?.data?.status === 1) {
      yield call(setToken, response?.data?.token);
      yield put(LoginSuccess("login success"));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(LoginError(error?.response?.data?.message));
  }
}
