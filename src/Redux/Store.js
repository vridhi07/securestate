import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer/rootReducer";
import rootSaga from "./saga/rootSaga";
const Prod = process.env.REACT_APP_PROD;
// console.log(Prod);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  (Prod !== "production" &&
    typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;

// (Prod !== "production" &&
//   typeof window !== "undefined" &&
