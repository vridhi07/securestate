import * as actions from "../../constant";

const initialState = {
  isLoading: true,
  isError: false,
  AllPentest: [],
  allHacker: [],
  Message: "",
};

const WalletReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ALL_PENTEST_WITH_COMPANY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        Message: "",
      };

    case actions.ALL_PENTEST_WITH_COMPANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        AllPentest: action.payload,
        Message: "",
      };

    case actions.ALL_PENTEST_WITH_COMPANY_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Message: action.payload,
      };
    case actions.ALL_HACKER_WITH_COMPANY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        Message: "",
      };

    case actions.ALL_HACKER_WITH_COMPANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        allHacker: action.payload,
        Message: "",
      };

    case actions.ALL_HACKER_WITH_COMPANY_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Message: action.payload,
      };

    default:
      return state;
  }
};

export default WalletReducer;
