import React, { Component } from 'react'
import CounterStore from "../stores/CounterStore";
import * as Actions from '../Actions.js';
const buttonStyle = {
    margin: '10px'
};
class Counter extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this)
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }

    onClickIncrementButton() {
        Actions.increment(this.props.caption)
    }

    onClickDecrementButton() {
        Actions.decrement(this.props.caption)
    }

    onChange() {
        const count = CounterStore.getCounterValues()[this.props.caption]
        this.setState({
            count
        })
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange)
    }

    componentWillUnmount() {
        CounterStore.removeListener(this.onChange)
    }

    render() {
        const {caption} = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}

export default Counter