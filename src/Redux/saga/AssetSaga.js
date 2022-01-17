import { put, call } from "redux-saga/effects";
import {
  AssetSuccess,
  AssetError,
  AddAssetSuccess,
  AddAssetError,
  DeleteAssetSuccess,
  DeleteAssetError,
  UpdateAssetSuccess,
  UpdateAssetError,
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
    let response = yield call(Axios.delete, CONFIG.deleteAsset, {
      data: { assetId: action.payload },
    });
    if (response && response.data?.status === 1) {
      yield put(DeleteAssetSuccess(response.data.message));
    }
  } catch (error) {
    yield put(DeleteAssetError("Error"));
  }
}

export function* UpdateAssetSaga(action) {
  console.log(action.payload);

  try {
    const { newStatus, id } = action.payload;
    let response = yield call(Axios.put, CONFIG.updateAsset, {
      id,
      status: newStatus,
    });
    console.log(response);
    if (response && response.data?.status === 1) {
      yield put(UpdateAssetSuccess(response.data.message));
    }
  } catch (error) {
    yield put(UpdateAssetError("Error occurred"));
  }
}
