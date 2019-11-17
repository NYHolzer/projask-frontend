import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    users: usersReducer
})

const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);

const store = createStore(reducer, enhancer)

export default store