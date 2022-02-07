import * as constant from "../../constant";
const initialState = {
  isLoading: false,
  isError: false,
  SubscriptionData: [],
  Message: "",
  ErrorMessage: "",
};

const GetSubscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_SUBSCRIPTION_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        Message: "",
        ErrorMessage: "",
      };
    case constant.GET_SUBSCRIPTION_LIST_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        SubscriptionData: action.payload,
        Message: "",
        ErrorMessage: "",
      };
    case constant.GET_SUBSCRIPTION_LIST_ERROR:
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

export default GetSubscriptionReducer;
