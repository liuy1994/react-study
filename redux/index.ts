import user from './user'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import { persistCombineReducers } from 'redux-persist'
// import storage from 'redux-persist/es/storage'

// const combine = persistCombineReducers({
//     key: 'root',
//     storage,
// }, { user })
const reducer = createStore(user, applyMiddleware(thunk))

export default reducer