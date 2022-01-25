import { combineReducers } from "redux";
import LoginReducer from "./loginReducer";
import SignupReducer from "./signupReducer";
import AssetReducer from "./Asset/AssetReducer";
import CompanyReducer from "./CompanyReducer";
import UserDetailsReducer from "./UserDetailsReducer";
import ActivePentestReducer from "./Pentest/ActivePentestReducer";
import CompletedPentest from "./Pentest/CompletedPentest";
import UpcomingPentestReducer from "./Pentest/UpcomingPentestReducer";
const rootReducer = combineReducers({
  Login: LoginReducer,
  Signup: SignupReducer,
  Assets: AssetReducer,
  company: CompanyReducer,
  user: UserDetailsReducer,
  activePentest: ActivePentestReducer,
  CompletedPentest,
  UpcomingPentest: UpcomingPentestReducer,
});

export default rootReducer;
