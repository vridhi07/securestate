import authReducer from "./authReducer";
import assetReducer from "../reducers/assestReducer";
import { pentestReducer } from "../Pentest/reducer/pentestReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  authReducer,
  assetReducer,
  pentestReducer,
});

export default rootReducers;
