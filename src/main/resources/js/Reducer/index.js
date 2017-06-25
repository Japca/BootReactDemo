import {combineReducers} from "redux";
import { loadItems } from "./itemsReducer.js";

export const reducers = combineReducers({
    items: loadItems,
});

