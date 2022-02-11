import axios from "axios";
import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";

export function* GetUsersSaga() {
  try {
    let response = yield call(axios.get, CONFIG.getUsers);

    if (response && response?.data?.status === 1) {
      // console.log(response.data);
      yield put(actions.getUsersSuccess(response?.data?.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.getUsersError(error?.response?.data?.message));
  }
}

export function* AddUsersSaga(action) {
  try {
    let response = yield call(axios.post, CONFIG.addUsers, action.payload);

    if (response && response?.data?.status === 1) {
      // console.log(response.data);
      yield put(actions.addUsersSuccess("success"));
      yield put(actions.getUsersRequest());
    }
  } catch (error) {
    console.log(error.response?.data);
    yield put(actions.addUsersError(error.response?.data?.message));
  }
}

export function* DeleteUserSaga(action) {
  try {
    let response = yield call(
      axios.delete,
      `${CONFIG.deleteUsers}/${action.payload}`
    );

    if (response && response?.data?.status === 1) {
      // console.log(response.data);
      yield put(actions.deleteUsersSuccess("success"));
      yield put(actions.getUsersRequest());
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.deleteUsersError(error?.response?.data?.message));
  }
}
