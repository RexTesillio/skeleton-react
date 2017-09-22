import React, { Component } from 'react';
import Radium from 'radium';

class ServerMessage extends Component {
    componentDidMount() {
        this.props.getServerMessage();
    }
    render() {
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}
export default Radium(ServerMessage);