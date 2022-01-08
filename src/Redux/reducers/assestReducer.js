import * as constant from "../constants/index";

const initialState = {
  assetData: [],
  open: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_ASSET_DATA:
      return { ...state, assetData: action.payload.data };
    case constant.ASSET_MODAL_OPEN:
      return { ...state, open: true };
    case constant.ASSET_MODAL_CLOSE:
      return { ...state, open: false };
    default:
      return state;
  }
};
export default authReducer;
