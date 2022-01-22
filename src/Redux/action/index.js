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

export const AddAssetRequest = createAction(actions.ADD_ASSET_REQUEST);
export const AddAssetSuccess = createAction(actions.ADD_ASSET_SUCCESS);
export const AddAssetError = createAction(actions.ADD_ASSET_ERROR);

export const DeleteAssetRequest = createAction(actions.DELETE_ASSET_REQUEST);
export const DeleteAssetSuccess = createAction(actions.DELETE_ASSET_SUCCESS);
export const DeleteAssetError = createAction(actions.DELETE_ASSET_ERROR);

export const UpdateAssetRequest = createAction(actions.UPDATE_ASSET_REQUEST);
export const UpdateAssetSuccess = createAction(actions.UPDATE_ASSET_SUCCESS);
export const UpdateAssetError = createAction(actions.UPDATE_ASSET_ERROR);

export const CompanyRequest = createAction(actions.COMPANY_REQUEST);
export const CompanySuccess = createAction(actions.COMPANY_SUCCESS);
export const CompanyError = createAction(actions.COMPANY_ERROR);

export const GetSelectedCompany = createAction(actions.GET_SELECTED_COMPANY);

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
