import authReducer from "./authReducer";
import assetReducer from "../reducers/assestReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  authReducer,
  assetReducer,
});

export default rootReducers;
