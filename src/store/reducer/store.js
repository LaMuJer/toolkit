import {createStore,combineReducers,applyMiddleware} from 'redux'
import cakeReducer from "./cakeReducer";
import thunk from "redux-thunk";
import toggleReducer from "./toggleReducer";

const reducer = combineReducers({
    cake: cakeReducer,
    toggle: toggleReducer
})

export const store = createStore(reducer, {}, applyMiddleware(thunk))


