import * as constant from "../constants/index";

const initialState = {
  assetData: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_ASSET_DATA:
      return { ...state, assetData: action.payload.data };
    default:
      return state;
  }
};
export default authReducer;
