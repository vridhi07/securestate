import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";
import axios from "axios";
export function* GetHistorySaga(action) {
  try {
    const { pageId, historyPageNumber } = action.payload;
    let response = yield call(
      axios.get,
      `${CONFIG.assetTabs}/${pageId}/history/${historyPageNumber}`
    );
    if (response && response.data?.status === 1) {
      // console.log(response, "history");
      yield put(actions.GetHistorySuccess(response.data.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.GetHistoryError(error.response.data.message));
  }
}
export function* AddHistoryAction(action) {
  try {
    const { data, pageId } = action.payload;
    let response = yield call(
      axios.post,
      `${CONFIG.assetTabs}/${pageId}/addEvent`,
      data
    );
    if (response && response?.data?.status === 1) {
      // console.log(response, "addhistory");
      yield put(actions.AddHistorySuccess("Successfully Added"));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.GetHistoryError(error.response.data.message));
  }
}
