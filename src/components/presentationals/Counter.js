import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>{this.props.number}</h1>
                </div>
                <div>
                    <button onClick={this.props.handleClickPlus}>+</button>
                    <button onClick={this.props.handleClickMinus}>-</button>
                </div>
            </div>
        );
    }
}
export default Counter;