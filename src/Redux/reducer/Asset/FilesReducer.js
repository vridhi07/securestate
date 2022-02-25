import * as constant from "../../constant";
const initialState = {
  isLoading: false,
  isError: { status: false, msg: "" },
  assetFiles: [],
  AddMessage: "",
  addLoading: false,
};

const assetFilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_ASSET_FILES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: { ...state.isError, status: false, msg: "" },
      };
    case constant.GET_ASSET_FILES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: { ...state.isError, status: false, msg: "" },
        assetFiles: action.payload,
      };
    case constant.GET_ASSET_FILES_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: { ...state.isError, status: true, msg: action.payload },
      };

    case constant.ADD_FILES_REQUEST:
      return {
        ...state,
        // addLoading: true,
        isError: { ...state.isError, status: true, msg: action.payload },
        AddMessage: "",
      };
    case constant.ADD_FILES_SUCCESS:
      return {
        ...state,
        // addLoading: false,
        isError: { ...state.isError, status: true, msg: action.payload },
        AddMessage: action.payload,
      };

    case constant.ADD_FILES_ERROR:
      return {
        ...state,
        // addLoading: false,
        isError: { ...state.isError, status: true, msg: action.payload },
        AddMessage: "",
      };
    case constant.DELETE_FILES_REQUEST:
      return {
        ...state,
        // addLoading: false,
        isError: { ...state.isError, status: true, msg: "" },
        AddMessage: "",
      };
    case constant.DELETE_FILES_SUCCESS:
      return {
        ...state,
        // addLoading: false,
        isError: { ...state.isError, status: true, msg: "" },
        AddMessage: action.payload,
      };
    case constant.DELETE_FILES_ERROR:
      return {
        ...state,
        // addLoading: false,
        isError: { ...state.isError, status: true, msg: action.payload },
        AddMessage: "",
      };
    default:
      return state;
  }
};

export default assetFilesReducer;
