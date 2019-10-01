import React, { Component } from 'react'
import Counter from "./Counter";

class CounterPanel extends Component{
    render() {
        return <div>
            <Counter caption="First" initValue={12} />
            <Counter caption="Second" initValue={23} />
            <Counter caption="Third" initValue={56} />
        </div>
    }
}
export default CounterPanel