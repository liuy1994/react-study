import AppDispatcher from "../AppDispatcher";
import ActionTypes from '../ActionTypes'
const countValues = {
    First: 0,
    Second: 10,
    Third: 30
}
const CountStore = Object.assign({}, EventEmitter.prototype, {
    getCountValues: () => {
        return countValues
    },
    emitChange: () => {
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: callback => {
        this.on(CHANGE_EVENT, callback)
    },
    removeListener: callback => {
        this.removeListener(CHANGE_EVENT, callback)
    }
})
CountStore.dispatchToken = AppDispatcher.register(action => {
    if (action.type === ActionTypes.INCREMENT) {
        countValues[action.counterCaption]++
        CountStore.emitChange()
    } else if (action.type === ActionTypes.DECREMENT) {
        countValues[action.counterCaption]--
        CountStore.emitChange()
    }
})