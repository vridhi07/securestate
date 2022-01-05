import * as constant from "../constants/index";
const initialState = {
  formInputs: {
    email: "",
    password: "",
  },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.FORM_AUTH_INPUT:
      const { name, value } = action.payload;
      return { ...state, formInputs: { ...state.formInputs, [name]: value } };
    default:
      return state;
  }
};
export default authReducer;
