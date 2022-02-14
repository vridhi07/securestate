import axios from "axios";
import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";

export function* AllPentestWithCompany(action) {
  try {
    const { company_id } = action.payload;
    let response = yield call(
      axios.get,
      `${CONFIG.allPentestWithCompany}${company_id}`
    );

    if (response && response?.data?.status === 1) {
      // console.log(response.data);
      yield put(actions.allPentestWithCompanySuccess(response?.data?.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(
      actions.allPentestWithCompanyError(error?.response?.data?.message)
    );
  }
}

export function* allHackerWithCompany(action) {
  try {
    const { company_id } = action.payload;
    let response = yield call(
      axios.get,
      `${CONFIG.allHackerWithCompany}${company_id}`
    );

    if (response && response?.data?.status === 1) {
      // console.log(response.data);
      yield put(actions.allHackerWithCompanySuccess(response?.data?.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(
      actions.allHackerWithCompanyError(error?.response?.data?.message)
    );
  }
}

export function* getWalletSaga(action) {
  try {
    const { hackerId } = action.payload;
    let response = yield call(axios.get, `${CONFIG.getWallet}/${hackerId}/5/1`);

    if (response && response?.data?.status === 1) {
      // console.log(response.data);
      yield put(actions.getWalletSuccess(response?.data?.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addWalletError(error?.response?.data?.message));
  }
}

export function* addWalletSaga(action) {
  try {
    const { data, hackerId } = action.payload;
    let response = yield call(axios.post, `${CONFIG.addWallet}`, data);

    if (response && response?.data?.status === 1) {
      // console.log(response.data);
      yield put(actions.addWalletSuccess("success"));
      yield put(actions.getWalletRequest({ hackerId }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addWalletError(error?.response?.data?.message));
  }
}

export function* getWalletTotalSaga(action) {
  try {
    const { hackerId } = action.payload;
    let response = yield call(
      axios.get,
      `${CONFIG.getWalletTotal}/${hackerId}`
    );

    if (response && response?.data?.status === 1) {
      // console.log(response.data);
      yield put(actions.getWalletTotalSuccess(response?.data?.data));
      // yield put(actions.getWalletRequest({ hackerId }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.getWalletTotalError(error?.response?.data?.message));
  }
}

export function* addWalletTotalSaga(action) {
  try {
    const { data, hackerId } = action.payload;
    console.log(data, "data", hackerId, "hackerId");
    let response = yield call(axios.post, `${CONFIG.addWalletTotal}`, data);

    if (response && response?.data?.status === 1) {
      // console.log(response.data);
      yield put(actions.addWalletTotalSuccess("Success"));
      yield put(actions.getWalletTotalRequest({ hackerId }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addWalletTotalSuccess(error?.response?.data?.message));
  }
}
export function* editWalletTotalSaga(action) {
  try {
    const { data, hackerId } = action.payload;
    // console.log(data, "data", hackerId, "hackerId");
    let response = yield call(axios.put, `${CONFIG.editWalletTotal}`, data);

    if (response && response?.data?.status === 1) {
      console.log(response.data);
      yield put(actions.editWalletTotalSuccess("Success"));
      yield put(actions.getWalletTotalRequest({ hackerId }));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.editWalletTotalError(error?.response?.data?.message));
  }
}
