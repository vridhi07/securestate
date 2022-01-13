import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers} from "redux";
import rootReducer from "../redux/reducer/rootReducer";
import rootSaga from "../redux/saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
 const store =createStore(
rootReducer,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;