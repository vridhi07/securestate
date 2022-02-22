import axios from "axios";
import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";

export function* getSubscriptionSaga(action) {
  try {
    // console.log("I was called");
    let response = yield call(
      axios.get,
      `${CONFIG.getSubscription}/${action.payload}`
    );
    if (response && response.data?.status === 1) {
      // console.log(response);
      yield put(actions.getSubscriptionListSuccess(response?.data?.data));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.getSubscriptionListError(error?.response?.data?.message));
  }
}

export function* AddSubscriptionSaga(action) {
  try {
    const { data, company_id } = action.payload;

    console.log(company_id);
    let response = yield call(axios.post, CONFIG.addSubscription, data);
    console.log(response?.data);
    if (response && response.data?.status === 1) {
      // console.log("Yea successfull");
      yield put(actions.addSubscriptionSuccess("successfully add"));
      yield put(actions.getSubscriptionListRequest(company_id));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addSubscriptionError(error?.response?.data?.message));
  }
}

export function* DeleteSubscriptionSaga(action) {
  try {
    const { subscriptionId, company_id } = action.payload;

    console.log(company_id);
    let response = yield call(axios.delete, CONFIG.deleteSubscription, {
      data: {
        subscriptionId,
      },
    });
    console.log(response?.data);
    if (response && response.data?.status === 1) {
      // console.log("Yea successfull");
      yield put(actions.deleteSubscriptionSuccess("successfully deleted"));
      yield put(actions.getSubscriptionListRequest(company_id));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.deleteSubscriptionError(error?.response?.data?.message));
  }
}
