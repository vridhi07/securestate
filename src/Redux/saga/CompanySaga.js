import axios from "axios";
import { CONFIG } from "../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../action/index";

export function* GetCompanySaga() {
  try {
    let response = yield call(axios.get, CONFIG.getCompany);
    if (response && response.data?.status === 1) {
      yield put(actions.CompanySuccess(response.data.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.CompanyError(error.response.data.message));
  }
}
