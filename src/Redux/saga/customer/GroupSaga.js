import axios from "axios";
import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";

export function* GetGroupList(action) {
  try {
    const { id } = action.payload;

    // console.log(action.payload);
    let response = yield call(axios.get, `${CONFIG.getGroupList}/${id}`);
    if (response && response.data?.status === 1) {
      yield put(actions.getGroupListSuccess(response?.data?.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.getGroupListError(error?.response?.data?.message));
  }
}

export function* addUserToGroup(action) {
  try {
    const { id, data } = action.payload;
    // console.log(action.payload);
    let response = yield call(axios.post, CONFIG.addUserToGroup, data);
    if (response && response.data?.status === 1) {
      yield put(actions.addUserToGroupSuccess(response?.data?.data));
      yield put(actions.getGroupListRequest({ id }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addUserToGroupError(error?.response?.data?.message));
  }
}
