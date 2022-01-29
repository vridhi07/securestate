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
// ! COMPANY
export const CompanyRequest = createAction(actions.COMPANY_REQUEST);
export const CompanySuccess = createAction(actions.COMPANY_SUCCESS);
export const CompanyError = createAction(actions.COMPANY_ERROR);

export const GetSelectedCompany = createAction(actions.GET_SELECTED_COMPANY);
export const handleCompanyNameChange = createAction(
  actions.HANDLE_COMPANY_NAME_CHANGE
);
export const UserDetailsRequest = createAction(actions.USER_DETAILS_REQUEST);
export const UserDetailsSuccess = createAction(actions.USER_DETAILS_SUCCESS);
export const UserDetailsError = createAction(actions.USER_DETAILS_ERROR);

export const ActivePentestRequest = createAction(
  actions.ACTIVE_PENTEST_REQUEST
);
export const ActivePentestSuccess = createAction(
  actions.ACTIVE_PENTEST_SUCCESS
);
export const ActivePentestError = createAction(actions.ACTIVE_PENTEST_ERROR);

export const CompletedPentestRequest = createAction(
  actions.COMPLETED_PENTEST_REQUEST
);
export const CompletedPentestSuccess = createAction(
  actions.COMPLETED_PENTEST_SUCCESS
);
export const CompletedPentestError = createAction(
  actions.COMPLETED_PENTEST_ERROR
);

export const UpcomingPentestRequest = createAction(
  actions.UPCOMING_PENTEST_REQUEST
);
export const UpcomingPentestSuccess = createAction(
  actions.UPCOMING_PENTEST_SUCCESS
);
export const UpcomingPentestError = createAction(
  actions.UPCOMING_PENTEST_ERROR
);

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

//! ASSET TABS
// * HISTORY
export const GetHistoryRequest = createAction(actions.GET_HISTORY_REQUEST);
export const GetHistorySuccess = createAction(actions.GET_HISTORY_SUCCESS);
export const GetHistoryError = createAction(actions.GET_HISTORY_ERROR);

export const AddHistoryRequest = createAction(actions.ADD_HISTORY_REQUEST);
export const AddHistorySuccess = createAction(actions.ADD_HISTORY_SUCCESS);
export const AddHistoryError = createAction(actions.ADD_HISTORY_ERROR);

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
