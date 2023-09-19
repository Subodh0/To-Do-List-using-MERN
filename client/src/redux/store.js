import thunk  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todoReducers } from './reducers/todoReducer';
import { tabReducers } from './reducers/tabReducers';

const reducer = combineReducers({
    todos: todoReducers,
    currentTabs: tabReducers
})


const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;