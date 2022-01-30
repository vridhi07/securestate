import { put, call } from "redux-saga/effects";
import { SignUpSuccess, SignUpError } from "../../action";
import axios from "axios";

export function* SignupSaga(action) {
  try {
    let url = `${process.env.REACT_APP_BASE_URL}user/signUp`;

    let response = yield call(axios.post, `${url}`, action.payload);
    if (response) {
      // localStorage.setItem("token", response.data.token);
      yield put(SignUpSuccess("signup success"));
    }
  } catch (error) {
    yield put(SignUpError("signup error"));
  }
}
