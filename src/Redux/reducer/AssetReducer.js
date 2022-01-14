import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  Asset: [],
};

const AssetReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ASSET_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };

    case actions.ASSET_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        Asset: action.payload,
      };

    case actions.ASSET_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
        Asset: action.payload,
      };

    default:
      return state;
  }
};

export default AssetReducer;
