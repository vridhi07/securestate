import { put, call } from "redux-saga/effects";
import { AssetSuccess, AssetError } from "../action";
import { AxiosCalls } from "../../Service/axiosInstance";
import { CONFIG } from "../../Service/CONFIG";
export function* AssetSaga() {
  try {
    let response = yield call(AxiosCalls, "get", CONFIG.assets);
    if (response && response.data?.status === 1) {
      yield put(AssetSuccess(response.data.data));
    }
  } catch (error) {
    yield put(AssetError("invalid credentials"));
  }
}
