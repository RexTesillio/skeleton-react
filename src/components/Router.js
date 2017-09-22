import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Counter, ServerMessage } from './containers';
import { StyleRoot } from 'radium';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <StyleRoot>
                <Router history={history}>
                    <div>
                        <Route exact path="/" component={Counter} />
                        <Route path="/server" component={ServerMessage} />
                    </div>
                </Router>
            </StyleRoot>
        );
    }
}
export default App;
