import * as constant from "../../constant";
const initialState = {
  isLoading: false,
  isError: false,
  invoice: [],
  Message: "",
  ErrorMessage: "",
};

const InvoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_INVOICE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        Message: "",
        ErrorMessage: "",
      };
    case constant.GET_INVOICE_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        invoice: action.payload,
        Message: "",
        ErrorMessage: "",
      };
    case constant.GET_INVOICE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Message: "",
        ErrorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default InvoiceReducer;
