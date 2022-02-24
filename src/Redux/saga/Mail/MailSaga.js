import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";
import axios from "axios";

export function* GetMailSaga(action) {
  try {
    const { page } = action.payload;
    let response = yield call(axios.get, `${CONFIG.getMail}/${page}`);
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
      console.log(response?.data?.data);
      yield put(actions.sendEmailSuccess(response?.data));
    }
  } catch (error) {
    yield put(actions.sendEmailError(error?.response?.data?.message));
  }
}

export function* MailReplySaga(action) {
  try {
    let response = yield call(
      axios.post,
      `${CONFIG.sendReply}/${action.payload.id}`,
      { ...action?.payload.data }
    );
    if (response && response.data?.status === 1) {
      console.log(response?.data);
      yield put(actions.sendEmailReplySuccess(response?.data));
      yield put(
        actions.updateReplyRequest({
          name: "helllo",
          id: action.payload.id,
          text: { ...action?.payload.data },
          from: action?.payload.email,
          repliedAt: new Date(),
        })
      );
      yield put(actions.sendEmailReplySuccess(response?.data?.data));
    }
  } catch (error) {
    yield put(actions.sendEmailReplyError(error?.response?.data?.message));
  }
}

export function* ReadmMailSaga(action) {
  try {
    let response = yield call(
      axios.get,
      `${CONFIG.readMail}/${action.payload.id}`
    );
    if (response && response.data?.status === 1) {
      yield put(
        actions.readEmailSuccess({
          response: response?.data,
          id: action.payload.id,
        })
      );
    }
  } catch (error) {
    yield put(actions.readEmailError(error?.response?.data?.message));
  }
}
