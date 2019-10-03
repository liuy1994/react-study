import React, { Component } from 'react'
// import CounterPanel from "./CounterPanel";
import ControlPanel from "./views/ControlPanel";

import { Provider } from 'react-redux'
import store from './Store'

class App extends Component {
    render() {
        return <Provider store={store}>
            <ControlPanel />
        </Provider>
    }
}

export default App