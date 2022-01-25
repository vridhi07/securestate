import * as actions from "../../constant";

const initialState = {
  isLoading: false,
  Message: "",
  historyDetails: [],
  addLoading: false,
  isError: false,
  addMessage: "",
};

const HistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_HISTORY_REQUEST:
      return {
        ...state,
        isLoading: true,
        Message: "",
        isError: false,
      };

    case actions.GET_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Message: "",
        historyDetails: action.payload,
        isError: false,
      };

    case actions.GET_HISTORY_ERROR:
      return {
        ...state,
        isLoading: false,
        Message: action.payload,
        isError: true,
      };

    case actions.ADD_HISTORY_REQUEST:
      return {
        ...state,
        addLoading: true,
        isError: false,
        addMessage: "",
      };
    case actions.ADD_HISTORY_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addMessage: action.payload,
        isError: false,
      };
    case actions.ADD_HISTORY_ERROR:
      return {
        ...state,
        addLoading: false,
        addMessage: action.payload,
        isError: true,
      };
    default:
      return state;
  }
};

export default HistoryReducer;
