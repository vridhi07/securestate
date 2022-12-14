import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";
import axios from "axios";
export function* AddFilesSaga(action) {
  try {
    const { assetId, formdata, filesPageNumber } = action.payload;
    let response = yield call(
      axios.post,
      `${CONFIG.assetTabs}/${assetId}/uploadFile`,
      formdata
    );
    if (response && response.data?.status === 1) {
      // console.log(response, "files");
      yield put(actions.addFilesSuccess("Added successfully"));
      yield put(actions.getAssetFilesRequest({ assetId, filesPageNumber }));
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
      axios.get,
      `${CONFIG.assetTabs}/${assetId}/files/${filesPageNumber}`
    );
    if (response && response.data?.status === 1) {
      // console.log(response, "files");
      yield put(actions.getAssetFilesSuccess(response.data.data));
    }
  } catch (error) {
    console.log(error.response.data);
    yield put(actions.getAssetFilesError(error.response.data.message));
  }
}

export function* DeleteFileSaga(action) {
  try {
    const { assetId, fileId, filesPageNumber } = action.payload;
    console.log(filesPageNumber);
    let response = yield call(
      axios.delete,
      `${CONFIG.assetTabs}/${assetId}/deleteFile`,
      {
        data: { fileId },
      }
    );
    if (response && response.data?.status === 1) {
      // console.log(response, "files");
      yield put(actions.deleteFilesSuccess("delete Successfully"));
      yield put(actions.getAssetFilesRequest({ assetId, filesPageNumber }));
    }
  } catch (error) {
    // console.log(error.response.data);
    yield put(actions.deleteFilesError(error.response.data.message));
  }
}
