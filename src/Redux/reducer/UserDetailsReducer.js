import * as actions from "../constant";

const initialState = {
  isLoading: true,
  isSuccess: false,
  isError: false,
  userDetails: [],
  Message: "",
};

const UserDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USER_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        Message: "",
      };

    case actions.USER_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        isError: false,
        userDetails: action.payload,
        Message: "",
      };

    case actions.USER_DETAILS_ERROR:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isError: true,
        Message: action.payload,
      };

    default:
      return state;
  }
};

export default UserDetailsReducer;
