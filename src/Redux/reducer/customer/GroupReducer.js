import * as constant from "../../constant";
const initialState = {
  isLoading: false,
  isError: false,
  GroupUsers: [],
  Message: "",
  ErrorMessage: "",
};

const GroupUserListReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.GET_GROUP_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        Message: "",
        ErrorMessage: "",
      };
    case constant.GET_GROUP_LIST_SUCCESS:
      // console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        GroupUsers: action.payload,
        Message: "",
        ErrorMessage: "",
      };
    case constant.GET_GROUP_LIST_ERROR:
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

export default GroupUserListReducer;
