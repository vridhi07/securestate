import Axios from "../../Service/axiosInstance";
import { CONFIG } from "../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../action/index";

export function* GetSBOMSaga(action) {
  try {
    const { assetId, SboMPageNumber } = action.payload;
    let response = yield call(
      Axios.get,
      `${CONFIG.assetTabs}/${assetId}/sbom/${SboMPageNumber}`
    );
    if (response && response.data?.status === 1) {
      // console.log(response, "history");
      yield put(actions.GetSBOMSuccess(response.data.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.GetSBOMError(error.response.data.message));
  }
}

export function* AddSBOMSaga(action) {
  try {
    const { assetId, data } = action.payload;
    let response = yield call(
      Axios.post,
      `${CONFIG.assetTabs}/${assetId}/addComponent`,
      data
    );
    if (response && response.data?.status === 1) {
      console.log(response, "history");
      yield put(actions.addSbomSuccess("Successfully added"));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addSbomError(error.response.data.message));
  }
}
