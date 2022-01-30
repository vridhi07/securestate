import { combineReducers } from "redux";
import LoginReducer from "./auth/loginReducer";
import SignupReducer from "./auth/signupReducer";
import AssetReducer from "./Asset/AssetReducer";
import CompanyReducer from "./company/CompanyReducer";
import UserDetailsReducer from "./user/UserDetailsReducer";
import PentestReducer from "./Pentest/PentestReducer";

import HistoryReducer from "./Asset/HistoryReducer";
import sbomReducer from "./Asset/SBOMReducer";
import assetFilesReducer from "./Asset/FilesReducer";

const rootReducer = combineReducers({
  Login: LoginReducer,
  Signup: SignupReducer,
  Assets: AssetReducer,
  company: CompanyReducer,
  user: UserDetailsReducer,
  Pentest: PentestReducer,
  assetHistory: HistoryReducer,
  sbom: sbomReducer,
  assetFiles: assetFilesReducer,
});

export default rootReducer;
