import { REMOVE_TODO, TOGGLE_TODO, ADD_TODO } from "./actionTypes";

export default (state=[], action) => {
    switch (action.type) {
        case REMOVE_TODO:
            return state.filter(todoItem => todoItem.id !== action.id)
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map(todoItem => {
                if(todoItem.id === action.id) {
                    return {
                        ...todoItem,
                        completed: !todoItem.completed
                    }
                } else {
                    return todoItem
                }
            })
        default:
            return state
    }
}