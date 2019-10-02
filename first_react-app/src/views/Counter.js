import React, { Component } from 'react'
import CounterStore from "../stores/CounterStore";
import * as Actions from '../Actions.js';
import store from '../Store'
const buttonStyle = {
    margin: '10px'
};
class Counter extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this)
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
        this.getOwnState = this.getOwnState.bind(this);
        this.state = this.getOwnState()
    }

    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        }
    }

    onClickIncrementButton() {
        store.dispatch(Actions.increment(this.props.caption))
    }

    onClickDecrementButton() {
        store.dispatch(Actions.decrement(this.props.caption))
    }

    onChange() {
        this.setState(store.getState())
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    }

    componentDidMount() {
        store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        console.log('unmount')
        // store.unsubscribe(this.onChange)
    }

    render() {
        const { caption } = this.props;
        const { value } = this.state
        return (
            <div>
                <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
                <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: { value }</span>
            </div>
        );
    }
}

export default Counter