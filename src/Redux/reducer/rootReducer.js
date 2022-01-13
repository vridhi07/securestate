import {combineReducers} from "redux";
import LoginReducer from "./loginReducer";

const rootReducer = combineReducers({
  Login: LoginReducer,
});

export default rootReducer;