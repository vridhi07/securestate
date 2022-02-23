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
    const { data, pageId, historyPageNumber } = action.payload;
    let response = yield call(
      axios.post,
      `${CONFIG.assetTabs}/${pageId}/addEvent`,
      data
    );
    if (response && response?.data?.status === 1) {
      // console.log(response, "addhistory");
      yield put(actions.AddHistorySuccess("Successfully Added"));
      yield put(actions.GetHistoryRequest({ pageId, historyPageNumber }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.GetHistoryError(error.response.data.message));
  }
}

export function* deleteHistorySaga(action) {
  try {
    const { pageId, historyPageNumber, selectedId } = action.payload;
    let response = yield call(
      axios.delete,
      `assets/deleteAssetHistory/${pageId}`,
      {
        data: {
          eventId: selectedId,
        },
      }
    );
    if (response && response?.data?.status === 1) {
      // console.log(response, "addhistory");
      yield put(actions.deleteHistorySuccess("Successfully deleted"));
      yield put(actions.GetHistoryRequest({ pageId, historyPageNumber }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.deleteHistoryError(error.response.data.message));
  }
}

export function* updateHistorySaga(action) {
  try {
    const { data, pageId, historyPageNumber } = action.payload;
    let response = yield call(
      axios.put,
      `/assets/updateAssetHistory/${pageId}`,
      data
    );
    if (response && response?.data?.status === 1) {
      // console.log(response, "addhistory");
      yield put(actions.updateHistorySuccess("Successfully deleted"));
      yield put(actions.GetHistoryRequest({ pageId, historyPageNumber }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.updateHistoryError(error.response.data.message));
  }
}
