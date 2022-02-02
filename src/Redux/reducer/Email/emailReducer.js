import * as constant from "../../constant";
const initialState = {
  isLoading: false,

  isError: false,
  email: [],
  Message: "",
  ErrorMessage: "",
};

const EmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_EMAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        Message: "",
        ErrorMessage: "",
      };
    case constant.GET_EMAIL_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        email: action.payload,
        Message: "",
        ErrorMessage: "",
      };
    case constant.GET_EMAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Message: "",
        ErrorMessage: action.payload,
      };
    // case constant.SEND_CHAT_REQUEST:
    //   return {
    //     ...state,
    //     isLoading: true,
    //     isError: false,
    //     Message: "",
    //     ErrorMessage: "",
    //   };
    // case constant.SEND_CHAT_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: false,
    //     Message: action.payload,
    //     ErrorMessage: "",
    //   };
    // case constant.SEND_CHAT_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     isError: true,
    //     Message: "",
    //     ErrorMessage: action.payload,
    //   };
    default:
      return state;
  }
};

export default EmailReducer;
