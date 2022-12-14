import { createAction } from "redux-actions";
import * as actions from "../constant";

export const LoginRequest = createAction(actions.LOGIN_REQUEST);
export const LoginSuccess = createAction(actions.LOGIN_SUCCESS);
export const LoginError = createAction(actions.LOGIN_ERROR);
export const ResetLoginError = createAction(actions.RESET_LOG_ALERT);
export const LogOut = createAction(actions.LOG_OUT);
export const SignUpRequest = createAction(actions.SIGNUP_REQUEST);
export const SignUpSuccess = createAction(actions.SIGNUP_SUCCESS);
export const SignUpError = createAction(actions.SIGNUP_ERROR);
//! ASSET TABS
export const AssetRequest = createAction(actions.ASSET_REQUEST);
export const AssetSuccess = createAction(actions.ASSET_SUCCESS);
export const AssetError = createAction(actions.ASSET_ERROR);

export const getAllAssetListRequest = createAction(
  actions.GET_ALL_ASSET_LIST_REQUEST
);
export const getAllAssetListSuccess = createAction(
  actions.GET_ALL_ASSET_LIST_SUCCESS
);
export const getAllAssetListError = createAction(
  actions.GET_ALL_ASSET_LIST_ERROR
);

export const AddAssetRequest = createAction(actions.ADD_ASSET_REQUEST);
export const AddAssetSuccess = createAction(actions.ADD_ASSET_SUCCESS);
export const AddAssetError = createAction(actions.ADD_ASSET_ERROR);

export const DeleteAssetRequest = createAction(actions.DELETE_ASSET_REQUEST);
export const DeleteAssetSuccess = createAction(actions.DELETE_ASSET_SUCCESS);
export const DeleteAssetError = createAction(actions.DELETE_ASSET_ERROR);

export const UpdateAssetRequest = createAction(actions.UPDATE_ASSET_REQUEST);
export const UpdateAssetSuccess = createAction(actions.UPDATE_ASSET_SUCCESS);
export const UpdateAssetError = createAction(actions.UPDATE_ASSET_ERROR);

// * HISTORY
export const GetHistoryRequest = createAction(actions.GET_HISTORY_REQUEST);
export const GetHistorySuccess = createAction(actions.GET_HISTORY_SUCCESS);
export const GetHistoryError = createAction(actions.GET_HISTORY_ERROR);

export const AddHistoryRequest = createAction(actions.ADD_HISTORY_REQUEST);
export const AddHistorySuccess = createAction(actions.ADD_HISTORY_SUCCESS);
export const AddHistoryError = createAction(actions.ADD_HISTORY_ERROR);

export const updateHistoryRequest = createAction(
  actions.UPDATE_HISTORY_REQUEST
);
export const updateHistorySuccess = createAction(
  actions.UPDATE_HISTORY_SUCCESS
);
export const updateHistoryError = createAction(actions.UPDATE_HISTORY_ERROR);

export const deleteHistoryRequest = createAction(
  actions.DELETE_HISTORY_REQUEST
);
export const deleteHistorySuccess = createAction(
  actions.DELETE_HISTORY_SUCCESS
);
export const deleteHistoryError = createAction(actions.DELETE_HISTORY_ERROR);
// * SBOM
export const GetSBOMRequest = createAction(actions.GET_SBOM_REQUEST);
export const GetSBOMSuccess = createAction(actions.GET_SBOM_SUCCESS);
export const GetSBOMError = createAction(actions.GET_SBOM_ERROR);

export const addSbomRequest = createAction(actions.ADD_SBOM_REQUEST);
export const addSbomSuccess = createAction(actions.ADD_SBOM_SUCCESS);
export const addSbomError = createAction(actions.ADD_SBOM_ERROR);

export const deleteSbomRequest = createAction(actions.DELETE_SBOM_REQUEST);
export const deleteSbomSuccess = createAction(actions.DELETE_SBOM_SUCCESS);
export const deleteSbomError = createAction(actions.DELETE_SBOM_ERROR);

