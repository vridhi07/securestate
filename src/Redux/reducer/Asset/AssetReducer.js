import * as actions from "../../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  Asset: [],
  Message: "",
  allAsset: [],
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
    case actions.ADD_ASSET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Message: action.payload,
      };
    case actions.DELETE_ASSET_REQUEST:
      return {
        ...state,
        isLoading: false,
        isError: true,
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
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.UPDATE_ASSET_SUCCESS:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
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
    case actions.GET_ALL_ASSET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.GET_ALL_ASSET_LIST_SUCCESS:
      return {
        ...state,
        allAsset: action.payload,
        isLoading: false,
        isSuccess: false,
        isError: false,
      };
    case actions.GET_ALL_ASSET_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default AssetReducer;
