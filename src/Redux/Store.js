import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, combineReducers} from "redux";
import rootReducer from "./reducer/rootReducer";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
 const store =createStore(
rootReducer,  applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;