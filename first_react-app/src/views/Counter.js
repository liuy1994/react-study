import React, { Component } from 'react'
import * as Actions from '../Actions.js';
import { connect } from 'react-redux'
const buttonStyle = {
    margin: '10px'
};
class Counter extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextProps.value !== this.props.value);
    }

    componentDidMount() {
        console.log('mount')
    }

    componentWillUnmount() {
        console.log('unmount')
    }

    render() {
        const { caption, value, onIncrement, onDecrement } = this.props;
        return (
            <div>
                <button style={buttonStyle} onClick={onIncrement}>+</button>
                <button style={buttonStyle} onClick={onDecrement}>-</button>
                <span>{caption} count: { value }</span>
            </div>
        );
    }
}

function mapState(state, ownProps) {
    return {
        value: state[ownProps.caption]
    }
}

function mapDispatch(dispatch, ownProps) {
    return {
        onIncrement: () => {
            dispatch(Actions.increment(ownProps.caption));
        },
        onDecrement: () => {
            dispatch(Actions.decrement(ownProps.caption));
        }
    }
}

export default connect(mapState, mapDispatch)(Counter)