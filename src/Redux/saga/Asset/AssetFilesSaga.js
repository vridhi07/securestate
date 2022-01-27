import Axios from "../../../Service/axiosInstance";
import { CONFIG } from "../../../Service/CONFIG";
import { put, call } from "redux-saga/effects";
import * as actions from "../../action/index";

export function* AddFilesSaga(action) {
  try {
    const { assetId, formdata } = action.payload;
    let response = yield call(
      Axios.post,
      `${CONFIG.assetTabs}/${assetId}/uploadFile`,
      formdata
    );
    if (response && response.data?.status === 1) {
      console.log(response, "files");
      yield put(actions.addFilesSuccess("Added successfully"));
    }
  } catch (error) {
    // console.log(error.response.data.message);
    yield put(actions.addFilesError(error.response.data.message));
  }
}
