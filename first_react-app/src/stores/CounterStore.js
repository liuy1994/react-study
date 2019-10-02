import AppDispatcher from "../AppDispatcher";
import * as ActionTypes from '../ActionTypes.js';
import { EventEmitter } from 'events';
const CHANGE_EVENT = 'changed';
const countValues = {
    First: 0,
    Second: 10,
    Third: 25
}
const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function() {
        return countValues
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback)
    },
    removeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }
})
CounterStore.dispatchToken = AppDispatcher.register(action => {
    if (action.type === ActionTypes.INCREMENT) {
        countValues[action.counterCaption]++
        CounterStore.emitChange()
    } else if (action.type === ActionTypes.DECREMENT) {
        countValues[action.counterCaption]--
        CounterStore.emitChange()
    }
})
export default CounterStore