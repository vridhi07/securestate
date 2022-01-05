import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  authReducer,
});

export default rootReducers;
