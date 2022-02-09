import { INCREMENT, DECREMENT, INCREMENT_BY_VALUE } from "./actionTypes";

export const incrementAction = state => {
    return {
        type: INCREMENT,
        payload: state
    };
}

export const decrementAction = state => {
    return {
        type: DECREMENT,
        payload: state
    };
}

export const increateByValueAction = state => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: state
    };
}