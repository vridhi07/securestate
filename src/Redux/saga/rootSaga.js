import { all, takeLatest } from "redux-saga/effects";
import * as actions from "../action";
import { LoginSaga } from "./loginSaga";
import { SignupSaga } from "./signupSaga";
import {
  AssetSaga,
  AddAssetSaga,
  DeleteAssetSaga,
  UpdateAssetSaga,
  GetAllAssetList,
} from "./AssetSaga";

import { GetHistorySaga, AddHistoryAction } from "./HistorySaga";
import { GetSBOMSaga, AddSBOMSaga } from "./SbomSaga";

import { GetCompanySaga } from "./CompanySaga";
import { GetUserDetails } from "./UserSaga";
import {
  GetActivePentestSaga,
  GetCompletedPentestSaga,
  GetUpcomingPentestSaga,
  AddPentestSaga,
  DeletePentestSaga,
} from "./PentestSaga";

function* watchAllSaga() {
  yield takeLatest(actions.LoginRequest, LoginSaga);
  yield takeLatest(actions.SignUpRequest, SignupSaga);
  yield takeLatest(actions.AssetRequest, AssetSaga);
  yield takeLatest(actions.AddAssetRequest, AddAssetSaga);
  yield takeLatest(actions.DeleteAssetRequest, DeleteAssetSaga);
  yield takeLatest(actions.UpdateAssetRequest, UpdateAssetSaga);
  yield takeLatest(actions.GetHistoryRequest, GetHistorySaga);
  yield takeLatest(actions.AddHistoryRequest, AddHistoryAction);
  yield takeLatest(actions.GetSBOMRequest, GetSBOMSaga);
  yield takeLatest(actions.addSbomRequest, AddSBOMSaga);
  yield takeLatest(actions.CompanyRequest, GetCompanySaga);
  yield takeLatest(actions.UserDetailsRequest, GetUserDetails);
  yield takeLatest(actions.ActivePentestRequest, GetActivePentestSaga);
  yield takeLatest(actions.CompletedPentestRequest, GetCompletedPentestSaga);
  yield takeLatest(actions.UpcomingPentestRequest, GetUpcomingPentestSaga);
  yield takeLatest(actions.AddPentestRequest, AddPentestSaga);
  yield takeLatest(actions.DeletePentestRequest, DeletePentestSaga);
  yield takeLatest(actions.getAllAssetListRequest, GetAllAssetList);
}

export default function* rootSaga() {
  yield all([watchAllSaga()]);
}
