import React, { Component } from 'react';
import { connect } from 'react-redux'

class Summary extends Component{
    componentDidMount() {
        console.log('mount')
    }

    componentWillUnmount() {
        console.log('unmount')
    }

    render() {
        const { sum } = this.props
        return <div>Total: {sum}</div>
    }
}
function mapState(state) {
    let sum = 0
    for (let key in state) {
        if (state.hasOwnProperty(key)) {
            sum += state[key]
        }
    }
    return { sum }
}

export default connect(mapState)(Summary)
