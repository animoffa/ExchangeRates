import {applyMiddleware, combineReducers, createStore} from "redux";
import AppReducer from "./App-reducer";
import thunkMiddleware from "redux-thunk";

let redusers =combineReducers({
    App:AppReducer,
});

let store = createStore(redusers,applyMiddleware(thunkMiddleware));
window.store= store;

export default store;