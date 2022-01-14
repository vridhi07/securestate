import { createAction } from "redux-actions";
import * as actions from "../constant";

export const LoginRequest = createAction(actions.LOGIN_REQUEST);
export const LoginSuccess = createAction(actions.LOGIN_SUCCESS);
export const LoginError = createAction(actions.LOGIN_ERROR);

export const SignUpRequest = createAction(actions.SIGNUP_REQUEST);
export const SignUpSuccess = createAction(actions.SIGNUP_SUCCESS);
export const SignUpError = createAction(actions.SIGNUP_ERROR);