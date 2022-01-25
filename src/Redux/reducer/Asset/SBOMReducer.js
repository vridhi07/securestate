import * as actions from "../../constant";

const initialState = {
  isLoading: false,
  Message: "",
  sbomDetails: [],
  addLoading: false,
  isError: false,
  addMessage: "",
};

const sbomReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_SBOM_REQUEST:
      return {
        ...state,
        isLoading: true,
        Message: "",
        isError: false,
      };

    case actions.GET_SBOM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Message: "",
        sbomDetails: action.payload,
        isError: false,
      };

    case actions.GET_SBOM_ERROR:
      return {
        ...state,
        isLoading: false,
        Message: action.payload,
        isError: true,
      };

    case actions.ADD_SBOM_REQUEST:
      return {
        ...state,
        addLoading: true,
        isError: false,
        addMessage: "",
      };
    case actions.ADD_SBOM_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addMessage: action.payload,
        isError: false,
      };
    case actions.ADD_SBOM_ERROR:
      return {
        ...state,
        addLoading: false,
        addMessage: action.payload,
        isError: true,
      };
    default:
      return state;
  }
};

export default sbomReducer;
