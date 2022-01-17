import { put, call } from "redux-saga/effects";
import {
  AssetSuccess,
  AssetError,
  AddAssetSuccess,
  AddAssetError,
  DeleteAssetSuccess,
  DeleteAssetError,
} from "../action";
import Axios from "../../Service/axiosInstance";
import { CONFIG } from "../../Service/CONFIG";

export function* AssetSaga() {
  try {
    let response = yield call(Axios.get, CONFIG.assets);
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
    let response = yield call(Axios.post, CONFIG.addAsset, action.payload);
    console.log(response);
    if (response && response.data?.status === 1) {
      yield put(AddAssetSuccess(response.data.message));
    }
  } catch (error) {
    console.log(error);
    yield put(AddAssetError("Error"));
  }
}

export function* DeleteAssetSaga(action) {
  try {
    console.log(action.payload);
    let response = yield call(Axios.delete, CONFIG.deleteAsset, {
      assetId: action.payload,
    });
    console.log(response);
    if (response && response.data?.status === 1) {
      yield put(DeleteAssetSuccess(response.data.message));
    }
  } catch (error) {
    console.log(error);
    yield put(DeleteAssetError("Error"));
  }
}
