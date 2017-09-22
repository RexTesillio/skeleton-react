import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Router from './components/Router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';
import Promise from 'promise-polyfill';


// To add to window
if (!window.Promise) {
    window.Promise = Promise;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(promiseMiddleware(), thunk, createLogger());
const store = createStore(reducers, composeEnhancers(middleware));
ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
