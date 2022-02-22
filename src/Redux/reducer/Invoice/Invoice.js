import * as constant from "../../constant";
const initialState = {
  isLoading: false,
  isError: false,
  invoiceData: [],
  Message: "",
  ErrorMessage: "",
  totalPage: null,
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
        invoiceData: action.payload.data,
        totalPage: action.payload.total,
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
