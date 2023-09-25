import { createStore, combineReducers } from "redux";
import { todoReducer } from "./todoReducer"
import { composeWithDevTools } from "redux-devtools-extension"
import { pageReducer } from "./pageReducer";

const rootReducer = combineReducers({
    todo: todoReducer,
    page: pageReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());