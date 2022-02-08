import { put, call } from "redux-saga/effects";

import {
  AssetSuccess,
  AssetError,
  AssetRequest,
  AddAssetSuccess,
  AddAssetError,
  DeleteAssetSuccess,
  DeleteAssetError,
  UpdateAssetSuccess,
  UpdateAssetError,
  getAllAssetListSuccess,
  getAllAssetListError,
} from "../../action";

import { CONFIG } from "../../../Service/CONFIG";

import axios from "axios";

export function* AssetSaga(action) {
  // console.log(action.payload);
  try {
    const { company_id, assetPageNumber } = action.payload;
    let response = yield call(
      axios.get,
      `${CONFIG.assets}/${company_id}/${assetPageNumber}`
      // { Authorization: `Bearer ${localStorage.getItem("token")}` }
    );
    if (response && response.data?.status === 1) {
      yield put(AssetSuccess(response.data.data));
    }
  } catch (error) {
    console.log(error);
    yield put(AssetError("invalid credentials"));
  }
}

export function* AddAssetSaga(action) {
  try {
    const { company_id, assetPageNumber, data } = action.payload;
    let response = yield call(axios.post, CONFIG.addAsset, data);
    if (response && response?.data?.status === 1) {
      yield put(AddAssetSuccess("asset added"));
      yield put(AssetRequest({ company_id, assetPageNumber }));
    }
  } catch (error) {
    console.log(error);
    yield put(AddAssetError(error?.response?.data?.message));
  }
}

export function* DeleteAssetSaga(action) {
  try {
    const { assetId, company_id, assetPageNumber } = action.payload;
    let response = yield call(axios.delete, `${CONFIG.deleteAsset}`, {
      data: { assetId },
    });

    if (response && response?.data?.status === 1) {
      yield put(DeleteAssetSuccess("Delete Success"));
      yield put(AssetRequest({ company_id, assetPageNumber }));
    }
  } catch (error) {
    yield put(DeleteAssetError("Error"));
  }
}

export function* UpdateAssetSaga(action) {
  try {
    const { editData, company_id, assetPageNumber } = action.payload;
    console.log(company_id, assetPageNumber);
    let response = yield call(axios.put, CONFIG.updateAsset, editData);
    // console.log(response, "iiiiiii");

    if (response && response.data?.status === 1) {
      yield put(UpdateAssetSuccess("UpdateSuccess"));
      yield put(AssetRequest({ company_id, assetPageNumber }));
    }
  } catch (error) {
    yield put(UpdateAssetError("Error occurred"));
  }
}

export function* GetAllAssetList(action) {
  try {
    console.log(action.payload);
    let response = yield call(
      axios.get,
      `${CONFIG.getAllAsset}/${action.payload}`
    );
    if (response && response.data?.status === 1) {
      yield put(getAllAssetListSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(getAllAssetListError("Error occurred"));
  }
}
