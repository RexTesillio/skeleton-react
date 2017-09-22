import types from './actionTypes/counter';
import { createAction } from 'redux-actions';

export const counterIncrease = createAction(types.COUNTER_INCREASE);
export const counterDecrease = createAction(types.COUNTER_DECREASE);