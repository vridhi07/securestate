import { combineReducers } from "redux";
import LoginReducer from "./loginReducer";
import SignupReducer from "./signupReducer";
import AssetReducer from "./AssetReducer";
const rootReducer = combineReducers({
  Login: LoginReducer,
  Signup: SignupReducer,
  Assets: AssetReducer,
});

export default rootReducer;
