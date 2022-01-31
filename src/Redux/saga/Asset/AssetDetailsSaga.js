import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";
import axios from "axios";
export function* AssetDetailsSaga(action) {
  try {
    console.log("was called");
    let response = yield call(
      axios.get,
      `${CONFIG.assetTabs}/${action.payload}`
    );
    if (response && response.data?.status === 1) {
      console.log(response, "files");
      yield put(actions.getAssetDetailsRequest("Added successfully"));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.getAssetDetailsError(error.response.data.message));
  }
}
