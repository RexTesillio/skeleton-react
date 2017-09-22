import { combineReducers } from 'redux';
import counter from './counter';
import serverMessage from './serverMessage';
export default combineReducers({
    counter,
    serverMessage,
});