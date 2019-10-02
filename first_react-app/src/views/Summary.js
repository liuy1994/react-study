import React, { Component } from 'react';
import SummaryStore from '../stores/SummaryStore.js';
import store from '../Store'

class Summary extends Component{
    constructor(props) {
        super(props)
        this.onUpdate = this.onUpdate.bind(this)
        this.getOwnState = this.getOwnState.bind(this);
        this.state = this.getOwnState()
    }

    componentDidMount() {
        store.subscribe(this.onUpdate)
    }

    componentWillUnmount() {
        console.log('unmount')
        // store.unsubscribe(this.onUpdate)
    }

    onUpdate() {
        const sum = SummaryStore.getSummary()
        this.setState(this.getOwnState())
    }

    getOwnState() {
        const state = store.getState()
        let sum = 0
        for (let key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key]
            }
        }
        return { sum }
    }

    render() {
        const { sum } = this.state
        return <div>Total: {sum}</div>
    }
}

export default Summary
