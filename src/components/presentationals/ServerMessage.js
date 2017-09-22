import React, { Component } from 'react';

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
export default ServerMessage;