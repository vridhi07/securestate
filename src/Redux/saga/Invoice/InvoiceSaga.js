import axios from "axios";
import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";

export function* GetInvoiceSaga(action) {
  try {
    let response = yield call(
      axios.get,
      `${CONFIG.getInvoice}/${action.payload}/5/1`
    );
    if (response && response.data?.status === 1) {
      yield put(actions.getInvoiceSuccess(response.data.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.getInvoiceError(error.response.data.message));
  }
}
export function* addInvoiceSaga(action) {
  try {
    let response = yield call(axios.post, CONFIG.addInvoice, action.payload);
    if (response && response.data?.status === 1) {
      yield put(actions.addInvoiceSuccess(response.data.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addInvoiceError(error.response.data.message));
  }
}
