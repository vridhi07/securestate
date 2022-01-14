import { all, takeLatest } from "redux-saga/effects";
import * as actions from "../action";
import { LoginSaga } from "./loginSaga";
import { SignupSaga } from "./signupSaga"

function* watchAllSaga() {
    yield takeLatest(actions.LoginRequest, LoginSaga);
    yield takeLatest(actions.SignUpRequest, SignupSaga);
  }
  
  export default function* rootSaga() {
    yield all([watchAllSaga()]);
  }