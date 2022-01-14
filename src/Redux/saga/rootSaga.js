import { all, takeLatest } from "redux-saga/effects";
import * as actions from "../action";
import { LoginSaga } from "./loginSaga";
import { SignupSaga } from "./signupSaga";
import { AssetSaga } from "./AssetSaga";
function* watchAllSaga() {
  yield takeLatest(actions.LoginRequest, LoginSaga);
  yield takeLatest(actions.SignUpRequest, SignupSaga);
  yield takeLatest(actions.AssetRequest, AssetSaga);
}

export default function* rootSaga() {
  yield all([watchAllSaga()]);
}
