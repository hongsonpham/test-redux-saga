import { counterReducer } from "./store/counter/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga";

const rootReducer = combineReducers({
    counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;