export const updateSBOMRequest = createAction(actions.UPDATE_SBOM_REQUEST);
export const updateSBOMSuccess = createAction(actions.UPDATE_SBOM_SUCCESS);
export const updateSBOMError = createAction(actions.UPDATE_SBOM_ERROR);
//* Files

export const addFilesRequest = createAction(actions.ADD_FILES_REQUEST);
export const addFilesSuccess = createAction(actions.ADD_FILES_SUCCESS);
export const addFilesError = createAction(actions.ADD_FILES_ERROR);

export const getAssetFilesRequest = createAction(
  actions.GET_ASSET_FILES_REQUEST
);
export const getAssetFilesSuccess = createAction(
  actions.GET_ASSET_FILES_SUCCESS
);
export const getAssetFilesError = createAction(actions.GET_ASSET_FILES_ERROR);

export const deleteFilesRequest = createAction(actions.DELETE_FILES_REQUEST);
export const deleteFilesSuccess = createAction(actions.DELETE_FILES_SUCCESS);
export const deleteFilesError = createAction(actions.DELETE_FILES_ERROR);

//* asset details
export const getAssetDetailsRequest = createAction(
  actions.GET_ASSET_DETAILS_REQUEST
);
export const getAssetDetailsSuccess = createAction(
  actions.GET_ASSET_DETAILS_SUCCESS
);
export const getAssetDetailsError = createAction(
  actions.GET_ASSET_DETAILS_ERROR
);

export const updateAssetDetailsRequest = createAction(
  actions.UPDATE_ASSET_DETAILS_REQUEST
);
export const updateAssetDetailsSuccess = createAction(
  actions.UPDATE_ASSET_DETAILS_SUCCESS
);
export const updateAssetDetailsError = createAction(
  actions.UPDATE_ASSET_DETAILS_ERROR
);

export const handleAssetDetailsChange = createAction(
  actions.HANDLE_ASSET_DETAILS_CHANGE
);
// ! COMPANY
export const CompanyRequest = createAction(actions.COMPANY_REQUEST);
export const CompanySuccess = createAction(actions.COMPANY_SUCCESS);
export const CompanyError = createAction(actions.COMPANY_ERROR);

export const GetSelectedCompany = createAction(actions.GET_SELECTED_COMPANY);
export const handleCompanyNameChange = createAction(
  actions.HANDLE_COMPANY_NAME_CHANGE
);

// ! COMPANY
export const UserDetailsRequest = createAction(actions.USER_DETAILS_REQUEST);
export const UserDetailsSuccess = createAction(actions.USER_DETAILS_SUCCESS);
export const UserDetailsError = createAction(actions.USER_DETAILS_ERROR);

// !PESNTEST
export const PentestRequest = createAction(actions.PENTEST_REQUEST);
export const PentestSuccess = createAction(actions.PENTEST_SUCCESS);
export const PentestError = createAction(actions.PENTEST_ERROR);

export const AddPentestRequest = createAction(actions.ADD_PENTEST_REQUEST);
export const AddPentestSuccess = createAction(actions.ADD_PENTEST_SUCCESS);
export const AddPentestError = createAction(actions.ADD_PENTEST_ERROR);

export const DeletePentestRequest = createAction(
  actions.DELETE_PENTEST_REQUEST
);
export const DeletePentestSuccess = createAction(
  actions.DELETE_PENTEST_SUCCESS
);
export const DeletePentestError = createAction(actions.DELETE_PENTEST_ERROR);

export const updatePentestRequest = createAction(
  actions.UPDATE_PENTEST_REQUEST
);
export const updatePentestSuccess = createAction(
  actions.UPDATE_PENTEST_SUCCESS
);
export const updatePentestError = createAction(actions.UPDATE_PENTEST_ERROR);

// * SCOPE
export const getPentestTabDetailsRequest = createAction(
  actions.GET_PENTEST_TAB_DETAILS_REQUEST
);
export const getPentestTabDetailsSuccess = createAction(
  actions.GET_PENTEST_TAB_DETAILS_SUCCESS
);
export const getPentestTabDetailsError = createAction(
  actions.GET_PENTEST_TAB_DETAILS_ERROR
);

