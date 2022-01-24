import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: { status: false, msg: "" },
  companyDetails: [],

  selectedCompany: "",
};

const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.COMPANY_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: { ...state.isError, status: false, msg: "" },
        selectedCompany: "",
      };

    case actions.COMPANY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: { ...state.isError, status: false, msg: "" },
        companyDetails: action.payload,
        selectedCompany: "",
      };

    case actions.COMPANY_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: { ...state.isError, status: false, msg: action.payload },
        selectedCompany: "",
      };

    case actions.GET_SELECTED_COMPANY:
      console.log(action.payload);
      return {
        ...state,
        selectedCompany: action.payload,
      };
    default:
      return state;
  }
};

export default CompanyReducer;
