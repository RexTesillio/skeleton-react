import types from '../actions/actionTypes/counter';
import update from 'immutability-helper';

const initialState = {
    number: 0
};

export default function counter(state = initialState, action) {
    switch (action.type) {
        case types.COUNTER_INCREASE:
            return update(state, {
                number: { $set: state.number + 1 }
            });
        case types.COUNTER_DECREASE:
            return update(state, {
                number: { $set: state.number - 1 }
            });
        default:
            return state;
    }
}