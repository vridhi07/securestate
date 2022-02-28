import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";
import axios from "axios";
export function* GetSBOMSaga(action) {
  try {
    const { assetId, SboMPageNumber } = action.payload;
    let response = yield call(
      axios.get,
      `${CONFIG.assetTabs}/sbom/${assetId}/${SboMPageNumber}`
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
      axios.post,
      `${CONFIG.assetTabs}/addComponent/${assetId}`,
      data
    );
    if (response && response.data?.status === 1) {
      // console.log(response, "history");
      yield put(actions.addSbomSuccess("Successfully added"));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addSbomError(error.response.data.message));
  }
}

export function* deleteSbomSaga(action) {
  try {
    const { assetId, fileId } = action.payload;
    // console.log(assetId, fileId);
    let response = yield call(
      axios.delete,
      `${CONFIG.assetTabs}/${assetId}/deleteComponent`,
      {
        data: {
          fileId,
        },
      }
    );
    if (response && response.data?.status === 1) {
      // console.log(response, "history");
      yield put(actions.deleteSbomSuccess("Successfully added"));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.deleteSbomError(error.response.data.message));
  }
}
export function* updateSbomSaga(action) {
  try {
    const { data, SboMPageNumber, assetId } = action.payload;

    let response = yield call(
      axios.put,
      `${CONFIG.assetTabs}/updateSbom`,
      data
    );
    if (response && response.data?.status === 1) {
      // console.log(response, "update");
      yield put(actions.updateSBOMSuccess("Successfully updated"));
      yield put(actions.GetSBOMRequest({ assetId, SboMPageNumber }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.updateSBOMSuccess(error.response.data.message));
  }
}
