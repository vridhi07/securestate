import { put, call } from "redux-saga/effects";
import {
  AssetSuccess,
  AssetError,
  AddAssetSuccess,
  AddAssetError,
  DeleteAssetSuccess,
  DeleteAssetError,
  AssetRequest,
  UpdateAssetSuccess,
  UpdateAssetError,
  getAllAssetListSuccess,
  getAllAssetListError,
} from "../action";
import Axios from "../../Service/axiosInstance";
import { CONFIG } from "../../Service/CONFIG";

export function* AssetSaga(action) {
  console.log(action.payload);
  try {
    const { company_id, assetPageNumber } = action.payload;
    let response = yield call(
      Axios.get,
      `${CONFIG.assets}/${company_id}/${assetPageNumber}`
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
    let response = yield call(Axios.post, CONFIG.addAsset, action.payload);
    if (response && response.data?.status === 1) {
      yield put(AddAssetSuccess(response.data.message));
      yield put(AssetRequest());
    }
  } catch (error) {
    console.log(error);
    yield put(AddAssetError(error.response.data.message));
  }
}

export function* DeleteAssetSaga(action) {
  try {
    let response = yield call(Axios.delete, CONFIG.deleteAsset, {
      data: { assetId: action.payload },
    });
    if (response && response.data?.status === 1) {
      yield put(DeleteAssetSuccess(response.data.message));
      yield put(AssetRequest());
    }
  } catch (error) {
    yield put(DeleteAssetError("Error"));
  }
}

export function* UpdateAssetSaga(action) {
  console.log(action.payload);

  try {
    let response = yield call(Axios.put, CONFIG.updateAsset, action.payload);
    console.log(response);
    if (response && response.data?.status === 1) {
      yield put(UpdateAssetSuccess(response.data.message));
    }
  } catch (error) {
    yield put(UpdateAssetError("Error occurred"));
  }
}

export function* GetAllAssetList(action) {
  try {
    let response = yield call(
      Axios.get,
      `${CONFIG.getAllAsset}/${action.payload}`
    );
    if (response && response.data?.status === 1) {
      yield put(getAllAssetListSuccess(response.data.data));
    }
  } catch (error) {
    yield put(getAllAssetListError("Error occurred"));
  }
}
