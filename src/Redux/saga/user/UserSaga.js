import axios from "axios";
import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";

export function* GetUserDetails() {
  try {
    let response = yield call(axios.get, CONFIG.getUserDetails);

    if (response && response?.data?.status === 1) {
      // console.log(response.data);
      yield put(actions.UserDetailsSuccess(response?.data?.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.UserDetailsError(error?.response?.data?.message));
  }
}
export function* updateUserSaga() {
  try {
    let response = yield call(axios.put, CONFIG.updateUser);

    if (response && response?.data?.status === 1) {
      // console.log(response.data);
      yield put(actions.updateUserRequest("success "));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.updateUserError(error?.response?.data?.message));
  }
}
