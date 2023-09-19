import * as actionTypes from '../actions/type';


export const todoReducers = (state=[], action) =>{
    switch(action.type){
        case actionTypes.ADDNEW_TODO:
            // here we are using ...state to get the previous state of the data
            return [action.payload, ...state]

        case actionTypes.GETALL_TODO:
            //here we don't need the previous state as it will create duplicate of the curr and lastest 
            return action.payload

        case actionTypes.TOGGLE_TODO:
            return state.map( todo =>(
                todo._id === action.payload._id ? { ...todo, done: !todo.done } : todo
            ))
        case actionTypes.UPDATE_TODO:
            return state.map( todo =>(
                todo._id === action.payload._id ? { ...todo, data: action.payload.data } : todo
            ))
        default:
            return state
    }
};