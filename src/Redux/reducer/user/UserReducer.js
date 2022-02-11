import * as actions from "../../constant";

const initialState = {
  isLoading: true,
  isError: false,
  users: [],
  Message: "",
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        Message: "",
      };

    case actions.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: action.payload,
        Message: "",
      };

    case actions.GET_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Message: action.payload,
      };
    case actions.ADD_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        Message: action.payload,
      };
    case actions.ADD_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        Message: "",
      };
    case actions.ADD_USERS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        Message: action.payload,
      };
    case actions.RESET_USERS_ALERT:
      return {
        ...state,
        isError: false,
        Message: "",
      };
    default:
      return state;
  }
};

export default UsersReducer;
