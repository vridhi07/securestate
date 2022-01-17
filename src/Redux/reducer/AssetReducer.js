import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  Asset: [],
  Message: "",
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
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        Asset: action.payload,
      };

    case actions.ASSET_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };

    case actions.ADD_ASSET_REQUEST:
      return {
        ...state,
        isLoading: true,

        isError: false,
        Message: "",
      };

    case actions.ADD_ASSET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        Message: action.payload,
      };
    case actions.DELETE_ASSET_REQUEST:
      return {
        ...state,
        isLoading: false,
        isError: false,
        Message: "",
      };

    case actions.DELETE_ASSET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        Message: action.payload,
      };

    case actions.DELETE_ASSET_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        Message: action.payload,
      };
    case actions.UPDATE_ASSET_REQUEST:
      return {
        ...state,
        Message: "",
        isError: false,
      };
    case actions.UPDATE_ASSET_SUCCESS:
      return {
        ...state,

        isError: false,
        Message: action.payload,
      };
    case actions.UPDATE_ASSET_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        Message: action.payload,
      };
    default:
      return state;
  }
};

export default AssetReducer;
