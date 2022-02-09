import { INCREMENT, DECREMENT, INCREMENT_BY_VALUE } from "./actionTypes";

export const counterReducer = (state = { counter: 0 }, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                counter: state.counter - 1
            }
        case INCREMENT_BY_VALUE:
            return {
                counter: state.counter + action.payload
            }
        default:
            return state;
    }
}