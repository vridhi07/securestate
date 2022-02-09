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
