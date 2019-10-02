import { createStore } from 'redux'
import reducer from './Reducer'
const initValues = {
    First: 0,
    Second: 10,
    Third: 25
}

const Store = createStore(reducer, initValues)
export default Store