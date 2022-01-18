import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: { status: false, msg: "" },
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: { ...state.isError, status: false, msg: "" },
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: { ...state.isError, status: false, msg: "" },
      };

    case actions.LOGIN_ERROR:
      const { isError } = state;
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: { ...isError, status: true, msg: action.payload },
      };
    case actions.RESET_LOG_ALERT:
      return {
        ...state,
        isError: {
          ...state.isError,
          status: false,
          msg: "",
        },
      };
    default:
      return state;
  }
};

export default LoginReducer;
