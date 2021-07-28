import { combineReducers, createStore } from 'redux'
import blogReducer from './redux/reducers/blogReducer'

const reducers = combineReducers({ blogReducer })

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store