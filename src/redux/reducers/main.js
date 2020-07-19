import {combineReducers, createStore} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk"
import customerReducer from "./customerReducer";
import singleDataReducer from "./singleDataReducer";

const rootReducer=combineReducers({
    customerReducer,
    singleDataReducer
});

export default function configureStore() {
    return createStore(rootReducer,applyMiddleware(thunk))
}