export const addScopeRequest = createAction(actions.ADD_SCOPE_REQUEST);
export const addScopeSuccess = createAction(actions.ADD_SCOPE_SUCCESS);
export const addScopeError = createAction(actions.ADD_SCOPE_ERROR);

export const updateScopeRequest = createAction(actions.UPDATE_SCOPE_REQUEST);
export const updateScopeSuccess = createAction(actions.UPDATE_SCOPE_SUCCESS);
export const updateScopeError = createAction(actions.UPDATE_SCOPE_ERROR);

export const deleteScopeRequest = createAction(actions.DELETE_SCOPE_REQUEST);
export const deleteScopeSuccess = createAction(actions.DELETE_SCOPE_SUCCESS);
export const deleteScopeError = createAction(actions.DELETE_SCOPE_ERROR);

//* FINDINGS
export const addFindingsRequest = createAction(actions.ADD_FINDINGS_REQUEST);
export const addFindingsSuccess = createAction(actions.ADD_FINDINGS_SUCCESS);
export const addFindingsError = createAction(actions.ADD_FINDINGS_ERROR);

export const deleteFindingsRequest = createAction(
  actions.DELETE_FINDINGS_REQUEST
);
export const deleteFindingsSuccess = createAction(
  actions.DELETE_FINDINGS_SUCCESS
);
export const deleteFindingsError = createAction(actions.DELETE_FINDINGS_ERROR);

export const updateFindingsRequest = createAction(
  actions.UPDATE_FINDINGS_REQUEST
);
export const updateFindingsSuccess = createAction(
  actions.UPDATE_FINDINGS_SUCCESS
);
export const updateFindingsError = createAction(actions.UPDATE_FINDINGS_ERROR);

// * Pentest chat
export const pentestChatRequest = createAction(actions.PENTEST_CHAT_REQUEST);
export const pentestChatSuccess = createAction(actions.PENTEST_CHAT_SUCCESS);
export const pentestChatError = createAction(actions.PENTEST_CHAT_ERROR);

export const sendChatRequest = createAction(actions.SEND_CHAT_REQUEST);
export const sendChatSuccess = createAction(actions.SEND_CHAT_SUCCESS);
export const sendChatError = createAction(actions.SEND_CHAT_ERROR);

// ! Email

export const getEmailRequest = createAction(actions.GET_EMAIL_REQUEST);
export const getEmailSuccess = createAction(actions.GET_EMAIL_SUCCESS);
export const getEmailError = createAction(actions.GET_EMAIL_ERROR);

export const sendEmailRequest = createAction(actions.SEND_EMAIL_REQUEST);
export const sendEmailSuccess = createAction(actions.SEND_EMAIL_SUCCESS);
export const sendEmailError = createAction(actions.SEND_EMAIL_ERROR);

// ! Users
export const getUsersRequest = createAction(actions.GET_USERS_REQUEST);
export const getUsersSuccess = createAction(actions.GET_USERS_SUCCESS);
export const getUsersError = createAction(actions.GET_USERS_ERROR);

export const addUsersRequest = createAction(actions.ADD_USERS_REQUEST);
export const addUsersSuccess = createAction(actions.ADD_USERS_SUCCESS);
export const addUsersError = createAction(actions.ADD_USERS_ERROR);
export const resetAlertUsers = createAction(actions.RESET_USERS_ALERT);

export const deleteUsersRequest = createAction(actions.DELETE_USERS_REQUEST);
export const deleteUsersSuccess = createAction(actions.DELETE_USERS_SUCCESS);
export const deleteUsersError = createAction(actions.DELETE_USERS_ERROR);

// ! update User
export const updateUserRequest = createAction(actions.UPDATE_USER_REQUEST);
export const updateUserSuccess = createAction(actions.UPDATE_USER_SUCCESS);
export const updateUserError = createAction(actions.UPDATE_USER_ERROR);

//Add Company

export const addCompanyRequest = createAction(actions.ADD_COMPANY_REQUEST);
export const addCompanySuccess = createAction(actions.ADD_COMPANY_SUCCESS);
export const addCompanyError = createAction(actions.ADD_COMPANY_ERROR);

