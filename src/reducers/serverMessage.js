import types from '../actions/actionTypes/serverMessage';
import update from 'immutability-helper';
import * as rs from '../utils/requestStatus';

const initialState = {
    message: 'Not yet response data',
    requests: {
        getServerMessage: {
            ...rs.request
        }
    }
};

export default function serverMessage(state = initialState, action) {
    switch (action.type) {
        case types.GET_SERVER_MESSAGE + rs._PENDING:
            return update(state, {
                requests: {
                    getServerMessage: { $set: rs.pending }
                }
            });
        case types.GET_SERVER_MESSAGE + rs._FULFILLED:
            return update(state, {
                message: { $set: action.payload.data },
                requests: {
                    ...state.requests,
                    getServerMessage: { $set: rs.fulfilled }
                }
            });
        case types.GET_SERVER_MESSAGE + rs._REJECTED:
            return update(state, {
                requests: {
                    getServerMessage: { $set: { ...rs.rejected, error: action.payload } }
                }
            });
        default:
            return state;
    }
}