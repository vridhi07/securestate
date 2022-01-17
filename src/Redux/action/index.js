import { createAction } from "redux-actions";
import * as actions from "../constant";

export const LoginRequest = createAction(actions.LOGIN_REQUEST);
export const LoginSuccess = createAction(actions.LOGIN_SUCCESS);
export const LoginError = createAction(actions.LOGIN_ERROR);

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
