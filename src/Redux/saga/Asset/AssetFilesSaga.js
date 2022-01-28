import Axios from "../../../Service/axiosInstance";
import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";

export function* AddFilesSaga(action) {
  try {
    const { assetId, formdata } = action.payload;
    let response = yield call(
      Axios.post,
      `${CONFIG.assetTabs}/${assetId}/uploadFile`,
      formdata
    );
    if (response && response.data?.status === 1) {
      console.log(response, "files");
      yield put(actions.addFilesSuccess("Added successfully"));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addFilesError(error.response.data.message));
  }
}

export function* GetFilesSaga(action) {
  try {
    const { assetId, filesPageNumber } = action.payload;
    let response = yield call(
      Axios.get,
      `${CONFIG.assetTabs}/${assetId}/files/${filesPageNumber}`
    );
    if (response && response.data?.status === 1) {
      console.log(response, "files");
      yield put(actions.getAssetFilesSuccess(response.data.data));
    }
  } catch (error) {
    console.log(error.response.data);
    yield put(actions.getAssetFilesError(error.response.data.message));
  }
}
