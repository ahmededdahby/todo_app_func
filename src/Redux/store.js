import {  combineReducers, applyMiddleware } from "redux";
import {GET_TODO , POST_TODO}from "./Reducer"
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import { configureStore } from '@reduxjs/toolkit'

const reducers = combineReducers({ 
    data : GET_TODO,
    post : POST_TODO
});

const middleware = [thunk]
const store = configureStore (
    {reducer : reducers},
    composeWithDevTools(applyMiddleware(...middleware)),
    
)
export default store;