import * as actions from "../../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: { status: false, msg: "" },
  companyDetails: [],
  selectedName: "",
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
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: { ...state.isError, status: false, msg: "" },
        companyDetails: action.payload,
        selectedCompany: action.payload[0]?._id,
        selectedName: action.payload[0]?.company_name,
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
      // console.log(action.payload);
      return {
        ...state,
        selectedCompany: action.payload,
      };
    case actions.HANDLE_COMPANY_NAME_CHANGE:
      return {
        ...state,
        selectedName: action.payload,
      };
    default:
      return state;
  }
};

export default CompanyReducer;
