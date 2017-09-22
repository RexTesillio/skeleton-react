import types from './actionTypes/serverMessage';
import * as services from '../services/serverMessage';

export const getServerMessage = () => ({
    type: types.GET_SERVER_MESSAGE,
    payload: {
        promise: services.getServerMessage()
    }
});