import { all } from "redux-saga/effects";
import { watchDecrement, watchIncreaseByValue, watchIncrement } from "./store/counter/saga";

export default function* rootSaga() {
    yield all([
        watchIncrement(),
        watchDecrement(),
        watchIncreaseByValue()
    ])
}