import {combineReducers} from "redux";
import LoginReducer from "./loginReducer";
import SignupReducer from "./signupReducer";

const rootReducer = combineReducers({
  Login: LoginReducer,
  Signup: SignupReducer,
});

export default rootReducer;