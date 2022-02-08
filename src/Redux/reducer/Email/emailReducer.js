import * as constant from "../../constant";
import {updatedReply} from './replyUtil'
const initialState = {
  isLoading: false,

  isError: false,
  email: [],
  Message: "",
  ErrorMessage: "",
  sendEmailLoader: false,
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

    case constant.SEND_EMAIL_REQUEST:
      return {
        ...state,
        sendEmailLoader: true,
      };
    case constant.SEND_EMAIL_SUCCESS:
      return {
        ...state,
        sendEmailLoader: false,
        sendEmailStatus: action.payload,
      };
    case constant.SEND_EMAIL_ERROR:
      return {
        ...state,
        sendEmailLoader: false,
        sendEmailError: true,
      };
    case constant.SEND_REPLY_REQUEST:
      return {
        ...state,
        emailreplyLoader: true,
      };

    case constant.SEND_REPLY_SUCCESS:
      return {
        ...state,
        emailreplyLoader: false,
        emailReplyStatus: action.payload,
      };

    case constant.SEND_REPLY_ERROR:
      return {
        ...state,
        emailreplyLoader: false,
      };
      
    case constant.READ_MAIL_SUCCESS:
      return {
        ...state,
        messageReadStatus: action.payload,
      };

      // case constant.UPDATE_REPLY_REQUEST:
      //   console.log(action.payload,'action reply')
      //   return{
      //     ...state,
      //     emails:{
      //       ...state.emails,
      //       emailsss:updatedReply(state?.emails.email)
      //     }
      //   }
    default:
      return state;
  }
};

export default EmailReducer;
