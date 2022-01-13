import { all, takeLatest } from "redux-saga/effects";
import * as actions from "../action";
import { LoginSaga } from "./loginSaga";

function* watchAllSaga() {
    yield takeLatest(actions.LoginRequest, LoginSaga);
  }
  
  export default function* rootSaga() {
    yield all([watchAllSaga()]);
  }