import axios from "axios";
import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";

export function* GetInvoiceSaga(action) {
  try {
    const { company_id, page } = action.payload;
    let response = yield call(
      axios.get,
      `${CONFIG.getInvoice}/${company_id}/${page}`
    );
    if (response && response.data?.status === 1) {
      yield put(actions.getInvoiceSuccess(response?.data?.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.getInvoiceError(error.response.data.message));
  }
}
export function* addInvoiceSaga(action) {
  console.log("hello");
  try {
    const { data, company_id, page } = action.payload;
    let response = yield call(axios.post, CONFIG.addInvoice, data);
    if (response && response.data?.status === 1) {
      yield put(actions.addInvoiceSuccess("successfully added"));
      yield put(actions.getInvoiceRequest({ company_id, page }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addInvoiceError(error.response?.data?.message));
  }
}
export function* deleteInvoicesSaga(action) {
  try {
    const { data, company_id, page } = action.payload;
    let response = yield call(axios.delete, CONFIG.deleteInvoice, {
      data: { invoiceId: data },
    });
    if (response && response.data?.status === 1) {
      yield put(actions.deleteInvoiceSuccess("successfully Deleted"));
      yield put(actions.getInvoiceRequest({ company_id, page }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.deleteInvoiceError(error.response?.data?.message));
  }
}
export function* getInvoiceUserId(action) {
  try {
    const { userId, page } = action.payload;
    let response = yield call(
      axios.get,
      `${CONFIG.getInvoiceUserId}/${userId}/${page}`
    );
    if (response && response.data?.status === 1) {
      yield put(actions.getInvoiceUserIdSuccess(response?.data?.data));
      // yield put(actions.getInvoiceRequest({ company_id, page, rowsPerPage }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.getInvoiceUserIdError(error.response?.data?.message));
  }
}
