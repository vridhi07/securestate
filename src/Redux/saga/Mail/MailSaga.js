import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";
import axios from "axios";
export function* GetMailSaga(action) {
  try {
    // const { company_id, activePageNumber, pentestStatus } = action.payload;
    let response = yield call(axios.get, CONFIG.getMail);
    if (response && response.data?.status === 1) {
      // console.log(response, "uuuuuu");
      yield put(actions.getEmailSuccess(response?.data?.data));
    }
  } catch (error) {
    console.log(error.response);
    yield put(actions.getEmailError(error?.response?.data?.message));
  }
}
