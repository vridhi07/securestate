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
      // console.log(response);
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

export function* addMoreUserToGroupSaga(action) {
  try {
    const { id, data } = action.payload;
    // console.log(action.payload);
    let response = yield call(axios.post, CONFIG.addMoreUserToGroup, data);
    if (response && response.data?.status === 1) {
      yield put(actions.addMoreUserToGroupSuccess(response?.data?.data));
      yield put(actions.getGroupListRequest({ id }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addMoreUserToGroupError(error?.response?.data?.message));
  }
}

export function* deleteUserFromGroup(action) {
  try {
    const { id, groupId, userId } = action.payload;
    // console.log(action.payload);
    let response = yield call(axios.delete, CONFIG.deleteUserFromGroup, {
      data: { groupId, userId },
    });
    if (response && response.data?.status === 1) {
      yield put(actions.deleteUserFromGroupSuccess("Successfully Deleted"));
      yield put(actions.getGroupListRequest({ id }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.deleteUserFromGroupError(error?.response?.data?.message));
  }
}

export function* deleteGroupSaga(action) {
  try {
    const { id, groupId } = action.payload;
    // console.log(action.payload);
    let response = yield call(axios.delete, CONFIG.deleteGroup, {
      data: { groupId },
    });
    if (response && response.data?.status === 1) {
      yield put(actions.deleteGroupSuccess("Successfully Deleted"));
      yield put(actions.getGroupListRequest({ id }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.deleteUserFromGroupError(error?.response?.data?.message));
  }
}
