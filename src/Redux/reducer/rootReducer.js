import { combineReducers } from "redux";
import LoginReducer from "./loginReducer";
import SignupReducer from "./signupReducer";
import AssetReducer from "./AssetReducer";
import CompanyReducer from "./CompanyReducer";
import UserDetailsReducer from "./UserDetailsReducer";
import ActivePentestReducer from "./Pentest/ActivePentestReducer";
const rootReducer = combineReducers({
  Login: LoginReducer,
  Signup: SignupReducer,
  Assets: AssetReducer,
  company: CompanyReducer,
  user: UserDetailsReducer,
  activePentest: ActivePentestReducer,
});

export default rootReducer;