export const getCompanyByIdRequest = createAction(
  actions.GET_COMPANY_BY_ID_REQUEST
);
export const getCompanyByIdSuccess = createAction(
  actions.GET_COMPANY_BY_ID_SUCCESS
);
export const getCompanyByIdError = createAction(
  actions.GET_COMPANY_BY_ID_ERROR
);

//Update company Details

export const updateCompanyDetailsRequest = createAction(
  actions.UPDATE_COMPANY_DETAILS_REQUEST
);
export const updateCompanyDetailsSuccess = createAction(
  actions.UPDATE_COMPANY_DETAILS_SUCCESS
);
export const updateCompanyDetailsError = createAction(
  actions.UPDATE_COMPANY_DETAILS_ERROR
);
// ! Invoice
export const getInvoiceRequest = createAction(actions.GET_INVOICE_REQUEST);
export const getInvoiceSuccess = createAction(actions.GET_INVOICE_SUCCESS);
export const getInvoiceError = createAction(actions.GET_INVOICE_ERROR);

export const addInvoiceRequest = createAction(actions.ADD_INVOICE_REQUEST);
export const addInvoiceSuccess = createAction(actions.ADD_INVOICE_SUCCESS);
export const addInvoiceError = createAction(actions.ADD_INVOICE_ERROR);

export const deleteInvoiceRequest = createAction(
  actions.DELETE_INVOICE_REQUEST
);
export const deleteInvoiceSuccess = createAction(
  actions.DELETE_INVOICE_SUCCESS
);
export const deleteInvoiceError = createAction(actions.DELETE_INVOICE_ERROR);

export const getInvoiceUserIdRequest = createAction(
  actions.GET_INVOICE_USER_ID_REQUEST
);
export const getInvoiceUserIdSuccess = createAction(
  actions.GET_INVOICE_USER_ID_SUCCESS
);
export const getInvoiceUserIdError = createAction(
  actions.GET_INVOICE_USER_ID_ERROR
);
// !Customer
// * Group

export const deleteCompanyRequest = createAction(
  actions.DELETE_COMPANY_REQUEST
);
export const deleteCompanySuccess = createAction(
  actions.DELETE_COMPANY_SUCCESS
);
export const deleteCompanyError = createAction(actions.DELETE_COMPANY_ERROR);

export const getGroupListRequest = createAction(actions.GET_GROUP_LIST_REQUEST);
export const getGroupListSuccess = createAction(actions.GET_GROUP_LIST_SUCCESS);
export const getGroupListError = createAction(actions.GET_GROUP_LIST_ERROR);

export const addUserToGroupRequest = createAction(
  actions.ADD_USER_TO_GROUP_REQUEST
);
export const addUserToGroupSuccess = createAction(
  actions.ADD_USER_TO_GROUP_SUCCESS
);
export const addUserToGroupError = createAction(
  actions.ADD_USER_TO_GROUP_ERROR
);

export const sendEmailReplyRequest = createAction(actions.SEND_REPLY_REQUEST);

export const sendEmailReplySuccess = createAction(actions.SEND_REPLY_SUCCESS);

export const sendEmailReplyError = createAction(actions.SEND_REPLY_ERROR);

export const readEmailRequest = createAction(actions.READ_MAIL_REQUEST);
export const readEmailSuccess = createAction(actions.READ_MAIL_SUCCESS);
export const readEmailError = createAction(actions.READ_MAIL_ERROR);
export const deleteUserFromGroupRequest = createAction(
  actions.DELETE_USER_FROM_GROUP_REQUEST
);
export const deleteUserFromGroupSuccess = createAction(
  actions.DELETE_USER_FROM_GROUP_SUCCESS
);
export const deleteUserFromGroupError = createAction(
  actions.DELETE_USER_FROM_GROUP_ERROR
);

export const deleteGroupRequest = createAction(actions.DELETE_GROUP_REQUEST);
export const deleteGroupSuccess = createAction(actions.DELETE_GROUP_SUCCESS);
export const deleteGroupError = createAction(actions.DELETE_GROUP_ERROR);

