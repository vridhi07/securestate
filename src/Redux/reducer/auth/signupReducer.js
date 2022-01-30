import * as actions from "../../constant";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const SignupReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };

    case actions.SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        response: action.payload,
      };

    case actions.SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        response: action.payload,
      };

    default:
      return state;
  }
};

export default SignupReducer;
