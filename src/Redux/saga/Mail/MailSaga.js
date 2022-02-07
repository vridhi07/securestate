import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";
import axios from "axios";

export function* GetMailSaga(action) {
  try {
    const { perPage, pageNumber } = action.payload;
    let response = yield call(
      axios.get,
      `${CONFIG.getMail}/${perPage}/${pageNumber}`
    );
    if (response && response.data?.status === 1) {
      yield put(actions.getEmailSuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(actions.getEmailError(error?.response?.data?.message));
  }
}

export function* SendMailSaga(action) {
  try {
    let response = yield call(axios.post, CONFIG.sendEmail, action?.payload);
    if (response && response.data?.status === 1) {
      yield put(actions.sendEmailSuccess(response?.data));
    }
  } catch (error) {
    yield put(actions.sendEmailError(error?.response?.data?.message));
  }
}

export function* MailReplySaga(action) {
  try {
    let response = yield call(axios.post, `${CONFIG.sendReply}/${action.payload.id}`, {...action?.payload.data});
    if (response && response.data?.status === 1) {
      yield put(actions.sendEmailSuccess(response?.data));
    }
  } catch (error) {
    yield put(actions.sendEmailError(error?.response?.data?.message));
  }
}

export function* ReadmMailSaga(action) {
  try {
    let response = yield call(axios.get, `${CONFIG.readMail}/${action.payload.id}`);
    if (response && response.data?.status === 1) {
      yield put(actions.readEmailSuccess(response?.data));
    }
  } catch (error) {
    yield put(actions.readEmailError(error?.response?.data?.message));
  }
}

