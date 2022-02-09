import { put, takeEvery } from 'redux-saga/effects';
import { INCREMENT, DECREMENT, INCREMENT_BY_VALUE } from "./actionTypes";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* incrementAsync() {
    console.log("watch increment");
    yield delay(1000);
    yield put({ type: INCREMENT });
}

export function* watchIncrement() {
    yield takeEvery(INCREMENT, incrementAsync);
}

export function* decrementAsync() {
    console.log("watch decrement");
    yield delay(1000);
    yield put({ type: DECREMENT });
}

export function* watchDecrement() {
    yield takeEvery(DECREMENT, decrementAsync);
}

export function* increaseByValueAsync() {
    console.log("increase by value");
    yield delay(3000);
    yield put({ type: INCREMENT_BY_VALUE });
}

export function* watchIncreaseByValue() {
    yield takeEvery(INCREMENT_BY_VALUE, increaseByValueAsync);
}