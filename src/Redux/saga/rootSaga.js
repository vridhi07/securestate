import { all, takeLatest } from "redux-saga/effects";
import * as actions from "../action";
import { LoginSaga } from "./auth/loginSaga";
import { SignupSaga } from "./auth/signupSaga";
import {
  AssetSaga,
  AddAssetSaga,
  DeleteAssetSaga,
  UpdateAssetSaga,
  GetAllAssetList,
} from "./Asset/AssetSaga";

import { GetHistorySaga, AddHistoryAction } from "./Asset/HistorySaga";
import { GetSBOMSaga, AddSBOMSaga, deleteSbomSaga } from "./Asset/SbomSaga";
import {
  AddFilesSaga,
  GetFilesSaga,
  DeleteFileSaga,
} from "./Asset/AssetFilesSaga";
import { AssetDetailsSaga } from "./Asset/AssetDetailsSaga";
import { GetCompanySaga ,AddCompanySaga,GetCompanyByIdSaga,UpdateCompanyDetails} from "./company/CompanySaga";
import { GetUserDetails, updateUserSaga } from "./user/UserSaga";
import { GetUsersSaga, AddUsersSaga, DeleteUserSaga } from "./user/UsersSaga";
import {
  GetPentestSaga,
  AddPentestSaga,
  DeletePentestSaga,
  UpdatePentestSaga,
} from "./pentest/PentestSaga";
import { PentestTabSaga } from "./pentest/PentestTabsSaga";
import {
  AddScopeSaga,
  UpdateScopeSaga,
  deleteScopeSaga,
} from "./pentest/ScopePentestSaga";
import {
  AddPentestFindings,
  deleteFindings,
  updateFindings,
} from "./pentest/FindingsSaga";

import { getPentestChatSaga, SendPentestChatSaga } from "./pentest/PentestChat";
import { GetMailSaga } from "./Mail/MailSaga";
import { GetInvoiceSaga, addInvoiceSaga } from "./Invoice/InvoiceSaga";
function* watchAllSaga() {
  yield takeLatest(actions.LoginRequest, LoginSaga);
  yield takeLatest(actions.SignUpRequest, SignupSaga);

  // !Asset
  yield takeLatest(actions.AssetRequest, AssetSaga);
  yield takeLatest(actions.AddAssetRequest, AddAssetSaga);
  yield takeLatest(actions.DeleteAssetRequest, DeleteAssetSaga);
  yield takeLatest(actions.UpdateAssetRequest, UpdateAssetSaga);
  yield takeLatest(actions.GetHistoryRequest, GetHistorySaga);
  yield takeLatest(actions.AddHistoryRequest, AddHistoryAction);
  yield takeLatest(actions.GetSBOMRequest, GetSBOMSaga);
  yield takeLatest(actions.addSbomRequest, AddSBOMSaga);
  yield takeLatest(actions.deleteSbomRequest, deleteSbomSaga);
  yield takeLatest(actions.addFilesRequest, AddFilesSaga);
  yield takeLatest(actions.getAssetFilesRequest, GetFilesSaga);
  yield takeLatest(actions.deleteFilesRequest, DeleteFileSaga);
  yield takeLatest(actions.getAssetDetailsRequest, AssetDetailsSaga);

  // !company
  yield takeLatest(actions.CompanyRequest, GetCompanySaga);
  // !userDetails
  yield takeLatest(actions.getUsersRequest, GetUsersSaga);
  yield takeLatest(actions.addUsersRequest, AddUsersSaga);
  yield takeLatest(actions.deleteUsersRequest, DeleteUserSaga);

  // !User
  yield takeLatest(actions.UserDetailsRequest, GetUserDetails);
  yield takeLatest(actions.updateUserRequest, updateUserSaga);

  // !Pentest
  yield takeLatest(actions.PentestRequest, GetPentestSaga);
  yield takeLatest(actions.AddPentestRequest, AddPentestSaga);
  yield takeLatest(actions.DeletePentestRequest, DeletePentestSaga);
  yield takeLatest(actions.updatePentestRequest, UpdatePentestSaga);
  yield takeLatest(actions.deleteFindingsRequest, deleteFindings);

  //* tabs details
  yield takeLatest(actions.getPentestTabDetailsRequest, PentestTabSaga);
  // *Scope
  yield takeLatest(actions.addScopeRequest, AddScopeSaga);
  yield takeLatest(actions.updateScopeRequest, UpdateScopeSaga);
  // *FINDINGS
  yield takeLatest(actions.addFindingsRequest, AddPentestFindings);
  yield takeLatest(actions.deleteScopeRequest, deleteScopeSaga);
  yield takeLatest(actions.updateFindingsRequest, updateFindings);
  // *char
  yield takeLatest(actions.pentestChatRequest, getPentestChatSaga);
  yield takeLatest(actions.sendChatRequest, SendPentestChatSaga);
  // !Mail
  yield takeLatest(actions.getEmailRequest, GetMailSaga);
  // !all asset
  yield takeLatest(actions.getAllAssetListRequest, GetAllAssetList);
  yield takeLatest(actions.addCompanyRequest,AddCompanySaga)
  yield takeLatest(actions.getCompanyByIdRequest,GetCompanyByIdSaga)
  yield takeLatest(actions.updateCompanyDetailsRequest,UpdateCompanyDetails)
  // ! Invoice
  yield takeLatest(actions.getInvoiceRequest, GetInvoiceSaga);
  yield takeLatest(actions.addInvoiceRequest, addInvoiceSaga);
}

export default function* rootSaga() {
  yield all([watchAllSaga()]);
}
