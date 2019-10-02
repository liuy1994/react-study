import React, { Component } from 'react';
import SummaryStore from '../stores/SummaryStore.js';

class Summary extends Component{
    constructor(props) {
        super(props)
        this.onUpdate = this.onUpdate.bind(this)
        this.state = {
            sum: SummaryStore.getSummary()
        }
    }

    componentDidMount() {
        SummaryStore.addChangeListener(this.onUpdate)
    }

    componentWillUnmount() {
        SummaryStore.removeChangeListener(this.onUpdate)
    }

    onUpdate() {
        const sum = SummaryStore.getSummary()
        this.setState({
            sum
        })
    }

    render() {
        return <div>Total: {this.state.sum}</div>
    }
}

export default Summary
