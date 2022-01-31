import * as actions from "../../constant";

const initialState = {
  isLoading: false,
  Message: "",
  assetDetails: [],
  addLoading: false,
  isError: false,

  addMessage: "",
};

const AssetDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ASSET_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        Message: "",
        isError: false,
      };

    case actions.GET_ASSET_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Message: "",
        assetDetails: action.payload,
        isError: false,
      };

    case actions.GET_ASSET_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        Message: action.payload,
        isError: true,
      };

    default:
      return state;
  }
};

export default AssetDetailsReducer;
