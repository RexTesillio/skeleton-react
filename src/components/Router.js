import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Counter } from './containers';
import { StyleRoot } from 'radium';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <StyleRoot>
                <Router history={history}>
                    <Route path="/" component={Counter}>
                    </Route>
                </Router>
            </StyleRoot>
        );
    }
}
export default App;
