import { all, takeLatest } from "redux-saga/effects";
import * as actions from "../action";
import { LoginSaga } from "./loginSaga";
import { SignupSaga } from "./signupSaga";
import {
  AssetSaga,
  AddAssetSaga,
  DeleteAssetSaga,
  UpdateAssetSaga,
} from "./AssetSaga";
import { GetCompanySaga } from "./CompanySaga";
import { GetUserDetails } from "./UserSaga";
function* watchAllSaga() {
  yield takeLatest(actions.LoginRequest, LoginSaga);
  yield takeLatest(actions.SignUpRequest, SignupSaga);
  yield takeLatest(actions.AssetRequest, AssetSaga);
  yield takeLatest(actions.AddAssetRequest, AddAssetSaga);
  yield takeLatest(actions.DeleteAssetRequest, DeleteAssetSaga);
  yield takeLatest(actions.UpdateAssetRequest, UpdateAssetSaga);
  yield takeLatest(actions.CompanyRequest, GetCompanySaga);
  yield takeLatest(actions.UserDetailsRequest, GetUserDetails);
}

export default function* rootSaga() {
  yield all([watchAllSaga()]);
}
