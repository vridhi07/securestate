import axios from "axios";
import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";

export function* GetInvoiceSaga(action) {
  try {
    const { company_id, page, rowsPerPage } = action.payload;
    let response = yield call(
      axios.get,
      `${CONFIG.getInvoice}/${company_id}/${rowsPerPage}/${page}`
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
console.log('hello');
  try {
    let response = yield call(axios.post, CONFIG.addInvoice, action.payload);
    if (response && response.data?.status === 1) {
      yield put(actions.addInvoiceSuccess('SUCCESS'));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addInvoiceError(error.response.data.message));
  }
}