export const addMoreUserToGroupRequest = createAction(
  actions.ADD_MORE_USER_TO_GROUP_REQUEST
);
export const addMoreUserToGroupSuccess = createAction(
  actions.ADD_MORE_USER_TO_GROUP_SUCCESS
);
export const addMoreUserToGroupError = createAction(
  actions.ADD_MORE_USER_TO_GROUP_ERROR
);

// *SUBSCRIPTION
export const addSubscriptionRequest = createAction(
  actions.ADD_SUBSCRIPTION_REQUEST
);
export const addSubscriptionSuccess = createAction(
  actions.ADD_SUBSCRIPTION_SUCCESS
);
export const addSubscriptionError = createAction(
  actions.ADD_SUBSCRIPTION_ERROR
);

export const getSubscriptionListRequest = createAction(
  actions.GET_SUBSCRIPTION_LIST_REQUEST
);
export const getSubscriptionListSuccess = createAction(
  actions.GET_SUBSCRIPTION_LIST_SUCCESS
);
export const getSubscriptionListError = createAction(
  actions.GET_SUBSCRIPTION_LIST_ERROR
);

export const deleteSubscriptionRequest = createAction(
  actions.DELETE_SUBSCRIPTION_REQUEST
);
export const deleteSubscriptionSuccess = createAction(
  actions.DELETE_SUBSCRIPTION_SUCCESS
);
export const deleteSubscriptionError = createAction(
  actions.DELETE_SUBSCRIPTION_ERROR
);

//Update Reply locally

export const updateReplyRequest = createAction(actions.UPDATE_REPLY_REQUEST);

// ! WALLET

export const allPentestWithCompanyRequest = createAction(
  actions.ALL_PENTEST_WITH_COMPANY_REQUEST
);
export const allPentestWithCompanySuccess = createAction(
  actions.ALL_PENTEST_WITH_COMPANY_SUCCESS
);
export const allPentestWithCompanyError = createAction(
  actions.ALL_PENTEST_WITH_COMPANY_ERROR
);

export const allHackerWithCompanyRequest = createAction(
  actions.ALL_HACKER_WITH_COMPANY_REQUEST
);
export const allHackerWithCompanySuccess = createAction(
  actions.ALL_HACKER_WITH_COMPANY_SUCCESS
);
export const allHackerWithCompanyError = createAction(
  actions.ALL_HACKER_WITH_COMPANY_ERROR
);

export const addWalletRequest = createAction(actions.ADD_WALLET_REQUEST);
export const addWalletSuccess = createAction(actions.ADD_WALLET_SUCCESS);
export const addWalletError = createAction(actions.ADD_WALLET_ERROR);

export const getWalletRequest = createAction(actions.GET_WALLET_REQUEST);
export const getWalletSuccess = createAction(actions.GET_WALLET_SUCCESS);
export const getWalletError = createAction(actions.GET_WALLET_ERROR);

export const editWalletRequest = createAction(actions.EDIT_WALLET_REQUEST);
export const editWalletSuccess = createAction(actions.EDIT_WALLET_SUCCESS);
export const editWalletError = createAction(actions.EDIT_WALLET_ERROR);

export const getWalletTotalRequest = createAction(
  actions.GET_WALLET_TOTAL_REQUEST
);
export const getWalletTotalSuccess = createAction(
  actions.GET_WALLET_TOTAL_SUCCESS
);
export const getWalletTotalError = createAction(actions.GET_WALLET_TOTAL_ERROR);

export const addWalletTotalRequest = createAction(
  actions.ADD_WALLET_TOTAL_REQUEST
);
export const addWalletTotalSuccess = createAction(
  actions.ADD_WALLET_TOTAL_SUCCESS
);
export const addWalletTotalError = createAction(actions.ADD_WALLET_TOTAL_ERROR);

export const editWalletTotalRequest = createAction(
  actions.EDIT_WALLET_TOTAL_REQUEST
);
export const editWalletTotalSuccess = createAction(
  actions.EDIT_WALLET_TOTAL_SUCCESS
);
export const editWalletTotalError = createAction(
  actions.EDIT_WALLET_TOTAL_ERROR
);
