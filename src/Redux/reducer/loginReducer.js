import * as actions from "../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };

    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        response: action.payload,
      };

    case actions.LOGIN_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
        response: action.payload,
      };

    default:
      return state;
  }
};

export default LoginReducer;
