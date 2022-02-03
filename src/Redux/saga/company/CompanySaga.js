import axios from "axios";
import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";

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

export function* AddCompanySaga(action) {
  try {
    let response = yield call(axios.post, CONFIG.addCompany,action.payload);
    if (response && response.data?.status === 1) {
      yield put(actions.addCompanySuccess(response.data.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addCompanyError(error.response.data.message));
  }
}

export function* GetCompanyByIdSaga(action) {
  const data=action.payload
  try {
    let response = yield call(axios.get, `${CONFIG.getCompanyById}/${data.companyId}`);
    if (response && response.data?.status === 1) {
      yield put(actions.getCompanyByIdSuccess(response.data.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.getCompanyByIdError(error.response.data.message));
  }
}


export function* UpdateCompanyDetails(action) {
  
  try {
    let response = yield call(axios.put, CONFIG.updateCompanyDetails ,{...action.payload});
    if (response && response.data?.status === 1) {
      yield put(actions.updateCompanyDetailsSuccess(response.data.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.updateCompanyDetailsError(error.response.data.message));
  }
}

