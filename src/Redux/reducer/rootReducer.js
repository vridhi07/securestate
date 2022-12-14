import { combineReducers } from "redux";
import LoginReducer from "./auth/loginReducer";
import SignupReducer from "./auth/signupReducer";
import AssetReducer from "./Asset/AssetReducer";
import CompanyReducer from "./company/CompanyReducer";
import UserDetailsReducer from "./user/UserDetailsReducer";
import UsersReducer from "./user/UserReducer";
import PentestReducer from "./Pentest/PentestReducer";
import HistoryReducer from "./Asset/HistoryReducer";
import sbomReducer from "./Asset/SBOMReducer";
import assetFilesReducer from "./Asset/FilesReducer";
import AssetDetailsReducer from "./Asset/AssetDetailsReducer";
import AssetTabsDetailsReducer from "./Pentest/PentestTabReducer";
import scopeReducer from "./Pentest/scopeReducer";
import pentestChatReducer from "./Pentest/PentestChatReducer";
import EmailReducer from "./Email/emailReducer";
import InvoiceReducer from "./Invoice/Invoice";
import GroupUserListReducer from "./customer/GroupReducer";
import GetSubscriptionReducer from "./customer/SubscriptionReducer";
import WalletReducer from "./wallet/WalletReducer";
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
  assetDetails: AssetDetailsReducer,
  pentestTab: AssetTabsDetailsReducer,
  users: UsersReducer,
  scope: scopeReducer,
  pentestChat: pentestChatReducer,
  emails: EmailReducer,
  Invoice: InvoiceReducer,
  GroupUserList: GroupUserListReducer,
  subscriber: GetSubscriptionReducer,
  wallet: WalletReducer,
});

export default rootReducer;
