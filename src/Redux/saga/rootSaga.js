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

import {
  GetHistorySaga,
  AddHistoryAction,
  deleteHistorySaga,
  updateHistorySaga,
} from "./Asset/HistorySaga";

import {
  GetSBOMSaga,
  AddSBOMSaga,
  deleteSbomSaga,
  updateSbomSaga,
} from "./Asset/SbomSaga";

import {
  AddFilesSaga,
  GetFilesSaga,
  DeleteFileSaga,
} from "./Asset/AssetFilesSaga";

import {
  AssetDetailsSaga,
  UpdateAssetDetailsSaga,
} from "./Asset/AssetDetailsSaga";

import {
  GetCompanySaga,
  AddCompanySaga,
  GetCompanyByIdSaga,
  UpdateCompanyDetails,
  deleteCompanySaga,
} from "./company/CompanySaga";

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

import {
  GetMailSaga,
  SendMailSaga,
  MailReplySaga,
  ReadmMailSaga,
} from "./Mail/MailSaga";

import {
  GetInvoiceSaga,
  addInvoiceSaga,
  deleteInvoicesSaga,
  getInvoiceUserId,
} from "./Invoice/InvoiceSaga";

import {
  GetGroupList,
  addUserToGroup,
  deleteUserFromGroup,
  deleteGroupSaga,
  addMoreUserToGroupSaga,
} from "./customer/GroupSaga";

import {
  AddSubscriptionSaga,
  getSubscriptionSaga,
  DeleteSubscriptionSaga,
} from "./customer/subsScriptionSaga";

import {
  AllPentestWithCompany,
  allHackerWithCompany,
  addWalletSaga,
  getWalletSaga,
  editWalletSaga,
  getWalletTotalSaga,
  addWalletTotalSaga,
  editWalletTotalSaga,
} from "./wallet/WalletSaga";

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
  yield takeLatest(actions.deleteHistoryRequest, deleteHistorySaga);
  yield takeLatest(actions.updateHistoryRequest, updateHistorySaga);

  yield takeLatest(actions.GetSBOMRequest, GetSBOMSaga);
  yield takeLatest(actions.addSbomRequest, AddSBOMSaga);
  yield takeLatest(actions.deleteSbomRequest, deleteSbomSaga);
  yield takeLatest(actions.updateSBOMRequest, updateSbomSaga);

  yield takeLatest(actions.addFilesRequest, AddFilesSaga);
  yield takeLatest(actions.getAssetFilesRequest, GetFilesSaga);
  yield takeLatest(actions.deleteFilesRequest, DeleteFileSaga);
  yield takeLatest(actions.getAssetDetailsRequest, AssetDetailsSaga);
  yield takeLatest(actions.updateAssetDetailsRequest, UpdateAssetDetailsSaga);

  // !company
  yield takeLatest(actions.CompanyRequest, GetCompanySaga);
  yield takeLatest(actions.deleteCompanyRequest, deleteCompanySaga);
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
  yield takeLatest(actions.addCompanyRequest, AddCompanySaga);
  yield takeLatest(actions.getCompanyByIdRequest, GetCompanyByIdSaga);
  yield takeLatest(actions.updateCompanyDetailsRequest, UpdateCompanyDetails);
  // ! Invoice
  yield takeLatest(actions.getInvoiceRequest, GetInvoiceSaga);
  yield takeLatest(actions.addInvoiceRequest, addInvoiceSaga);
  yield takeLatest(actions.deleteInvoiceRequest, deleteInvoicesSaga);
  yield takeLatest(actions.getInvoiceUserIdRequest, getInvoiceUserId);
  yield takeLatest(actions.editWalletTotalRequest, editWalletTotalSaga);

  // !Customer
  yield takeLatest(actions.getGroupListRequest, GetGroupList);
  yield takeLatest(actions.addUserToGroupRequest, addUserToGroup);
  //send Email
  yield takeLatest(actions.sendEmailRequest, SendMailSaga);
  yield takeLatest(actions.sendEmailReplyRequest, MailReplySaga);
  //read Email
  yield takeLatest(actions.readEmailRequest, ReadmMailSaga);

  yield takeLatest(actions.deleteUserFromGroupRequest, deleteUserFromGroup);
  yield takeLatest(actions.deleteGroupRequest, deleteGroupSaga);
  yield takeLatest(actions.addMoreUserToGroupRequest, addMoreUserToGroupSaga);
  // *Subscritption
  yield takeLatest(actions.addSubscriptionRequest, AddSubscriptionSaga);
  yield takeLatest(actions.getSubscriptionListRequest, getSubscriptionSaga);
  yield takeLatest(actions.deleteSubscriptionRequest, DeleteSubscriptionSaga);
  // !Wallet
  yield takeLatest(actions.allPentestWithCompanyRequest, AllPentestWithCompany);
  yield takeLatest(actions.allHackerWithCompanyRequest, allHackerWithCompany);

  yield takeLatest(actions.addWalletRequest, addWalletSaga);
  yield takeLatest(actions.getWalletRequest, getWalletSaga);
  yield takeLatest(actions.getWalletTotalRequest, getWalletTotalSaga);
  yield takeLatest(actions.addWalletTotalRequest, addWalletTotalSaga);
  yield takeLatest(actions.editWalletRequest, editWalletSaga);
}

export default function* rootSaga() {
  yield all([watchAllSaga()]);
}
